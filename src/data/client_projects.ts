export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: 'client' | ''; 
  link?: string;
  image?: string[];
  status?: 'live' | 'wip' | 'archived';
}

export const projectList: ProjectItem[] = [
  {
    title: 'XTXTravels',
    description: "We built a custom travel booking platform for XTXTravels, a travel agency specializing in personalized travel experiences. The platform allows users to search for travel and vacation packages, and provides a seamless booking experience.",
    tags: ['travel', 'booking', 'API'],
    category: "client",
    image: ['/clients/xtxtravel_mockup_01.png'],
    link: 'https://xtxtravels.com',
    status: 'live',
  },
  {
    title: 'Cozy Crafting Room',
    description: "Cozy Crafting Room is a crafting space offering dedicated spaces for crafting enthusiasts. We developed a custom website for Cozy Crafting Room, allowing users to book crafting sessions, view available spaces, and learn about upcoming events.",
    tags: ['crafting', 'booking', 'website'],
    image: ['/clients/cozycraftingroom_mockup_01.png'],
    link: 'https://cozycraftingroom.com',
    category: "client",
    status: 'wip',
  },
  {
    title: 'LocalsOnly',
    description: "LocalsOnly is a local business directory and review platform. We built a custom website for LocalsOnly, allowing users to search for local businesses, read reviews, and submit their own reviews.",
    tags: ['local', 'directory', 'reviews'],
    image: ['/clients/localsonly_mockup_01.png'],
    link: 'https://localsonly.com',
    category: "client",
    status: 'wip',
  },
  {
    title: 'ToolShare',
    description: "ToolShare is a tool rental platform that allows users to rent tools from local businesses. We developed a custom website for ToolShare, allowing users to search for available tools, view rental prices, and book rentals online.",
    tags: ['tools', 'rental', 'booking'],
    image: ['/clients/toolshare_mockup_01.png'],
    link: 'https://toolshare.com',
    category: "client",
    status: 'wip',
  }
];