import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";
import { pageTreeConfig } from "../../../../page-tree.config";
import sanityClient from "../../../../sanity-client";
import { createNextPageTreeClient } from "@q42/sanity-plugin-page-tree/next";

type RevalidateRequest = {
  _id: string;
  _type: "contentPage";
};

const ERROR_RESPONSE = Response.json({
  revalidated: false,
  now: Date.now(),
  message: "Missing path to revalidate",
});

export async function POST(request: NextRequest) {
  const { _id, _type } = (await request.json()) as RevalidateRequest;

  const path = await getPath({ _id, _type });
  if (!path) {
    return ERROR_RESPONSE;
  }

  revalidatePath(path);
  return Response.json({ revalidated: true, now: Date.now() });
}

async function getPath({ _id, _type: type }: RevalidateRequest) {
  const pageTreeClient = createNextPageTreeClient({
    config: pageTreeConfig,
    client: sanityClient,
  });

  switch (type) {
    case "contentPage":
      const metadata = await pageTreeClient.getPageMetadataById(_id);
      return metadata?.path == "/home" ? "/" : metadata?.path;
    default:
      return null;
  }
}
