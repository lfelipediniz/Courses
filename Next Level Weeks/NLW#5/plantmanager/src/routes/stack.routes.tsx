import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { RegisterStg1 } from "../pages/RegisterStg1";
import { Login } from "../pages/Login";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.background,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="RegisterStg1" component={RegisterStg1} />
    <stackRoutes.Screen name="Login" component={Login} />

  </stackRoutes.Navigator>
);

export default AppRoutes;