// -----------------------------------------------------------------------------
// BITS & BYTES — sidebar/navigation model
// -----------------------------------------------------------------------------
// Turns the flat `bitsnbytes` collection into the ordered, grouped tree the
// DocsLayout sidebar renders. The section a page belongs to is the first
// segment of its id (folder name), so nothing here is hardcoded per-page.
//
// To add a whole new section: add an entry to SECTIONS below and create a
// matching folder under src/content/bitsnbytes/. To add a page: just drop an
// .mdx file in — it slots in by `order`, optionally bucketed by `group`.
// -----------------------------------------------------------------------------

import type { CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'bitsnbytes'>;
export type SectionKey = 'lab' | 'components' | 'projects';
export type Accent = 'green' | 'amber' | 'orange';

export interface SectionMeta {
  key: SectionKey;
  /** Sidebar + index label. */
  label: string;
  /** Mono eyebrow, numbered like the rest of the site. */
  eyebrow: string;
  /** One-line pitch for the section on the landing page. */
  description: string;
  accent: Accent;
  /** Inline SVG (24×24) rendered with set:html. */
  icon: string;
}

// Declaration order === display order across the sidebar and landing page.
export const SECTIONS: SectionMeta[] = [
  {
    key: 'components',
    label: 'Components',
    eyebrow: '// 01 COMPONENTS',
    description:
      'Software-engineering fundamentals; the reusable building blocks. A mix of concrete, code-first walkthroughs and the concepts behind them.',
    accent: 'green',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>',
  },
  {
    key: 'projects',
    label: 'Projects',
    eyebrow: '// 02 PROJECTS',
    description:
      'Full, college-style builds you can clone and run. Each one tells you what you are building and which components to review before you start.',
    accent: 'amber',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7l8-4 8 4-8 4-8-4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  },
  {
    key: 'lab',
    label: 'Lab Docs',
    eyebrow: '// 03 LAB DOCS',
    description:
      'Reference documentation for the software built in the Bitcraft Lab. The Echo cognitive stack and everything around it.',
    accent: 'orange',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.5 15h9" stroke="currentColor" stroke-width="1.5"/></svg>',
  },
];

export function getSection(key: string): SectionMeta {
  const meta = SECTIONS.find((s) => s.key === key);
  if (!meta) throw new Error(`Unknown bitsnbytes section: ${key}`);
  return meta;
}

/** The section key is the first path segment of the entry id. */
export function sectionOf(entry: Entry): SectionKey {
  return entry.id.split('/')[0] as SectionKey;
}

/** Public URL for an entry. */
export function urlOf(entry: Entry | string): string {
  const id = typeof entry === 'string' ? entry : entry.id;
  return `/bitsnbytes/${id}`;
}

export const accentText: Record<Accent, string> = {
  green: 'text-green',
  amber: 'text-amber',
  orange: 'text-orange',
};
export const accentBorder: Record<Accent, string> = {
  green: 'border-green',
  amber: 'border-amber',
  orange: 'border-orange',
};
export const accentCardTop: Record<Accent, string> = {
  green: 'card-accent-green',
  amber: 'card-accent-amber',
  orange: 'card-accent-orange',
};

export const difficultyColor: Record<string, Accent> = {
  beginner: 'green',
  intermediate: 'amber',
  advanced: 'orange',
};

export interface SidebarGroup {
  /** null == ungrouped items rendered directly under the section. */
  name: string | null;
  items: Entry[];
}
export interface SidebarSection {
  meta: SectionMeta;
  groups: SidebarGroup[];
}

const byOrder = (a: Entry, b: Entry) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

/** Build the ordered, grouped sidebar tree from every published entry. */
export function buildSidebar(all: Entry[]): SidebarSection[] {
  const live = all.filter((e) => !e.data.draft);
  return SECTIONS.map((meta) => {
    const entries = live.filter((e) => sectionOf(e) === meta.key).sort(byOrder);

    // Preserve first-seen group order (which is already order-sorted).
    const groupNames: (string | null)[] = [];
    for (const e of entries) {
      const g = e.data.group ?? null;
      if (!groupNames.includes(g)) groupNames.push(g);
    }
    const groups: SidebarGroup[] = groupNames.map((name) => ({
      name,
      items: entries.filter((e) => (e.data.group ?? null) === name),
    }));
    return { meta, groups };
  }).filter((s) => s.groups.length > 0);
}

/** Flattened reading order across the whole tree, for prev/next links. */
export function flatOrder(all: Entry[]): Entry[] {
  return buildSidebar(all).flatMap((s) => s.groups.flatMap((g) => g.items));
}

export function prevNext(all: Entry[], current: Entry): { prev?: Entry; next?: Entry } {
  const flat = flatOrder(all);
  const i = flat.findIndex((e) => e.id === current.id);
  return { prev: flat[i - 1], next: flat[i + 1] };
}
