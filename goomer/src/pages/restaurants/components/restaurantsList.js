import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getRestaurants } from '../../../services/goomerService'

export default class RestaurantsList extends Component {

    state = {
        restaurants: [],
        loading: false,
    }

    componentDidMount() {
        this.setState({ loading: true })
        getRestaurants().then(result => {
            console.log(result.data)
            this.setState({ restaurants: result.data, loading: false })
        })
    }

    render() {
        const { restaurants, loading } = this.state
        return (
            <div className="w-100 di">
                <div className="dib pa2">
                    {restaurants.map(restaurant => (
                        <RestaurantsItemlist restaurant={restaurant} />
                    ))}
                    {loading && ('Carregando')}
                </div>
            </div>
        )
    }
}

const RestaurantsItemlist = props => {
    const { name, image, id, address } = props.restaurant
    return (
        <div className="restaurant__item-list ma2 mv4 fc">
            <div className="restaurant__item-list_img di">
                <img className="shadow-3 fr mr3" src={image}/>
            </div>
            <div className="restaurant__item-list_container di">
                <div className="fl ph2" >
                    <h3>{name}</h3>
                    {address}
                </div>
                <div className="pv4">
                    <Link className="no-underline pa2 ba bw1 b--light-gray br2 bg-white f6" to={`/${id}`}>Ver Menu</Link>
                </div>
            </div>
        </div>
    )
}