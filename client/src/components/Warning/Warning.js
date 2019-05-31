import React, {Component} from 'react';
import './Warning.css';

class Warning extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            closing: false
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('Warning componentWillReciveProps');
        if (this.props.visible && !nextProps.visible) {
            this.setState({
                closing: true
            });
            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    });
                }, 1000
            );
        }
    }

    render() {
        const {message, visible} = this.props;
        const {closing} = this.state;

        console.log(this.props);
        console.log('Warning Render #1 v:'+visible+' c:'+closing);
        if (!visible) {
            return null;
        }
        console.log('Warning Render #2');
        return (
            <div className="Warning-wrapper">
                <div className="Warning animated wobble">
                    {message}
                </div>
            </div>
        );
    }
}

export default Warning;