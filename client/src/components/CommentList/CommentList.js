import React, {Component} from 'react';
import './CommentList.css';
import {Comment} from '../';

// const CommentList = () => {
//     return (
//         <ul className="CommentList">
//             <Comment />
//             <Comment />
//             <Comment />
//         </ul>
//     );
// };

class CommentList extends Component {
    render() {
        const {comments} = this.props;
        const commentList = comments.map(
            (comment, index) => (
                <Comment name={comment.email.split('@')[0]} body={comment.body} key={index} />
            )
        );
        return (
            <ul className="CommentList">
                {commentList}
            </ul>
        );
    }
}

export default CommentList;