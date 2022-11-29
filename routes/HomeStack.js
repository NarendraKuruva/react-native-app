import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import DetailedView from "../screens/DetailedView";

const screens = {
  Home: {
    screen: DetailedView,
  },
  Tab1: {
    screen: DetailedView,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
