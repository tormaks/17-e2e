import React from 'react';
import { Link } from 'react-router-dom';

import classes from './AboutPage.module.scss';

const AboutPage: React.FC = (props) => {
  return (
    <div className={classes.component}>
      <p className={classes.text}>Проект посвящен фанатам вселенной MARVEL,
        которые хотят найти своего любимого персонажа.</p>
      <Link to={'/chars'} className={classes.btn}>
        Найти
      </Link>
    </div>
  );
};

export default AboutPage;
