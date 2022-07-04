import React from "react";

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timer = setInterval( () => this.sec(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    sec() {
        this.setState({date: new Date()})
    }

    render() {
        return(
            <div>
            <h1>Il est : {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        )
    }
}

export default Time;