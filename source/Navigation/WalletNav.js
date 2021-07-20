
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Balance from '../Screen/wallet/balance';
import Cashback from '../Screen/wallet/cashback';
import WithDrawBalance from '../Screen/wallet/withdraw';
import About_Balance from '../Screen/wallet/aboutbalance';
import About_Cashback from '../Screen/wallet/aboutcashback';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const WalletNav=()=>{
  return(
    <TopTab.Navigator >
    <TopTab.Screen name="Balance" component={Balance} />
    <TopTab.Screen name="CashBack" component={Cashback} />


    </TopTab.Navigator>


  );
}

export const Withdraw=()=>{
return(

    <Stack.Navigator>
          <Stack.Screen name="WithDrawBalance" component={WithDrawBalance} />

    </Stack.Navigator>

);

}

export default WalletNav

export const AboutBalance=()=>{
  return(
  
      <Stack.Navigator>
            <Stack.Screen name="About_Balance" component={About_Balance}/>
  
      </Stack.Navigator>
  
  );
  
  }
  
  export const AboutCashBack =()=>{
    return(
      <Stack.Navigator>
      <Stack.Screen name="About_Cashback" component={About_Cashback} />

</Stack.Navigator>
    );
  }