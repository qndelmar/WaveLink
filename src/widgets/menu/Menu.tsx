import React, {FC} from 'react';
import menuIcon from '../../shared/assets/images/wavelink.webp';
import cl from './Menu.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faHouse, faMessage, faUser} from "@fortawesome/free-solid-svg-icons";
import { NavLink} from "react-router-dom";
import ProfileSketch from "../../features/profileSketch";

const Menu:FC = () => {
    return (
        <div className={cl.wrapper}>
            <img alt="waveLink" src={menuIcon} className={cl.icon} onDragStart={e => e.preventDefault()} draggable={false}/>
            <div className={cl.menu__items}>
                <ul className="">
                    <li>
                        <NavLink to="/home" className={({ isActive }) =>
                            isActive ? [cl.grid, cl.active].join(' ') : cl.grid
                        }>
                            <FontAwesomeIcon icon={faHouse} className={cl.faIcon}/>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? [cl.grid, cl.active].join(' ') : cl.grid
                        }
                                   to="/chat">
                            <FontAwesomeIcon icon={faMessage} className={cl.faIcon}/>
                            Dialogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? [cl.grid, cl.active].join(' ') : cl.grid
                        } to="/friends">
                            <FontAwesomeIcon icon={faUser} className={cl.faIcon}/>
                            Friends
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? [cl.grid, cl.active].join(' ') : cl.grid
                        } to="/settings">
                            <FontAwesomeIcon icon={faGear} className={cl.faIcon}/>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
            <ProfileSketch/>
        </div>
    );
};

export default Menu;