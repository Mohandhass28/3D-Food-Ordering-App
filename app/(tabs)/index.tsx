import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native'

import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useControls from 'r3f-native-orbitcontrols'
import FilterIcon from '@/assets/images/app/filter.svg'
import RightArrow from '@/assets/images/app/right arrow.svg'
import PlusIcon from '@/assets/images/app/Vector.svg'

const Image1 = require('../../assets/images/app/image 3.png')
const Image2 = require('../../assets/images/app/image 4.png')

export default function HomeScreen () {
  const [OrbitControls, events] = useControls()
  return (
    <ScrollView>
      <SafeAreaView className='flex-1 px-8 mt-4'>
        <View className='flex-row items-center justify-between '>
          <Image
            source={require('@/assets/images/app/user.png')}
            style={{ alignSelf: 'center' }}
          />
          <FilterIcon fill={'#000'} />
        </View>
        <View className='mt-8'>
          <Text className=''>Delish Burger</Text>
          <Text className='mt-1 font-[800] text-[34px]'>
            Welcome to burger Queen 🍔{' '}
          </Text>
        </View>
        <View className=''>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'row',
              gap: 20,
              marginTop: 20
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              { id: 1, name: 'Burger' },
              { id: 2, name: 'Burger' },
              { id: 3, name: 'Burger' },
              { id: 4, name: 'Burger' },
              { id: 5, name: 'Burger' },
              { id: 6, name: 'Burger' },
              { id: 7, name: 'Burger' },
              { id: 8, name: 'Burger' }
            ]}
            renderItem={({ item }) => (
              <View className='px-6 py-2'>
                <Text className='font-[600] text-[14px]'>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View className='bg-[#F48B2B] flex-col p-4 justify-between w-full h-[180px] rounded-[30px] mt-6 relative'>
          <View className=''>
            <Text className='w-[70%] font-[600] text-[27px] text-[#fff]'>
              Savour the Moment, Bite by Bite. 😊
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              width: 140,
              height: 30,
              bottom: -8,
              right: -10,
              backgroundColor: 'transparent',
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
              shadowColor: '#F48B2B',
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10 // for Android
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 140,
              height: 30,
              bottom: -8,
              right: -10,
              backgroundColor: 'transparent',
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
              shadowColor: '#F48B2B',
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10 // for Android
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 140,
              height: 30,
              bottom: -10,
              right: -10,
              backgroundColor: 'transparent',
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
              shadowColor: '#F48B2B',
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10 // for Android
            }}
          />
          <Image
            className='absolute bottom-[-70] right-[-30]'
            source={require('@/assets/images/app/view-delicious-burger-with-buns-cheese.png')}
          />
          <View className='' />
          <TouchableOpacity className=' bg-white self-start px-8 py-[7px] rounded-[14px]'>
            <Text className='font-[600] text-[18px]'>Lunch</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center justify-between mt-10'>
          <Text className='font-[600] text-[24px]'>Best of the Week</Text>
          <TouchableOpacity
            className='bg-[#f48c2b9a] p-3 rounded-full'
            style={{
              borderRadius: 22,
              shadowColor: '#F48B2B',
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 1,
              shadowRadius: 20,
              elevation: 8 // for Android
            }}
          >
            <RightArrow fill={'#fff'} />
          </TouchableOpacity>
        </View>
        <View className='flex-row flex-wrap'>
          <CardComponent image={Image1} />
          <CardComponent image={Image2} />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

interface CarfProps {
  image: ImageSourcePropType
}

const CardComponent = (props: CarfProps) => {
  return (
    <>
      <View className='w-[50%]  px-4 h-fit rounded-[30px] mt-6 relative'>
        <View className='relative items-center'>
          <Image
            source={props.image}
            style={{
              height: 160,
              width: 160,
              objectFit: 'fill'
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 110,
              height: 30,
              bottom: 50,
              left: 20,
              backgroundColor: 'transparent',
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
              shadowColor: '#F48B2B',
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10 // for Android
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 110,
              height: 30,
              bottom: 50,
              left: 20,
              backgroundColor: 'transparent',
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
              shadowColor: '#F48B2B',
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10 // for Android
            }}
          />
        </View>
        <View className=''>
          <Text className='font-[800] text-[16px]'>Cheese Burger</Text>
          <Text className='font-[400] text-[12px]'>Burger Queen Best</Text>
          <Text className='my-4 text-[#F48B2B] font-[800] text-[18px]'>
            20.00$
          </Text>
        </View>
        <TouchableOpacity className='px-3 py-3 bg-[#F48B2B] self-start rounded-full absolute bottom-[0] right-[0]'>
          <PlusIcon fill={'#fff'} />
        </TouchableOpacity>
      </View>
    </>
  )
}
