import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import BurgerComponent from '../Burger/BurgerComponent'
import { useSelector } from 'react-redux'
import { selectBurger } from '@/redux/CustomBurger/meno'
import { INGREDIENTS } from '@/redux/CustomBurger/customSlice'
import * as THREE from 'three'
import { ContactShadows } from '@react-three/drei'

const CustomizeView = () => {
  const items = useSelector(selectBurger)
  const [init, setInit] = useState(0.2)
  useEffect(() => {
    if (items.length === Object.keys(INGREDIENTS).length) {
      setInit(0.1)
    }
  }, [items])
  return (
    <View style={styles.container} className='flex-1'>
      <Canvas camera={{ position: [-2, 2.3, 5], fov: 40 }}>
        <ambientLight intensity={4} />
        <Suspense>
          {items.map(item => (
            <BurgerComponent
              isDone={items.length === Object.keys(INGREDIENTS).length}
              key={item.id}
              src={INGREDIENTS[item.name].src}
              scale={INGREDIENTS[item.name].scale}
              rotation={INGREDIENTS[item.name].rotation}
              position={[
                INGREDIENTS[item.name].location[0],
                INGREDIENTS[item.name].location[1] + item.id * init,
                INGREDIENTS[item.name].location[2]
              ]}
            />
          ))}
        </Suspense>
      </Canvas>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
export default CustomizeView
