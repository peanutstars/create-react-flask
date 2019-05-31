import React, {Component} from 'react';
import {PostWrapper, Navigate, Post, Warning} from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postId: 1,
            fetching: false,
            post: {
                title: null,
                body: null
            },
            comments: [],
            warningVisibility: false
        };
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async (postId) => {
        // // Request AJAX of each
        // const post = await service.getPost(postId);
        // console.log(post);
        // const comments = await service.getComments(postId);
        // console.log(comments);

        this.setState({
            fetching: true
        });

        try {
            // Request AJAX at once with Promise.all
            const info = await Promise.all([
                service.getPost(postId),
                service.getComments(postId),
            ]);
            console.log(info);

            const {title, body} = info[0].data;
            const comments = info[1].data;

            this.setState({
                postId,
                post: {title, body},
                comments,
                fetching: false
            });
        } catch(e) {
            this.setState({
                fetching: false
            });
            this.showWarning();
            console.log('error occured: ', e);
        }
    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if (type == 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }

    showWarning = () => {
        this.setState({
            warningVisibility: true
        });
        console.log("showWarning #1");
        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false
                });
                console.log("showWarning #2");
            }, 1500
        );
    }

    render() {
        const {postId, fetching, post, comments, warningVisibility} = this.state;
        console.log('Called PostContainer !!')
        return (
            <PostWrapper>
                <Navigate postId={postId} disabled={fetching}
                    onClick={this.handleNavigateClick}
                />
                <Post title={post.title} body={post.body} comments={comments} />
                <Warning 
                    message="That post does not exist."
                    visible={warningVisibility}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;