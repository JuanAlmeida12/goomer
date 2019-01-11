import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav w-100 fixed z-max">
                <div className="fl f3">
                    <div className="dib pa2 pl4 navy">
                        <Link className="no-underline navy" to="/">Goomer</Link>
                    </div>
                </div>
                <div className="nav-btn dn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check" className="dn" />
                <div className="fr f4 h-100 links">
                    <a href="https://github.com/JuanAlmeida12" className="dib no-underline pv2 ph2 h-100 navy">Github</a>
                    <a href="https://www.linkedin.com/in/juan-almeida-a1a47ba7/"  className="dib no-underline pv2 ph3 h-100 navy">LinkedIn</a>
                </div>
            </div>
        )
    }
}