import {Component} from "react/cjs/react.production.min";
import PropTypes from "prop-types";


class LogoButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.className,
            buttonText: props.className
        };
        this.handleOnClick = props.handleOnClick.bind(this)
    }

    static propTypes = {
        className: PropTypes.string,
        buttonText: PropTypes.string,
    }

    render() {
        return [
            <button className={this.state.className}>{}</button>
        ]
    }
}