import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import {
  AddItemToBurger,
  RemoveItemFromBurger
} from '@/redux/CustomBurger/customSlice'

type AddName = {
  name: string
}

const useCustomizeBurgerHook = () => {
  const dispatch = useDispatch<AppDispatch>()
  const AddItem = ({ name }: AddName) => {
    dispatch(AddItemToBurger(name))
  }
  const RemoveItem = () => {
    dispatch(RemoveItemFromBurger())
  }
  return {
    AddItem,
    RemoveItem
  }
}

export default useCustomizeBurgerHook
