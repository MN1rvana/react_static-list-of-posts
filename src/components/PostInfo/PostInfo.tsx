import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>{`Posted by ${post.user?.name}`}</p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {post.comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
