import type { MarkdownHeading } from 'astro';
import type { InferEntrySchema } from 'astro:content';

export type NavItems = {
  [key: string]: NavItem;
};

export type NavItem = {
  path: string;
  title: string;
};

export type MarkdownHeadingWithSubheadings = MarkdownHeading & {
  subheadings: MarkdownHeading[];
};

export type TalkType = InferEntrySchema<'talks'>;
export type BlogType = InferEntrySchema<'blog'>;
