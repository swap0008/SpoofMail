import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class MailView extends Component {
    render() {
        const { mail } = this.props;

        if (mail) {
            return (
                <div>
                    <div class="mail-subject">
                        {mail.mail.headers.Subject}
                    </div>
                    <div class="mail">
                        <div class="avatar">
                            <div class="actual-avatar">
                                <div class="avatar-letter">{mail.mail.headers.From[0]}</div>
                            </div>
                        </div>
                        <div class="mail-details">
                            <div class="name">
                                {mail.mail.headers.From}
                            </div>
                            <div class="subject">
                                to me
                            </div>
                            <div class="message">
                                {mail.mail.headers.Date}
                            </div>
                        </div>
                    </div>
                    <div class="mail-body">
                        {renderHTML(mail.mail.html)}
                    </div>
                </div>
            );
        }

        return (
            <div className="blank-mail">View your mail here &#128065;</div>
        );
    }
}

export default MailView;