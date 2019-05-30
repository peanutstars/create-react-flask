import React, {Component} from 'react';

const withSplitting = getComponent => {
    class WithSpliting extends Component {
        state = {
            Splitted: null
        }

        constructor(props) {
            super(props);
            getComponent().then(({default: Splitted}) => {
                this.setState({Splitted});
            });
        }

        render() {
            const {Splitted} = this.state;
            if (!Splitted) {
                return null;
            }
            return <Splitted {...this.props} />;
        }
    }

    return WithSpliting;
};

export default withSplitting;