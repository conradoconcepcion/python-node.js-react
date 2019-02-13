import React, {Component} from 'react';




class Header extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            show: false
        };

        document.title = this.props.title;
    }



    render() {


        const name = window.location.href.split('/');


        return (
            <header id="header" className="clear">
                <div className="left"> 
                    <a className="brand" href="#/"><strong>Superencryp <span>Block</span></strong></a>
                </div>
                <div className="right">
                    <ul className={(this.state.collapse) ? 'menus collapse' : 'menus'} onMouseLeave={(e) => this.setState({collapse: false})}>
                        <li className={(name[name.length-1] === 'dashboard') ? 'active item' : 'item'}>
                            <a href="#/dashboard">Dashboard</a>
                        </li>
                        <li className={(name[name.length-1] === 'wallet') ? 'active item' : 'item'}>
                            <a href="#/wallet">Wallet</a>
                        </li>
                        <li className={(name[name.length-1] === 'trading') ? 'active item' : 'item'}>
                            <a href="#/trading">Trading</a>
                        </li>
                        <li className="item" onMouseEnter={(e) => this.setState({show: true})}>

                            <div className="avatar">
                                <i className="icon-user"/>
                            </div>
                            {(this.state.show) ? (
                                <ul className="submenu" onMouseLeave={(e) => this.setState({show: false})}>
                                    <li className="item">
                                        <a href="#/settings">Settings</a>
                                    </li>
                                    <li className="item">
                                        <a href="#/privacy">Privacy</a>
                                    </li>
                                    <li className="item">
                                        <a href="#/help">Help</a>
                                    </li>
                                    <li className="item">
                                        <a href="#/logout" onClick={this.props.app.logout.bind(this)}>Logout</a>
                                    </li>
                                </ul>
                            ) : ''}
                        </li>
                    </ul>

                    <span className="toggle" onClick={(e) => this.setState({show: true, collapse: true})}></span>
                </div>      
            </header>
        );
    }
}


export default Header;