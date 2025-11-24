import { Flavor } from './types';

export const NAV_LINKS = [
  { label: 'Our Ice Cream', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Sweet Rewards', href: '#rewards' },
  { label: 'Franchising', href: '#franchise' },
];

export const MOCK_FLAVORS: Flavor[] = [
  {
    id: '1',
    name: 'Strawberry Cheesecake',
    description: 'Cheesecake ice cream with strawberry ripples and graham cracker crust pieces.',
    category: 'Fresh Made',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    isSeasonal: false,
  },
  {
    id: '2',
    name: 'Chocolate Raspberry Truffle',
    description: 'Rich chocolate ice cream with raspberry swirls and chocolate truffle cups.',
    category: 'Fresh Made',
    imageUrl: 'https://picsum.photos/400/400?random=2',
    isSeasonal: true,
  },
  {
    id: '3',
    name: 'Butter Pecan',
    description: 'Butter pecan ice cream loaded with roasted pecans.',
    category: 'Fresh Made',
    imageUrl: 'https://picsum.photos/400/400?random=3',
    isSeasonal: false,
  },
  {
    id: '4',
    name: 'Mint Chocolate Chip',
    description: 'Cool mint ice cream with semi-sweet chocolate chips.',
    category: 'Fresh Made',
    imageUrl: 'https://picsum.photos/400/400?random=4',
    isSeasonal: false,
  },
  {
    id: '5',
    name: 'Coffee Ripple',
    description: 'Smooth coffee ice cream with a fudge ripple.',
    category: 'Fresh Made',
    imageUrl: 'https://picsum.photos/400/400?random=5',
    isSeasonal: false,
  },
  {
    id: '6',
    name: 'Cotton Candy',
    description: 'Pink and blue cotton candy flavored ice cream.',
    category: 'Fresh Made',
    imageUrl: 'https://picsum.photos/400/400?random=6',
    isSeasonal: true,
  }
];

export const SYSTEM_INSTRUCTION = `You are the Bruster's Scoop Master, a friendly and enthusiastic ice cream expert. 
Your goal is to recommend Bruster's ice cream flavors to customers based on their mood, preferences, or questions.
Use the following list of popular flavors for reference, but you can also mention classic ice cream types.
Flavors: ${MOCK_FLAVORS.map(f => f.name + ' (' + f.description + ')').join(', ')}.
Keep your responses short, sweet, and fun. Use ice cream emojis where appropriate.
If a user asks for something we don't have, politely suggest a similar alternative from our menu.
Always maintain the vibe of Bruster's: Fresh, Made Daily, Premium Quality.`;