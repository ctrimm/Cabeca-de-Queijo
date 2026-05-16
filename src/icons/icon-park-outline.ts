import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';
import iconParkData from '@iconify-json/icon-park-outline/icons.json';

export default async (name: string): Promise<string> => {
  const iconData = getIconData(iconParkData as any, name);
  if (!iconData) {
    throw new Error(`Icon "${name}" not found in icon-park-outline`);
  }
  const { attributes, body } = iconToSVG(iconData, { height: 'auto' });
  const attrs = Object.entries(attributes)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');
  return `<svg ${attrs}>${replaceIDs(body)}</svg>`;
};
