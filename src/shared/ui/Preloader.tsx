import React from 'react';
import cl from './Preloader.module.scss';
import quotes from '../assets/json/quotes.json';

type PropsType = {
    isLoading: boolean
}
const Preloader:React.FC<PropsType> = ({isLoading}) => {
    const randNumber = Math.floor(Math.random()*50);
    return (
        isLoading ? (<div className={cl.wrapper}>
            <div className={cl.inner__wrapper}>
                <div className={cl.loading}> </div>
                <div className={cl.outer__spinner}>
                    <div className={cl.inner__spinner}></div>
                </div>
                <p className={cl.quote}>{ quotes[randNumber].quote}</p>
                <p className={cl.author}><span>–</span>  {quotes[randNumber].author}</p>
            </div>
        </div>) : null
    );
};

export default Preloader;