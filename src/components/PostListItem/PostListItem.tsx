import React from 'react';

import { PostType } from '../../models/posts';
import styles from './PostListItem.module.scss';

const PostListItem: React.FC<PostType> = (props) => {
  const { id, name, path, extension } = props;
  return (
    <li className={styles.component}>
      <div>
        <h2>{id}</h2>
        <p>{name}</p>
      </div>
      <img src={`${path}.${extension}`} alt={name} className={styles.image}/>
    </li>
  );
};

export default PostListItem;
