import React, { Component } from 'react';
import { Input, Label, FormGroup, Button, Form } from 'reactstrap';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(event) {
        this.props.setUsername(event.target.value)
    }

    handlePasswordChange(event) {
        this.props.setPassword(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.submit({
            email: this.props.username.value,
            password: this.props.password.value,
        });
    }

    render() {
        return (
            <React.Fragment>
                <h2><span>Welcome,</span> please sign in to proceed!</h2>
                <p>You are signing into the Logs Portal.</p>
                {
                    this.props.error ?
                        <div className="error-message">{this.props.error}</div> :
                        null
                }
                <Form className="login-form"  onSubmit={this.handleSubmit}>
                <div class="login-style">
                        <FormGroup>
                            <Label className="label-style">Enter your Email Id</Label>
                            <Input className="email-input"
                                type="email"
                                value={this.props.username.value}
                                onChange={this.handleUsernameChange}
                                error={this.props.username.error}
                                >
                            </Input>
                            {
                                this.props.username.error ? 
                                (<div className="error-msg">{this.props.username.error}</div>) : null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label className="label-style">Enter your Password</Label>
                            <Input className="email-input"
                                type="password"
                                value={this.props.password.value}
                                onChange={this.handlePasswordChange}
                                error={this.props.password.error}
                                >
                            </Input>
                            {
                                this.props.password.error ? 
                                (<div className="error-msg">{this.props.password.error}</div>) : null
                            }
                        </FormGroup>
                    <div className="d-flex justify-content-center">
                        <Button className="submit-btn" type="submit"
                        >Sign In</Button>
                    </div>
                </div>
                </Form>
                { localStorage.getItem('userId') ? <Redirect to = "/logs"/>  : null  }
            </React.Fragment>

        );
    }
}

export default Login;

