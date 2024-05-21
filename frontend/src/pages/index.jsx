import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import FashionBanner from "@/components/banner/fashion-banner";
import FashionCategory from "@/components/categories/fashion-category";
import PopularProducts from "@/components/products/popular-products";
import ProductArea from "@/components/products/product-area";
import Footer from "@/layout/footers/footer";
import InstagramArea from "@/components/instagram-area";

const Home = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <FashionBanner />
            <FashionCategory />
            <PopularProducts />
            <ProductArea />
            <InstagramArea />
            <Footer />
        </Wrapper>
    )
} 

export default Home