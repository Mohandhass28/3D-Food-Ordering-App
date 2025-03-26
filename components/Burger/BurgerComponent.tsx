import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { animated, useSpring } from '@react-spring/three'

interface GLTFResult {
  scene: THREE.Group
  scenes: THREE.Group[]
  cameras: THREE.Camera[]
  animations: THREE.AnimationClip[]
}

interface Props {
  src: string
  position: number[]
  rotation: number[]
  scale: number[]
  isDone: boolean
}

const BurgerComponent = ({ ...props }: Props) => {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF(props.src) as GLTFResult
  const { positionY } = useSpring({ positionY: props.position[1] - 1 })
  const { scale } = useSpring({
    from: {
      scale: [1, 1, 1]
    },
    to: {
      scale: [7, 7, 7]
    }
  })
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 1
    }
  })
  console.log(positionY)
  return (
    <animated.group
      ref={groupRef}
      scale={props.scale}
      position-y={props.position[1] - 1}
    >
      <primitive object={scene} rotation={props.rotation} />
    </animated.group>
  )
}

export default BurgerComponent
