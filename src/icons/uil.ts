import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';
import uilData from '@iconify-json/uil/icons.json';

export default async (name: string): Promise<string> => {
  const iconData = getIconData(uilData as any, name);
  if (!iconData) {
    throw new Error(`Icon "${name}" not found in uil`);
  }
  const { attributes, body } = iconToSVG(iconData, { height: 'auto' });
  const attrs = Object.entries(attributes)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');
  return `<svg ${attrs}>${replaceIDs(body)}</svg>`;
};
