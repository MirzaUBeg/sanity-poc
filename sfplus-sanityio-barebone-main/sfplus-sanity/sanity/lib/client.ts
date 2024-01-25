import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/lib/sanity.api'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
