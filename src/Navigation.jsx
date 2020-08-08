import React, { Component } from 'react';
import navigation from './navigation.json';

export class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    toggleVisible() {
        this.setState({visible: !this.state.visible});
    }

	render() {
        let mobileNav = [];
        let desktopNav = [];
        navigation.forEach((n, i) => {
            mobileNav.push(
                <li key={n.text}>
                    <a href={n.link} target={n.target} rel="noopener noreferrer">
                        <span className="nav-text"> {n.text} </span>
                        <img src={n.img} alt={n.text}/>
                    </a>
                </li>
            );
            desktopNav.push(
                <li key={n.text}>
                    <a href={n.link} target={n.target} rel="noopener noreferrer"> {n.text} </a>
                </li>
            );
        });
    
    	return (
            <div>
                <div className="menu" onClick={this.toggleVisible.bind(this)}> 
                    <img src="img/icons/menu.png" alt="menu" /> 
                </div>
                
                {this.state.visible ? <div id="navbar"> <ul> {mobileNav} </ul></div> : ''}
                
                <div id="full-navbar">
                    <ul>{desktopNav}</ul>
                </div>
            </div>
    	);
  	}
}
