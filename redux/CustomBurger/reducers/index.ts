import { Customstate } from '../customSlice'

const AddItemToBurger = (state: Customstate, action: { payload: string }) => {
  const lastIndex = state.CustomData.length + 1
  const newItem = {
    id: lastIndex,
    name: action.payload
  }

  // Create new array with the item inserted before the last item (if it exists)
  if (state.CustomData.filter(({ name }) => name === 'topBread').length > 0) {
    let index = null
    index = state.CustomData.findIndex(({ name }) => name === 'topBread')
    state.CustomData = [
      ...state.CustomData.slice(0, index),
      { ...newItem, id: newItem.id - 1 },
      ...state.CustomData.slice(index + 1)
    ]
    return
  }
  state.CustomData = [
    ...state.CustomData.slice(0, lastIndex),
    newItem,
    ...state.CustomData.slice(lastIndex)
  ]
}

const RemoveItemFromBurger = (state: Customstate) => {
  if (state.CustomData.length > 1) {
    state.CustomData = state.CustomData.filter(
      (_, index) => index === 0 || index === state.CustomData.length - 1
    )
  }
}

export const customReducer = {
  AddItemToBurger,
  RemoveItemFromBurger
}
