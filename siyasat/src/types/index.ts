export interface Thesis {
  id: string;
  title: string;
  authors: string;
  year: string;
  department: string;
  degree?: string;
  college?: string;
  abstract?: string;
}

export type ViewState = 'home' | 'list' | 'detail';