import Billboard from "@/components/billboard";
import Container from "@/components/ui/Container";
import getBillboard from "../actions/get-billboard";
import getProducts from "../actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('2cc53611-4ece-4312-9323-a34194c982a7');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={'Featured Products'} items={products} />
        </div>
      </div>
    </Container>
  )
}
