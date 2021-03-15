import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootStack from "./navigator/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

const initialState = {
  action: "closeMenu",
  name: "",
};

const reducuer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU":
      return { action: "closeMenu" };
      break;
    case "OPEN_MENU":
      return { action: "openMenu" };
      break;
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
      break;
  }
};

const store = createStore(reducuer);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </Provider>
);

export default App;
