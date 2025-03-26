import { createSlice } from '@reduxjs/toolkit'
import { customReducer } from './reducers'
import { useGLTF } from '@react-three/drei'

interface Ingredient {
  src: string
  price: number
  icon: string
  location: number[]
  rotation: number[]
  scale: number[]
}

export const INGREDIENTS: Record<string, Ingredient> = {
  topBread: {
    src: require('../../assets/3d_Assets/Top_Bun.glb'),
    price: 0.5,
    icon: '🍞',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  bottomBread: {
    src: require('../../assets/3d_Assets/Bottom_Bun_001.glb'),
    price: 0.5,
    icon: '🍞',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  lettuce: {
    src: require('../../assets/3d_Assets/Lettuce_Slice.glb'),
    price: 0.5,
    icon: '🥬',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  // mushroom: {
  //   src: require('../../assets/3d_Assets/Mushroom_Slice.glb'),
  //   price: 1,
  //   icon: '🍄',
  //   location: [0, 0, 0],
  //   rotation: [0, 0, 0],
  //   scale: [8, 8, 8]
  // },
  tomato: {
    src: require('../../assets/3d_Assets/Tomato_Slice.glb'),
    price: 0.5,
    icon: '🍅',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  cheese: {
    src: require('../../assets/3d_Assets/Cheese_Slice.glb'),
    price: 1,
    icon: '🧀',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  chicken: {
    src: require('../../assets/3d_Assets/Chicken_Slice.glb'),
    price: 2,
    icon: '🍗',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  sausage: {
    src: require('../../assets/3d_Assets/Sausage_Slice.glb'),
    price: 1.5,
    icon: '🌭',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  salami: {
    src: require('../../assets/3d_Assets/Salami_Slice.glb'),
    price: 1.5,
    icon: '🍖',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  bacon: {
    src: require('../../assets/3d_Assets/Bacon_Slice.glb'),
    price: 1.5,
    icon: '🥓',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  },
  patty: {
    src: require('../../assets/3d_Assets/Patty_Slice.glb'),
    price: 2,
    icon: '🍔',
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [8, 8, 8]
  }
}

Object.keys(INGREDIENTS).forEach(ingredient => {
  useGLTF.preload(INGREDIENTS[ingredient as keyof typeof INGREDIENTS].src)
})

export interface Customstate {
  CustomData: {
    id: number
    name: string
  }[]
}

const initialState: Customstate = {
  CustomData: [
    {
      id: 1,
      name: 'bottomBread'
    }
  ]
}

const customSlice = createSlice({
  name: 'custom',
  initialState,
  reducers: { ...customReducer }
})

export const { AddItemToBurger, RemoveItemFromBurger } = customSlice.actions
export default customSlice.reducer
