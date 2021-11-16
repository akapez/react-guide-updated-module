import React from 'react'
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';


const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/quotes'>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/new-quote'>Add a Quotes</NavLink>
                    </li>                   
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
