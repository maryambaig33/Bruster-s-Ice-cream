export interface Flavor {
  id: string;
  name: string;
  description: string;
  category: 'Fresh Made' | 'Oats' | 'Sorbet' | 'Ice' | 'Yogurt';
  imageUrl: string;
  isSeasonal?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Section {
  HOME = 'home',
  MENU = 'menu',
  LOCATIONS = 'locations',
  REWARDS = 'rewards'
}