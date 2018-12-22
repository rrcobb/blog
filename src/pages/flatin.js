import React from 'react'

class FoldingAnimation extends React.Component {
    state = { folded: true }
    
    componentDidMount() {
        this.timer = setInterval(() => this.setState({folded: !this.state.folded}), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return <div>
            {
            (this.state.folded ? this.props.from : this.props.to).split('').map(char =>
                    <span key={char} className={this.state.folded ? '' : 'shown'}>{char}</span>
                )
            }
          <style jsx>
            {`
            .shown {
                visibility: visible;
                opacity: 1;
                transition-delay: 1.5s;
            }
            span {
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s linear 0.33s, opacity 0.33s linear;
            }`}
          </style>
        </div>;
    }
}

export default class FlatinAnimation extends React.Component {
    render() {
        return <FoldingAnimation from="FLATIRON" to="LATIN"></FoldingAnimation>
    }
}
