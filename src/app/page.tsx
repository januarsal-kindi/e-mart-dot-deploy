import Layout from "@/components/organism/layout";
import HomeHeader from "@/components/organism/home/header";
import Categories from "@/components/organism/home/categories";
import Products from "@/components/organism/home/products";

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <Categories />
      <Products />
    </Layout>
  );
}
