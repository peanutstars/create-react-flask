import React from 'react';

const Post = ({location, match}) => {
    return (
        <div>
            Post {match.params.id}
            <p/>
            <div>Post</div>
            <div>location.pathname: {location.pathname}</div>
            <div>match.path: {match.path}</div>
            <div>match.url: {match.url}</div>
        </div>
    );
};

export default Post;