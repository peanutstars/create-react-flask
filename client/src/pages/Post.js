import React, {Component} from 'react';
// Before Splitting
// import notify from '../components/notify';
import withSplitting from "../withSplitting";

const SplitMe = withSplitting(() => import('../components/SplitMe'));


// const Post = ({location, match}) => {
//     return (
//         <div>
//             Post {match.params.id}
//             <p/>
//             <div>Post</div>
//             <div>location.pathname: {location.pathname}</div>
//             <div>match.path: {match.path}</div>
//             <div>match.url: {match.url}</div>
//         </div>
//     );
// };

class Post extends Component {
    state = {
        visible: false
    }

    handleClick = () => {
        //// Before Splitting
        // const {match} = this.props;
        // console.log(this.props);
        // notify(match.params.id);

        //// After Splitting
        // import('../components/notify').then(({default: notify}) => {
        //     console.log(this.props);
        //     const {match} = this.props;
        //     notify(match.params.id);
        // });

        // import('../components/SplitMe').then(({default: SplitMe}) => {
        //     this.setState({SplitMe});
        // });
        this.setState({
            visible: true
        });
    }

    render() {
        const {location, match} = this.props;
        // const {SplitMe} = this.state;
        const {visible} = this.state;

        return (
            <div>
                Post {match.params.id}
                <p/>
                <div>Post</div>
                <div>location.pathname: {location.pathname}</div>
                <div>match.path: {match.path}</div>
                <div>match.url: {match.url}</div>

                <p/>
                <div>
                    <button onClick={this.handleClick}>Click</button>
                    {/* {SplitMe && <SplitMe />} */}
                    {visible && <SplitMe />}
                    <p/>
                </div>
            </div>
        );
    
    }
}

export default Post;