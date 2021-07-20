
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Invalid from '../Screen/cuopon/invalid(0)';
import Used from '../Screen/cuopon/used(0)';
import Valid from '../Screen/cuopon/valid(0)';

const TopTab = createMaterialTopTabNavigator();

const CouponNav=()=>{
  return(
    <TopTab.Navigator >
    <TopTab.Screen name="Invalid" component={Invalid} />
      <TopTab.Screen name="Used" component={Used} />
      <TopTab.Screen name="Valid" component={Valid} />

    </TopTab.Navigator>


  );
}
export default CouponNav