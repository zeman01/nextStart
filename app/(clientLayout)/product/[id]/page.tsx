import ComponentHeading from "@/components/common/component-heading";
import ProductDetail from "@/components/product-detail";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: Props) => {
  const id = (await params)?.id;
  return (
    <main className="w-full h-[85vh]">
      <ComponentHeading title={"Product Detail"} />
      <ProductDetail id={id} />
    </main>
  );
};

export default Page;
