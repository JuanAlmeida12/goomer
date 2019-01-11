import axios from 'axios'

const defaulURL = 'https://challange.goomer.com.br/restaurants'

export const getRestaurants = () => {
    return axios.get(defaulURL)
}

export const getMenu = restaurantID => {
    return axios.get(`${defaulURL}/${restaurantID}/menu`)
}