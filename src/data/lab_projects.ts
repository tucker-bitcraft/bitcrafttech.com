export interface LabProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: 'software' | 'hardware';
  link?: string;
  image?: string[];
  status?: 'live' | 'wip' | 'archived';
}

export const projectList: LabProjectItem[] = [
  {
    title: 'Echo',
    description: "Echo Core is the cognitive engine at the center of the Bitcraft ecosystem. A locally-deployed AI assistant built for persistent context, modular capability, and real agency. Powered by open-weights models running on dedicated hardware, Echo doesn't phone home. It thinks, remembers, and acts on your behalf, on your terms.",
    tags: ['Python', 'Embedded', 'Linux'],
    category: "software",
    status: 'wip',
  },
  {
    title: 'Medulla',
    description: "Medulla is Echo's skill dispatch layer. The connective tissue between thought and action. It exposes a modular set of callable capabilities called Ports, each one a discrete interface to a tool, service, or device in your environment. When Echo decides to act, Medulla is what makes that action real.",
    tags: ['Python', 'Unix', 'Daemon'],
    category: "software",
    status: 'live',
  },
  {
    title: 'HippoDB',
    description: "HippoDB is Echo's long-term memory system. A graph-native, temperature-tiered store designed to retain what matters and let go of what doesn't. Memories move through hot, warm, cold, and archive tiers over time, shaped by relevance and recency. It's not a database bolted onto an AI. It's memory built from the ground up for how intelligence actually works.",
    category: "software",
    tags: ['Python', 'Database', 'Graph'],
    status: 'wip',
  },
  {
    title: 'Scratchpad',
    description: "Scratchpad is Echo's ephemeral working memory. The space where active reasoning lives during a session. Structured into named buckets for goals, reasoning, tool logs, errors, and state, it gives Echo's cognitive loop a place to think out loud without polluting long-term memory. When the session ends, it clears. What mattered gets committed. The rest dissolves.",
    category: "software",
    tags: ['Python', 'Ephemeral'],
    status: 'live',
  },
  {
    title: 'Bit',
    description: "A 4.5-foot humanoid built on an aluminum skeleton, silicone panels, and servo-driven articulation, with a LED display for a face and a Jetson Orin Nano Super for a brain. It isn't a prop or a prototype. Bit is a fully embodied AI presence, designed to inhabit a space the way a person does. With posture, expression, and intent. This is what it looks like when Echo has a body.",
    tags: ['IoT', 'Robotics'],
    category: "hardware",
    status: 'wip',
  },
  {
    title: 'The Cube',
    description: "Curiosity Cube is a compact desktop presence node. A purpose-built enclosure that brings Echo's full cognitive stack to your desk without the footprint of a full humanoid. Designed for offices, studios, and workspaces, it sits in your environment, stays aware of it, and integrates with the tools and devices around it. All the intelligence of Echo. Sized for where you actually work.",
    tags: ['IoT', 'Embedded'],
    category: "hardware",
    status: 'wip',
  },
];