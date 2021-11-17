import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;