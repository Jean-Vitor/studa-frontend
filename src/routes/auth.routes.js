import { createSwitchNavigator } from "@react-navigation/compat";
import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'

export const AuthNavigator = createSwitchNavigator({
    "Login": {screen: Login},
    "Cadastro": {screen: Cadastro}
},
{
    initialRouteName: "Login"
})