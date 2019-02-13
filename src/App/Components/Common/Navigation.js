import React, {Component} from 'react';



class Navigation extends Component {

    render() {

        return (
            <nav id="pagination">
                <ul>
                    <li>Display Rows</li>
                    <li className="item current">5</li>
                    <li className="item">10</li>
                    <li className="item">15</li>
                    <li className="item">20</li>
                    <li className="item">25</li>
                </ul>
                <div className="arrow">
                    <div className="previous round">&#8249;</div>
                    <div className="next round">&#8250;</div>
                </div>
            </nav>
        );
    }
}


export default Navigation;