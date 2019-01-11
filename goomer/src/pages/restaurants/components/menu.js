import React, { Component } from 'react'
import { groupBy } from 'lodash'

import { getMenu } from '../../../services/goomerService'

import MenuGroup from './menuGroup'

export default class Menu extends Component {
    
    state = {
        items: []
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        getMenu(this.props.match.params.id).then(result => {
            console.log(result.data)
            this.setState({ items: result.data })
        })
    }

    render() {

        const { items } = this.state

        const groups = groupBy(items, item => {
            return item.group
        })

        const itemsModel = []

        console.log(groups)

        for (let i in groups) {
            itemsModel.push(<MenuGroup items={groups[i]} title={i} />)
        }

        return (
            <div className="mv5 ph6 ba bw1 b--gray">{itemsModel.length > 0? itemsModel:<div>Sem nenhum item no menu</div>}</div>
        )
    }
}
