import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { posts, comments, params } = this.props;

    // index of the post
    const i = posts.findIndex((post) =>
      post.code === params.postId);
    // get the post
    const post = posts[i];
    const postComments = comments[params.postId] || [];

    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
})

export default Single;
