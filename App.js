import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./source/Screen/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Gender from "./source/Screen/Gender";
import Sigin from "./source/Screen/dealsignin";
import SignUp from "./source/Screen/dealsignup";
import Cart from "./source/Screen/Cart";
import Search from "./source/Screen/Search";
import Brand from "./source/Screen/brand";
import Account from "./source/Screen/coupon";
import Brandin from "./source/Screen/Brandin";
import ProductDetails from "./source/Screen/ProductDetails";
import ProductCategory from "./source/Screen/CategoryProducts";
import CouponNav from "./source/Navigation/couponNav";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WalletNav, {
  AboutBalance,
  AboutCashBack,
  Withdraw,
} from "./source/Navigation/WalletNav";
import OnSearchClick from "./source/Screen/OnSearchClick";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store, persistor } from "./source/redux/store";
import { PersistGate } from "redux-persist/integration/react";
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ef7157",
        // showLabel:false,
        // inactiveTintColor: '#7FC0C4',
        style: {
          // backgroundColor: '#00818A',
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Homepage"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        screenOptions={{ headerShown: true }}
        options={{
          tabBarLabel: "Brand",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
        name="heart"
        component={Brand}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="User"
        component={Account} 
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="MyTabs"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Homepage" component={MyTabs} />
              <Stack.Screen name="Login" component={Sigin} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Brandin" component={Brandin} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />

              <Stack.Screen
                name="Coupon"
                component={CouponNav}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="Wallet"
                component={WalletNav}
                options={{ headerShown: true }}
              />
              <Stack.Screen name="Withdraw" component={Withdraw} />
              <Stack.Screen name="AboutBalance" component={AboutBalance} />
              <Stack.Screen name="AboutCashBack" component={AboutCashBack} />
              <Stack.Screen name="ProductCategory" component={ProductCategory} options={{ headerShown: true }}/>
              <Stack.Screen name="OnSearchClick" component={OnSearchClick} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
