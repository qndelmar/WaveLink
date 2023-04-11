import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../widgets/menu/Menu";

const HomepageLayout:FC = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default HomepageLayout;