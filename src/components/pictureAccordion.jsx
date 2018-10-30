import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CLOSE = 1;

const OPEN = 2;sad

export default class PictureAccordion extends Component {
    static propTypes = {
        head: PropTypes.instanceOf(Array).isRequired,
        children: PropTypes.node.isRequired,
        dataGroup: PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.instanceOf(Object),
        styleBody: PropTypes.instanceOf(Object),
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        defaultOpened: PropTypes.bool,
        reference: PropTypes.func,
        autogrow: PropTypes.bool,
        open: PropTypes.bool,
        removeContentClosed: PropTypes.bool,
        picture: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        className: '',
        dataGroup: null,
        id: null,
        style: null,
        styleBody: null,
        onOpen: null,
        onClose: null,
        defaultOpened: null,
        reference: null,
        autogrow: false,
        open: undefined,
        removeContentClosed: false,
        picture: null
    };

    constructor(props) {
        super();

        this.state = {
            currentState: (props && props.defaultOpened) ? OPEN : CLOSE,
        };
    }

    componentWillMount() {
        const { open, className } = this.props;

        if (open || (className && className.indexOf('picture__accordion--open') !== -1)) {
            this.setState({
                currentState: OPEN
            });
        }
    }

    componentDidMount() {
        const { className, autogrow } = this.props;
        const { currentState } = this.state;

        if (className.indexOf('picture__accordion--open') !== -1) {
            this.accordion.classList.add('picture__accordion--open');
        }

        if (currentState === OPEN) {
            if (autogrow && this.body) {
                this.body.style.setProperty('max-height', 'initial', 'important');
            }
        }
    }
}
