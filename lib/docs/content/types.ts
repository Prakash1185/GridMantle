export interface PropItem {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface Example {
  title: string;
  description: string;
  code: string;
}

export interface PreviewData {
  component: string;
  code: string;
}

export interface DocContent {
  title: string;
  description: string;
  installCommand?: string;
  usage?: string;
  preview?: PreviewData;
  api?: {
    props: PropItem[];
  };
  examples?: Example[];
}
