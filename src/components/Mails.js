import React, { Component } from 'react';

class Mails extends Component {
    render() {
        const { mails, view } = this.props;

        if (mails.length === 0) {
            return (
                <div className="section-2" style={{
                    display: 'flex',
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center'}}>
                    <div className="loader"></div>
                    <span style={{
                        fontSize: '25px',
                        color: 'grey',
                        fontFamily: 'Helvetica',
                    }}>Waiting for mails..</span>
                </div>
            );
        }

        return (
            <div className="section-2">
                {mails.map(mail => (
                    <div className="mail" key={mail.id} onClick={() => view(mail)}>
                        <div className="avatar">
                            <div className="actual-avatar">
                                <div className="avatar-letter">{mail.mail.headers.From[0]}</div>
                            </div>
                        </div>
                        <div className="mail-details">
                            <div className="name">
                                {mail.mail.headers.From}
                            </div>
                            <div className="subject">
                                {mail.mail.headers.Subject}
                            </div>
                            <div className="message">
                                {mail.mail.html.replace(/<[^>]*>/g, '')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Mails;