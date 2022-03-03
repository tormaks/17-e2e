import React from 'react';

import classes from './AppHeader.module.scss';

const AppHeader: React.FC = (props) => {
  return (
    <header className={classes.component}>
      <div className={classes.container}>
        <h1 className={classes.title}>Найди своего любимого персонажа из вселенной MARVEL</h1>
      </div>
    </header>
  );
};

export default AppHeader;
