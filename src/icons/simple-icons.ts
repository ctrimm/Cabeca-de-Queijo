import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';
import simpleIconsData from '@iconify-json/simple-icons/icons.json';

export default async (name: string): Promise<string> => {
  const iconData = getIconData(simpleIconsData as any, name);
  if (!iconData) {
    throw new Error(`Icon "${name}" not found in simple-icons`);
  }
  const { attributes, body } = iconToSVG(iconData, { height: 'auto' });
  const attrs = Object.entries(attributes)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');
  return `<svg ${attrs}>${replaceIDs(body)}</svg>`;
};
