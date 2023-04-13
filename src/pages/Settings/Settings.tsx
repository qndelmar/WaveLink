import React, {FC} from 'react';
import ThemeSwitcher from "../../entities/ui/themeSwitcher/themeSwitcher";
import cl from './Settings.module.scss';

const Settings:FC = () => {
    return (
        <div className="additional settings">
            <hr/>
            <p className={cl.paragraph}>Switch theme</p>
           <ThemeSwitcher/>
            <p className={cl.paragraph}>Profile</p>
        </div>
    );
};

export default Settings;