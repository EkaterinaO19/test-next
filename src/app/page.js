import MainScreen from "@/app/components/MainScreen";
import ProductsCategories from "@/app/components/ProductsCategories";
import RecommendedProducts from "@/app/components/RecommendedProducts";
import Newsletter from "@/app/components/Newsletter";
import CeoBanner from "@/app/components/CeoBanner";

export default function Home() {
  return (
    <main>
        <MainScreen />
        <ProductsCategories />
        <RecommendedProducts />
        <CeoBanner />
        <Newsletter />
    </main>
  )
}
