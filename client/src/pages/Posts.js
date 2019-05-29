import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Post} from 'pages';

const Posts = ({location, match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)} />
            <Route path={`${match.url}/:id`} component={Post} />
            <p/>
            <div>Posts</div>
            <div>location.pathname: {location.pathname}</div>
            <div>match.path: {match.path}</div>
            <div>match.url: {match.url}</div>
        </div>
    );
};

export default Posts;