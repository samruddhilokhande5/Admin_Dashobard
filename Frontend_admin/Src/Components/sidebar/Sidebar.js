import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {

    const Menu_Item = ["Users", "Products", "Carts"];

    const [closeOtherItems, setCloseOtherItems] = useState([true, true, true]);

    const closeOtherItem = (index) => {
        console.log("Inside Close OtherItem" + index);
        for (var i = 0; i < Menu_Item.length; i++) {
            if (index != i) {
                let temp = [...closeOtherItems];
                temp[i] = true;
                setCloseOtherItems(temp);
            } else {
                let temp = [...closeOtherItems];
                temp[i] = false;
                setCloseOtherItems(temp);
            }
        }
    };

    return (
        <div className={styles["side-bar"]}>
            <nav>
            <aside>
                <ul className={styles["ul-aside"]}>
                    {/*    <li className={styles["li-aside"]}>
                    <a href="#products"><b>Products</b></a>
                </li>
                <li className={styles["li-aside"]}>
                    <a href="#carts"><b>Carts</b></a>
                </li> */}
                    <SidebarItem
                        title={Menu_Item[0]}
                        closeItem={closeOtherItems[0]}
                        closeOtherItem={closeOtherItem}
                        index={0}
                        path ="/user-list"
                    ></SidebarItem>
                    <SidebarItem
                        title={Menu_Item[1]}
                        closeItem={closeOtherItems[1]}
                        closeOtherItem={closeOtherItem}
                        index={1}
                        path = "/product-list"
                    ></SidebarItem>
                    <SidebarItem
                        title={Menu_Item[2]}
                        closeItem={closeOtherItems[2]}
                        closeOtherItem={closeOtherItem}
                        index={2}
                        path= "/cart-list"
                    ></SidebarItem>
                </ul>
            </aside>
            </nav>
        </div>
    );
}

export default Sidebar;