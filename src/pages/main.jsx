import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, Layout, Menu } from "@arco-design/web-react";
import * as Icon from "@arco-design/web-react/icon";
import menus from "../assets/menus";

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const IconSunFill = Icon.IconSunFill;
const IconMoonFill = Icon.IconMoonFill;

function Main() {
  const [isDark, setIsDark] = useState(false);

  const handleChangeTheme = () => {
    if (isDark) {
      document.body.removeAttribute("arco-theme");
    } else {
      document.body.setAttribute("arco-theme", "dark");
    }
    setIsDark((d) => !d);
  };

  const menuData = menus.map((m, i) => {
    if (!m.name) {
      console.error("菜单配置有误！");
      return <></>;
    } else if (!m.children) {
      const IconName = m.icon ? Icon[m.icon] : false;
      return (
        <Link to={`/${m.name}`}>
          <MenuItem key={`m_${i}`}>
            {IconName ? <IconName /> : ""}
            {m.label}
          </MenuItem>
        </Link>
      );
    } else {
      return <SubMenu></SubMenu>;
    }
  });

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="main-header">
        <p className="header-title">后台管理系统</p>
        <div>
          <Button
            type="text"
            className="theme-btn"
            iconOnly
            icon={isDark ? <IconSunFill /> : <IconMoonFill />}
            title={isDark ? "日光模式" : "暗黑模式"}
            onClick={handleChangeTheme}
          ></Button>
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu>{menuData}</Menu>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
