export interface SQLCommand {
  id: string;
  title: string;
  description: string;
  code: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}