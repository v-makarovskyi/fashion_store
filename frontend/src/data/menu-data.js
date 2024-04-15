import home_2 from "@assets/img/menu/menu-home-2.jpg";

const menu_data = [
  {
    id: 1,
    homes: true,
    title: "Home",
    link: "/",
    home_pages: [
      {
        img: home_2,
        title: "Fashion",
        link: "/home-2",
      },
    ],
  },
  {
    id: 2,
    products: true,
    title: "Products",
    link: "/shop",
    product_pages: [
      {
        title: "Shop Page",
        link: "/shop",
        mega_menus: [
          { title: "Only Categories", link: "/shop-category" },
          { title: "Shop Grid with Sideber", link: "/shop" },
          { title: "Product Details", link: "/product-details" },
        ],
      },
      {
        title: "Products",
        link: "/product-details",
        mega_menus: [
          { title: "Product Simple", link: "/product-details" },
          { title: "With Video", link: "/product-details-video" },
          { title: "With Countdown Timer", link: "/product-details-countdown" },
          { title: "Variations Swatches", link: "/product-details-swatches" },
        ],
      },
      {
        title: "eCommerce",
        link: "/shop",
        mega_menus: [
          { title: "Shopping Cart", link: "/cart" },
          { title: "Compare", link: "/compare" },
          { title: "WishList", link: "/wishlist" },
          { title: "Checkout", link: "/checkout" },
          { title: "My account", link: "/profile" },
        ],
      },
      {
        title: "More Pages",
        link: "/shop",
        mega_menus: [
          { title: "Login", link: "/login" },
          { title: "Register", link: "/register" },
          { title: "Forgot Password", link: "forgot-password" },
          { title: "404 error", link: "/404" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Shop",
    sub_menu: true,
    link: "/shop",
    sub_menus: [
      { title: "Shop", link: "/shop" },
      { title: "Right Sidebar", link: "/shop-right-sidebar" },
      { title: "Hidden Sidebar", link: "/shop-hidden-sidebar" },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: "Coupons",
    link: "/coupon",
  },
  {
    id: 5,
    sub_menu: true,
    title: "Blog",
    link: "/blog",
    sub_menus: [
      { title: "Blog Standard", link: "/blog" },
      { title: "Blog Grid", link: "/blog-grid" },
      { title: "Blog List", link: "/blog-list" },
      { title: "Blog Details", link: "/blog-details" },
      { title: "Blog Details Full Width", link: "/blog-details-2" },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: "Contacts",
    link: "/contact",
  },
];

export default menu_data
