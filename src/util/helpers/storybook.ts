import { StorybookArea } from './../constants/storybookTokens';

export const getStorybookAreaLabel = (area: StorybookArea, label: string) => {
  const text = area+'/'+label
  return text
}