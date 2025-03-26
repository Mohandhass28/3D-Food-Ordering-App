import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { Suspense } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackIcon } from '@/components/ui/BackIcon'
import Filter from '@/assets/images/app/filter.svg'
import CustomizeView from '@/components/CustomizeView/CustomizeView'
import { INGREDIENTS } from '@/redux/CustomBurger/customSlice'
import useCustomizeBurgerHook from '@/hooks/CustomizeBurgerHook/useCustomizeBurgerHook'
import { useSelector } from 'react-redux'
import { selectBurger } from '@/redux/CustomBurger/meno'

const customize = () => {
  const { AddItem, RemoveItem } = useCustomizeBurgerHook()
  const items = useSelector(selectBurger)

  return (
    <SafeAreaView className='flex-1'>
      <View className='px-4 mt-4 flex-row items-center justify-between my-6'>
        <TouchableOpacity>
          <BackIcon color='#000000' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Filter />
        </TouchableOpacity>
      </View>
      <View className='px-8'>
        <Text className='font-[600] text-[34px]'>Make Your Burger 🍔</Text>
      </View>
      <CustomizeView />
      <View className='px-8'>
        <Text className='font-[600] text-[30px] text-[#000]'>Burger</Text>
        <Text className='font-[600] text-[13px] text-[#000]'>
          Burger Queen Best
        </Text>
      </View>
      <FlatList
        data={Object.keys(INGREDIENTS)}
        horizontal
        keyExtractor={item => item}
        style={{
          maxHeight: 100
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 20,
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        renderItem={({ item }) => {
          if (items.filter(({ name }) => name === item).length > 0) {
            return null
          }

          return (
            <TouchableOpacity
              onPress={() => {
                AddItem({ name: item })
              }}
              className='p-[12px] rounded-[14px] bg-[#e7bb91] border-[2px] border-[#ed9a4d]'
            >
              <Text className='font-[600] text-[14px] text-[#fff]'>
                {item} {INGREDIENTS[item].icon}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
      <View className='flex-row justify-between px-10 mb-4'>
        <TouchableOpacity className='px-3 py-3 bg-[#F48B2B] rounded-full items-center justify-center'>
          <BackIcon color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity className=' bg-[#F48B2B] rounded-full w-[80%] items-center justify-center'>
          <Text className='font-[700] text-[20px] text-[#fff]'>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default customize
