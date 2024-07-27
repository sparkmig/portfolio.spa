import { createNextPageTreeClient } from "@q42/sanity-plugin-page-tree/next";
import { pageTreeConfig } from "../../../page-tree.config";
import sanityClient from "../../../sanity-client";
import { Page } from "@/types/sanity-base";
import ContentPage from "../../components/content-page/content-page.component";
type Props = {
  params: {
    slug?: string[];
  };
};

export default async function DynamicPage({ params }: Props) {
  const data = await getData(params.slug);

  switch (data.page?._type) {
    case "homePage":
      return <div>Jeg er en forside</div>;
    case "contentPage":
      return <ContentPage contentPage={data.page}></ContentPage>;
    default:
      return <div>404</div>;
  }
}

async function getData(slug?: string[]) {
  const pageTreeClient = createNextPageTreeClient({
    config: pageTreeConfig,
    client: sanityClient,
  });
  const path = "/" + (slug?.join("/") ?? "");
  const data = await pageTreeClient.getPageMetadataByPath(path);
  if (!data) {
    return {
      page: undefined,
    };
  }
  const page = (await sanityClient.getDocument(data._id)) as Page | undefined;
  console.log(page);
  return {
    page,
  };
}
