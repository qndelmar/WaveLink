import React, {FC} from 'react';
import cl from './sortFriends.module.scss';
import {Link} from "react-router-dom";

const SortFriends:FC = () => {
    return (
        <menu className={cl.menu}>
            <ul className={cl.menu_items}>
                <li>
                    <Link to="all">All friends</Link>
                </li>
                <li>
                    <Link to="closed">Close friends</Link>
                </li>
                <li>
                   <Link to="requested">Requested</Link>
                </li>
            </ul>
        </menu>
    );
};

export default SortFriends;