import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clearInterval: 0,
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.state.clearInterval)
        this.props.setShowLogs(false);
    }

    componentDidMount(){
        this.props.setLogs(120)
        let refreshIntervalId;
        refreshIntervalId = setInterval(this.props.setLogs, 10000, 120)
        this.setState({
            clearInterval: refreshIntervalId
        })
    }

    handleLogout(event){
        this.props.logout();
        this.props.history.push({
            pathname: '/login'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                <Button onClick={this.handleLogout}>LOGOUT</Button></div>
                <h1>LOGS</h1>
                <div className="logs-styling">
                    {this.props.logs}
                </div>
            </React.Fragment>
        );
    }
}

export default Logs;

