import React from 'react';
import Photo from './Photo';
// import Comments

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) =>
      post.code === this.props.params.postId);
    // get the post
    const post = this.props.posts[i];

    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
      </div>
    )
  }
})

export default Single;
