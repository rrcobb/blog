import React from 'react'

class FoldingAnimation extends React.Component {
    state = { folded: true }
    
    componentDidMount() {
        this.hidetimer = setInterval(() => this.setState({hidden: !this.state.hidden}), 3000)
        setTimeout(() => { this.foldtimer = setInterval(() => this.setState({folded: !this.state.folded}), 3000) }, 1500)
        this.setState({hidden: false, folded: false})
    }

    componentWillUnmount() {
        clearInterval(this.hidetimer)
        if (this.foldtimer) {clearInterval(this.foldtimer)}
    }

    toHide() {
        let hide = new Set(); // indices of hidden chars in 'from'
        let { to, from } = this.props;
        let index = 0;
        to.split('').forEach(char => {
            while (char != from[index]) {
                if (index > from.length - 1) break;
                hide.add(index++);
            }
            index++
        })
        return hide;
    }


    render() {
        let hiddenChars = this.toHide();
        return <div>
            {
                this.props.from.split('').map((char, index) => {
                    let hide = hiddenChars.has(index);
                    return <span key={char} className={hide && this.state.hidden ? '' : 'shown'}>
                        {hide && this.state.folded ? '' : char}
                    </span>
                })
            }
          <style>
            {`
            .shown {
                visibility: visible;
                opacity: 1;
                transition-delay: 0.4s;
                width: unset;
            }
            span {
                visibility: hidden;
                opacity: 0;
                width: 0;
                transition: visibility 0s linear 0.33s, opacity 0.33s linear;
            }`}
          </style>
        </div>;
    }
}

export default class FlatinAnimation extends React.Component {
    render() {
        return <div>
            <FoldingAnimation from="FLATIRON" to="LATIN"></FoldingAnimation>
            <style>
            {`
            div {
                font: Verdana;
                font-size: xxx-large;
            }`
            }
          </style>

            
        </div>
    }
}
