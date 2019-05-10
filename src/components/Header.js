import React, { Component } from 'react';

class Header extends Component {
    render () {
        const { email } = this.props;

        return (
            <div className="header">
                <div className="heading">
                    Spoof Mail
                </div>
                <div className="random-email">
                    <input type="text" name="email" value={email} autoComplete="off" />
                    <select>
                        <option value="cloudmailin.net">@cloudmailin.net</option>
                        <option value="spoofmail">@spoofmail.com</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Header;