import type { APIRoute } from 'astro';
import { generateOGImage } from '../../utils/ogImage';

export function getStaticPaths() {
  return [
    {
      params: { page: 'home' },
      props: { title: 'Cabeça de Queijo', subtitle: 'Green Bay Packers Fan Club in Brazil' },
    },
    {
      params: { page: 'faq' },
      props: { title: 'FAQ', subtitle: 'Everything about the Packers & NFL in Brazil', label: 'Help' },
    },
    {
      params: { page: 'faq-pt' },
      props: { title: 'Perguntas Frequentes', subtitle: 'Tudo sobre os Packers & NFL no Brasil', label: 'Ajuda' },
    },
    {
      params: { page: 'seasons' },
      props: { title: 'Season History', subtitle: 'A decade of Packers results', label: 'History' },
    },
    {
      params: { page: 'seasons-pt' },
      props: { title: 'Histórico de Temporadas', subtitle: 'Uma década de resultados dos Packers', label: 'História' },
    },
    {
      params: { page: 'chapters' },
      props: { title: 'Find a Chapter', subtitle: 'Watch parties across Brazil', label: 'Community' },
    },
    {
      params: { page: 'join' },
      props: { title: 'Join Cabeça de Queijo', subtitle: 'Free membership for Packers fans in Brazil', label: 'Join' },
    },
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOGImage(props as { title: string; subtitle?: string; label?: string });
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
