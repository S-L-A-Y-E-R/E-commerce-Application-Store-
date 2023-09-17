import Billboard from "@/components/billboard";
import Container from "@/components/ui/Container";

import getProducts from "../actions/get-products";
import ProductList from "@/components/product-list";
import getBillboards from "../actions/get-billboards"

export const revalidate = 0;

export default async function Home() {
  const billboards=await getBillboards();
  const products = await getProducts({ isFeatured: true });
  const billboard=billboards.filter(billboard=>billboard.label==='main');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard.length!==0?billboard[0]: billboards[0]} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={'Featured Products'} items={products} />
        </div>
      </div>
    </Container>
  )
}
