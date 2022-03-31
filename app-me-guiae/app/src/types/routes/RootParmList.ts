import type {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native'
import type {
  StackScreenProps,
  StackNavigationOptions
} from '@react-navigation/stack'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export const options: StackNavigationOptions = {
  headerShown: false
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>
  Tips: undefined
  Explores: undefined
  Favorites: undefined
  Guides: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

export type HomeTabParamList = {
  Home: undefined
  Tip: undefined
  Guide: undefined
  DetailsGuide: undefined
  DetailsRoute: undefined
}

export type GuideStackParamList = {
  GuideNavigator: undefined
  DetailsGuide: undefined
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
