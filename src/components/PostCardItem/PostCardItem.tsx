import React from 'react';

import { PostType } from '../../models/posts';
import styles from './PostCardItem.module.scss';

const PostListItem: React.FC<PostType> = ({ id, name, path, extension }) => (
  <li className={styles.component} tabIndex={0}>
    <img src={`${path}.${extension}`} alt={name} className={styles.image}/>
    <div className={styles.name}>{name}</div>
  </li>
);

export default PostListItem;
