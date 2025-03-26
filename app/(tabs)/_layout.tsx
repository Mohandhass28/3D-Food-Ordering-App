import { router, Tabs } from 'expo-router'
import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import PlusIcon from '@/assets/images/app/Vector.svg'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import HeartIcon from '@/assets/images/app/heart.svg'
import Location from '@/assets/images/app/location.svg'
import User from '@/assets/images/app/user.svg'

export default function TabLayout () {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      initialRouteName='customize'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute'
          },
          default: {
            height: '8%',
            justifyContent: 'center',
            alignItems: 'center'
          }
        })
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarButton: ({ children }: BottomTabBarButtonProps) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.replace('/')
                }}
              >
                {children}
              </TouchableOpacity>
            )
          },
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='house.fill' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='favorite'
        options={{
          title: '',
          tabBarButton: ({ children }: BottomTabBarButtonProps) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.replace('/(tabs)/favorite')
                }}
              >
                {children}
              </TouchableOpacity>
            )
          },
          tabBarIcon: ({ color }) => <HeartIcon fill={color} />
        }}
      />

      <Tabs.Screen
        name='customize'
        options={{
          title: '',
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center'
          },
          tabBarButton: ({ children }: BottomTabBarButtonProps) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.replace('/(tabs)/customize')
                }}
                className='px-3 py-3 bg-[#F48B2B] rounded-full'
              >
                <PlusIcon fill={'#fff'} />
              </TouchableOpacity>
            )
          }
        }}
      />
      <Tabs.Screen
        name='locations'
        options={{
          title: '',
          tabBarButton: ({ children }: BottomTabBarButtonProps) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.replace('/(tabs)/locations')
                }}
              >
                {children}
              </TouchableOpacity>
            )
          },
          tabBarIcon: ({ color }) => <Location fill={color} />
        }}
      />
      <Tabs.Screen
        name='user'
        options={{
          title: '',
          tabBarButton: ({ children }: BottomTabBarButtonProps) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.replace('/(tabs)/user')
                }}
              >
                {children}
              </TouchableOpacity>
            )
          },
          tabBarIcon: ({ color }) => <User fill={color} />
        }}
      />
    </Tabs>
  )
}
