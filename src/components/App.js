import React, { Component } from 'react';
import io from 'socket.io-client';
import Header from './Header';
import Mails from './Mails';
import MailView from './MailView';

class App extends Component {
    state = {
        endpoint: 'http://spoofmailserver.herokuapp.com/',
        mails: [],
        email: '',
        mail: ''
    }

    componentDidMount() {
        fetch(this.state.endpoint)
            .then(data => data.text())
            .then(res => {
                res = JSON.parse(res);
                this.setState(() => ({email: res.email}));
            });

        const socket = io(this.state.endpoint);
        
        socket.on('mail', (mail) => {
            mail = JSON.parse(mail);

            if (mail.headers.To.includes(this.state.email)) {
                this.setState((state) => ({
                    mails: state.mails.concat({mail})
                }));
            } else {
                console.log(mail.headers.To, this.state.email);
            }
        });
    }

    viewMail = (mail) => {
        this.setState({mail});
    } 

    render() {
        const { mails, mail, email } = this.state;

        return (
            <div>
                <Header email={email} />
                <div className="mails">
                    <div className="view-mails">
                        <div className="section-1">
                            Inbox - All Mails
                        </div>
                        <Mails mails={mails} view={this.viewMail} />
                    </div>
                    <div className="check-mail" style={{backgroundColor: mail ? 'white' : 'rgb(247, 240, 240)'}}>
                        <MailView mail={mail} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;