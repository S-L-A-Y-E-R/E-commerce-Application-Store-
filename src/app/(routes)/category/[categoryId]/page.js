import getCategory from "@/app/actions/get-category";
import getColors from "@/app/actions/get-colors";
import getProducts from "@/app/actions/get-products";
import getSizes from "@/app/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/Container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobiles-filter";

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter valueKey={'sizeId'} name='sizes' data={sizes} />
                            <Filter valueKey={'colorId'} name='colors' data={colors} />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map(item => (<ProductCard key={item.id} data={item} />))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;