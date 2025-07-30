import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {

    const [isopen, setIsOpen] = useState(false);

    const [height, setHeight] = useState("55px");

    const expandItem = () => {
        setHeight('200px');
    };

    const collapseItem = () => {
        setHeight('55px');
    };

    useEffect(() => {
        console.log(`index ${props.index} closeItem = ${props.closeItem}`);
    }, [props.closeItem]);

    return (
    
            <li className={`${styles["li-aside"]} ${styles["li-aside-item"]}`}
                style={{
                    height: height,
                    backgroundColor: "purple"
                }}
                onClick={() => {
                    if (isopen) {
                        collapseItem();
                    } else {
                        expandItem();
                        props.closeOtherItem(props.index);
                    }
                    setIsOpen(!isopen);
                }}
            >
                <Link to={props.path}>{props.title}</Link>
              {/*   <a href="#users"><b>{props.title}</b></a> */}
            </li>
    
    );
}

export default SidebarItem;