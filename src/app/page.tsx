import DynamicPage from "./[...slug]/page";

export function generateStaticParams() {
  return [
    {
      slug: "/",
    },
  ];
}

export default DynamicPage;
