import * as React from "react";
import { Link } from "gatsby";
import Header from "../Header/header";
import SideBar from "../Sidebar/sidebar";
import "./layout.scss";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <SideBar />
      <div className="circle"></div>
      <footer>© {new Date().getFullYear()}, by ChiTran</footer>
    </div>
  );
};

export default Layout;
