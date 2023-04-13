import React, {FC} from 'react';
import {FormControl, FormHelperText, Switch, useColorMode} from "@chakra-ui/react";
import cl from './themeSwitcher.module.scss'
import {faLightbulb} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ThemeSwitcher:FC = () => {

    const {colorMode, toggleColorMode} = useColorMode();


    return (
        <FormControl>
            <div className={cl.switcher}>
                <span>Dark</span>
                <Switch colorScheme="pink" isChecked={colorMode === 'dark' ? false : true} onChange={toggleColorMode} size="lg">
                </Switch>
                <span>Light</span>
            </div>
            <FormHelperText>
                <FontAwesomeIcon icon={faLightbulb} style={{marginRight: '5px'}}/>
                Tip: By default, app uses system&apos;s color mode.</FormHelperText>
        </FormControl>
    );
};

export default ThemeSwitcher;