import fs from 'fs/promises';
import path from 'path';

const BLOG_DIR = 'src/content/blog';

async function updateBlogPost(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  
  // First, normalize line endings
  content = content.replace(/\r\n/g, '\n');
  
  // Extract frontmatter and content
  const parts = content.split(/^---\s*$/m);
  if (parts.length < 3) {
    console.log(`Invalid frontmatter format in ${filePath}`);
    return;
  }
  
  // Update frontmatter image paths to match Astro's expected format
  let frontmatter = parts[1].replace(
    /image:\s*{\s*src:\s*"(?:\/src\/assets\/|\.\.\/\.\.\/assets\/)(.*?)"/g,
    'image: {\n    src: "/src/assets/$1"'
  );
  
  // Get main content
  let mainContent = parts.slice(2).join('---');
  
  // Remove any existing imports
  mainContent = mainContent.replace(/import.*?from.*?\n/g, '');
  
  // Add BlogImage import at the start
  mainContent = 'import BlogImage from "@components/BlogImage.astro"\n\n' + mainContent.trim();
  
  // Replace markdown images with BlogImage component
  mainContent = mainContent.replace(
    /!\[(.*?)\]\((\.\.\/\.\.\/assets\/.*?|\/src\/assets\/.*?)\)/g,
    (match, alt, path) => {
      const imagePath = path.replace(/^(\.\.\/\.\.\/assets\/|\/src\/assets\/)/, '');
      return `<BlogImage \n  src="/src/assets/${imagePath}"\n  alt="${alt}"\n/>`;
    }
  );

  // Fix any existing BlogImage components
  mainContent = mainContent.replace(
    /<BlogImage\s+src="[^"]*?\/src\/assets\/(.*?)"\s+alt="([^"]*?)"\s*\/>/g,
    '<BlogImage \n  src="/src/assets/$1"\n  alt="$2"\n/>'
  );

  // Replace commented out images
  mainContent = mainContent.replace(
    /<!--\s*!\[(.*?)\]\((.*?)\)\s*-->/g,
    '<!-- Removed commented image: $1 -->'
  );

  // Clean up any double blank lines
  mainContent = mainContent.replace(/\n\n\n+/g, '\n\n');

  // Reconstruct the file with proper structure
  const newContent = `---\n${frontmatter.trim()}\n---\n\n${mainContent.trim()}\n`;

  await fs.writeFile(filePath, newContent, 'utf8');
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.name.endsWith('.md')) {
      console.log(`Processing ${fullPath}`);
      await updateBlogPost(fullPath);
    }
  }
}

// Start processing
processDirectory(BLOG_DIR)
  .then(() => console.log('All blog posts updated'))
  .catch(console.error);
