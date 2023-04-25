import React, {FC} from 'react';
import SortFriends from "../features/sortFriends/sortFriends";
import {Outlet} from "react-router-dom";

const FindFriends:FC = () => {
    return (
        <div className="additional dialogs">
            <SortFriends/>
            <Outlet/>
        </div>
    );
};

export default FindFriends;