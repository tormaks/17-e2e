import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { useToggle } from '../../../hook';
import { PostType } from '../../../models/posts';
import Search from '../../Search';
import classes from './CharsPage.module.scss';
import Posts from '../../Posts';

const CharsPage: React.FC = () => {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState('');
  const [active, setActive] = useToggle(true);
  const [loading, setLoading] = useToggle(true);
  const [errorLoading, setErrorLoading] = useToggle(false);

  useEffect(() => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=210&apikey=7b278298a152832e44b30fbabfc1fdbd')
      .then((data) => data.json())
      .then((response) => {
        setPosts(response.data.results);
        setLoading();
      }).catch((err) => {
        setErrorLoading();
      });
  }, []);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return (
    <main className={classes.component}>
      <Link to={'/about'} style={{ marginTop: '20px' }} className={classes.btn}>Вернуться назад</Link>
      <section className={classes.content}>
        <Search search={search} handleSearch={handleSearch} />
        <div className={classes.group}>
          <div className={classes.btns}>
            <button className={classes.btn} onClick={setActive}>Скрыть/показать посты</button>
            <Link to={'/chars/list'} className={classes.btn}>Отображение списком</Link>
            <Link to={'/chars/cards'} className={classes.btn}>Отображение карточками</Link>
            <Link to={'/chars/graph'} className={classes.btn}>Графическое отображение</Link>
          </div>
        </div>
        <Posts errorLoading={errorLoading} loading={loading} posts={posts} active={active} search={search} />
      </section>
    </main>
  );
};

export default CharsPage;
