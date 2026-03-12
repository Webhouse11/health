export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
}

export type Category = 
  | 'Fitness & Exercise'
  | 'Nutrition & Diet'
  | 'Mental Health & Wellness'
  | 'Preventive Health & Tips'
  | 'Healthy Lifestyle'
  | 'Medical Updates & Research'
  | 'Weight Loss & Weight Management'
  | 'Lifestyle & Productivity'
  | 'Supplements & Wellness Products'
  | 'Emerging Trends & Tech';

export interface CategoryInfo {
  name: Category;
  slug: string;
  description: string;
  image: string;
}
