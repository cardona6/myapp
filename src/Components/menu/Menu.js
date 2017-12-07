import React, { Component } from 'react';
import { Link, nav } from "react-router-dom";
import './Menu.css';

class Menu extends Component {

    constructor() {
        super();
        this.state = { flipped: null, showIcons: false };
    }


    render() {
        return ( <
            div >
            <
            h1 className = "menu" >
            <
            ul >
            <
            li > < img src = "/icons/menu-menu.png"
            alt = "" / > < /li> <
            li > < Link to = "/Layout" > < img src = "/icons/menu-setting.png"
            alt = "" / > < /Link></li >
            <
            li > < Link to = "/Footer" > < img src = "/icons/menu-login.png"
            alt = "" / > < /Link></li >
            <
            li > < Link to = "/About" > < img src = "/icons/menu-info.png"
            alt = "" / > < /Link></li >
            <
            /ul> <
            /h1> <
            /div>
        );
    }
}



export default Menu;