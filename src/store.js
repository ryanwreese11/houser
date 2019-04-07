import { createStore } from 'redux'

const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: ''
}


export const ADD_NAME = 'ADD_NAME'
export const ADD_STATE = 'ADD_STATE'
export const ADD_IMG = 'ADD_IMG'
export const ADD_CITY = 'ADD_CITY'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const ADD_ZIP = 'ADD_ZIP'
export const ADD_MORTGAGE = 'ADD_MORTGAGE'
export const ADD_RENT = 'ADD_RENT'
export const ADD_HOUSE = 'ADD_HOUSE'
export const CANCEL = 'CANCEL'

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_NAME:
      return { ...state, name: payload }
    case ADD_STATE:
      return { ...state, state: payload }
    case ADD_ADDRESS:
      return { ...state, address: payload }
    case ADD_CITY:
      return { ...state, city: payload }
    case ADD_ZIP:
      return { ...state, zip: payload }
    case ADD_MORTGAGE:
      return { ...state, mortgage: payload }
    case ADD_IMG:
      return { ...state, img: payload }
    case ADD_RENT:
      return { ...state, rent: payload }
      case CANCEL:
      return initialState
      // case ADD_HOUSE:
      // const {
      //   name,
      //   address, 
      //   city,
      //   state,
      //   zip,
      //   mortgage,
      //   rent
      // } = state;
      // const house = {
      //   name, 
      //   address,
      //   city,
      //   state,
      //   zip,
      //   mortgage,
      //   rent
      // }
      // const newHouses = [...state.houses, house]
      // return {...state, houses: newHouses}





    default:
      return state
  }


}


export default createStore(reducer)