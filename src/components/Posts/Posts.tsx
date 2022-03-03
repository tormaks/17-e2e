import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostType } from '../../models/posts';
import PostListItem from '../PostListItem';
import Loading from '../Loading';
import ErrorLoading from '../Error';
import classes from './Posts.module.scss';
import PostCardItem from '../PostCardItem';
import GraphView from '../GraphView';

type PostsListProps = {
  errorLoading: boolean;
  loading: boolean;
  posts: PostType[];
  active: boolean;
  search: string;
};

const Posts: React.FC<PostsListProps> = (props) => {
  const { view = 'list' } = useParams();
  const {
    errorLoading, loading, posts, active, search = '',
  } = props;
  const [activePostsNumber, setActivePostsNumber] = useState(8);
  const [visibleButtonShowMorePosts, setVisibleButtonShowMorePosts] = useState(true);
  const [filtered, setFiltered] = useState<PostType[]>(posts);

  useEffect(() => {
    if (search.length > 2) {
      const filteredPosts = posts.filter((post) => post.name.toLowerCase().includes(search.toLowerCase()));
      setVisibleButtonShowMorePosts(false);
      setFiltered(filteredPosts);
    } else {
      setVisibleButtonShowMorePosts(true);
      setFiltered(posts);
    }
  }, [search, posts]);

  const onShowPost = () => {
    setActivePostsNumber(activePostsNumber + 8);
  };

  const loadingPosts = loading ? <Loading /> : null;
  const errorItem = errorLoading ? <ErrorLoading /> : null;
  const content = (
    <div>
      <ul style={{ display: active ? 'grid' : 'none' }} className={ view === 'cards' ?  classes.cards : classes.component}>
        {
          filtered.slice(0, activePostsNumber).map((post) => {
            if (view === 'list') {
              return (
                <PostListItem key={post.id} {...post} path={post.thumbnail.path} extension={post.thumbnail.extension}/>
              );
            } else if (view === 'cards') {
              return (
                <PostCardItem key={post.id} {...post} path={post.thumbnail.path} extension={post.thumbnail.extension}/>
              );
            }
          })
        }
        {
          view === 'graph' && <GraphView/>
        }
      </ul>
      {
        view !== 'graph' && <button
          onClick={onShowPost}
          style={{ display: visibleButtonShowMorePosts && active && !loading ? 'block' : 'none' }}
          disabled={activePostsNumber === posts.length}
          className={classes.btn}
        >Показать ещё
        </button>
      }
    </div>
  );

  return (
    <>
      {loadingPosts}
      {errorItem}
      {content}
    </>
  );
};

export default Posts;
