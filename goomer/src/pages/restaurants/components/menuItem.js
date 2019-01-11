import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        const { name, price } = this.props.item
        return (
            <div className="pa2 ba bw1 ma1 b--light-gray dib">
                <div className="fl">
                    {name}
                </div>
                ...........
                <div className="fr">
                    {price? `R$${price}`:"sem preço"}
                </div>
            </div>
        )
    }
}