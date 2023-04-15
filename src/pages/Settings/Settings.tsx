import React, {FC} from 'react';
import ThemeSwitcher from "../../entities/ui/themeSwitcher/themeSwitcher";
import cl from './Settings.module.scss';
import ProfileSection from "../../widgets/profileSection/profileSection";

const Settings:FC = () => {
    return (
        <div className="additional settings">
            <hr/>
            <p className={cl.paragraph}>Switch theme</p>
           <ThemeSwitcher/>
            <p className={cl.paragraph}>Profile</p>
            <ProfileSection/>
        </div>
    );
};

export default Settings;