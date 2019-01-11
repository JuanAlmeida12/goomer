import React, { Component } from 'react'

import MenuItem from './menuItem'

export default class MenuGroup extends Component {
    render() {
        
        const { title, items } = this.props
        
        return (
            <div>
                <div className="f2 pv2 mv3 mh3">{title}</div>
                {items.map(item => (
                    <MenuItem item={item}/>
                ))}
            </div>
        )
    }
}