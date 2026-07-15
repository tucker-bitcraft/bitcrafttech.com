import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// -----------------------------------------------------------------------------
// BITS & BYTES documentation & learning platform content
// -----------------------------------------------------------------------------
// One MDX file = one page. Drop a file into the right folder under
// src/content/bitsnbytes/ and it appears in the sidebar automatically:
//
//   src/content/bitsnbytes/lab/<slug>.mdx         → /bitsnbytes/lab/<slug>
//   src/content/bitsnbytes/components/<slug>.mdx  → /bitsnbytes/components/<slug>
//   src/content/bitsnbytes/projects/<slug>.mdx    → /bitsnbytes/projects/<slug>
//
// `section` is inferred from the folder, so you never set it in frontmatter.
// See src/lib/docs.ts for the section labels/order and sidebar grouping.
// -----------------------------------------------------------------------------

const downloadFile = z.object({
  /** File path relative to /public, e.g. "/bitsnbytes/rpn-calculator/rpn.py". */
  file: z.string(),
  /** Button label, e.g. "rpn.py". */
  label: z.string(),
});

const bitsnbytes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/bitsnbytes' }),
  schema: z.object({
    title: z.string(),
    /** One-line summary shown on cards, meta tags, and the section index. */
    description: z.string(),
    /** Sort order within a sidebar group (lower = higher). Defaults to 999. */
    order: z.number().default(999),
    /** Optional sub-heading to bucket entries under inside a section. */
    group: z.string().optional(),
    /** Lesson/project level; drives a colored badge. */
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    /** Freeform tags rendered as chips. */
    tags: z.array(z.string()).default([]),
    /** Entry ids (e.g. "components/stacks-and-queues") to review first. */
    prerequisites: z.array(z.string()).default([]),
    /** Full https URL to a repo/gist for cloning the whole project. */
    githubRepo: z.string().url().optional(),
    /** Downloadable source files that live under /public. */
    downloads: z.array(downloadFile).default([]),
    /** Hide from sidebar/build without deleting the file. */
    draft: z.boolean().default(false),
    /** Optional last-reviewed date shown in the footer. */
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { bitsnbytes };
