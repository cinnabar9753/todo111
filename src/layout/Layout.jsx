import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import {useState} from "react";
function Layout() {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/about">About</Link>,
      key: "app",
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/done">Done</Link>,
      key: "alipay",
      icon: <MailOutlined />,
    },
  ];


    const [current, setCurrent] = useState("mail");

    const onClick = (e) => {
      console.log("click ", e);
      setCurrent(e.key);
    };
    return (
      <div className="todo">
        <h1>MY TODO</h1>
        <nav>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          ></Menu>
          {/* <Link to="/">Home</Link>
                <br></br>
                <Link to="/about">About</Link>
                <br></br>
                <Link to="/done">Done</Link> */}
        </nav>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };

export default Layout;
