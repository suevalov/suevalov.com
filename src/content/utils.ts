import { getCollection } from 'astro:content';

export const getSortedPosts = async () => {
  const allPosts = await getCollection('blog');
  return Object.values(allPosts).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
};

export const getSortedTalks = async () => {
  const allTalks = await getCollection('talks');
  return Object.values(allTalks).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
};
