
export interface BlockContent {
  name: string;
  description: string;
  installCommand: string;
  code: string;
  component: string;
  dependencies?: string[];
  usage: string;
}