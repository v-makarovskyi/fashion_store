import React from "react";
import menu_data from "@/data/menu-data";
import blogData from "@/data/blog-data";
import Link from "next/link";
import BlogItem from "@/components/blog/blog-item";

const Menus = () => {
  const blogs = blogData.filter((b) => b.blog === 'fashion')

  return (
    <ul>
      {menu_data.map((menu) =>
        menu.homes ? (
          <li key={menu.id} className="has-dropdown has-mega-menu">
            <Link href={menu.link}>{menu.title}</Link>
            <div className="home-menu tp-mega-menu tp-submenu">
              <div className="row">
                {
                  blogs.map((blog) => (
                    <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                      <BlogItem blog={blog} />
                    </div>
                  ))
                }
              </div>
            </div>
          </li>
        ) : menu.products ? (
          <li key={menu.id} className="has-dropdown has-mega-menu">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu tp-mega-menu mega-menu-style">
              {menu.product_pages.map((page, index) => (
                <li key={index} className="has-dropdown">
                  <Link href={page.link} className="mega-menu-title">
                    {page.title}
                  </Link>
                  <ul className="tp-submenu">
                    {page.mega_menus.map((el, index) => (
                      <li key={index}>
                        <Link href={el.link}>{el.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ) : menu.sub_menu ? (
          <li key={menu.id} className="has-dropdown">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu">
              {
                menu.sub_menus.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))
              }
            </ul> 
          </li>
        ) : (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Menus;

/* const Menus = () => {
  const blogs = blogData.filter((b) => b.blog === "fashion");

  return (
    <ul>
      {menu_data.map((menu) =>
        menu.homes ? (
          <li key={menu.id} className="has-dropdown has-mega-menu">
            <Link href={menu.link}>{menu.title}</Link>
            <div className="home-menu tp-submenu tp-mega-menu">
              <div className="row">
                {blogs.map((blog) => (
                  <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                    <BlogItem blog={blog} />
                  </div>
                ))}
              </div>
            </div>
          </li>
        ) : menu.products ? (
          <li key={menu.id} className="has-dropdown has-mega-menu">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu tp-mega-menu mega-menu-style-2">
              {menu.product_pages?.map((page, index) => (
                <li key={index} className="has-dropdown">
                  <Link href={page.link} className="mega-menu-title">
                    {page.title}
                  </Link>
                  <ul className="tp-submenu">
                    {page.mega_menus.map((p, i) => (
                      <li key={i}>
                        <Link href={p.link}>{p.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ) : menu.sub_menu ? (
          <li key={menu.id} className="has-dropdown">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu">
              {menu.sub_menus.map((p, i) => (
                <li key={i}>
                  <Link href={p.link}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Menus; */
