import React, { useState } from "react";
import menu_data from "@/data/menu-data";
import blogData from "@/data/blog-data";
import Link from "next/link";
import BlogItem from "@/components/blog/blog-item";

const blogs = blogData.filter((el) => el.blog === "fashion");

function MenuRenderList({ id, menus }) {
  const targetMenus = menus[id];

  return (
    <>
      <li
        key={targetMenus.id}
        className={
          targetMenus.homes || targetMenus.products
            ? "has-dropdown has-megamenu"
            : targetMenus.sub_menu
            ? "has-dropdown"
            : null
        }
      >
        <Link
          href={targetMenus?.link}
          className={
            targetMenus.id === 3 ||
            targetMenus.id === 7 ||
            targetMenus.id === 12 ||
            targetMenus.id === 18
              ? "megamenu-title"
              : null
          }
        >
          {targetMenus?.title}
        </Link>
        {targetMenus.childMenus.length > 0 || !targetMenus.homes ? (
          <ul
            className={
              targetMenus.homes || targetMenus.products
                ? "submenu megamenu megamenu-style"
                : targetMenus.sub_menu
                ? "submenu"
                : null
            }
          >
            {targetMenus.childMenus.map((childId) => (
              <MenuRenderList key={childId} id={childId} menus={menus} />
            ))}
          </ul>
        ) : (
          <div className="submenu megamenu">
            <div className="row">
              {blogs.map((b) => (
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <BlogItem key={b.id} blog={b} />
                </div>
              ))}
            </div>
          </div>
        )}
      </li>
    </>
  );
}

export default function Menus() {
  const [menus, setmenus] = useState(menu_data);
  const root = menus[0].childMenus;

  return (
    <ul className="main-menu__list">
      {root.map((id) => (
        <MenuRenderList key={id} id={id} menus={menus} />
      ))}
    </ul>
  );
}
