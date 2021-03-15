import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootStack from "./navigator/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// establishing the connection to the API.
const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
});

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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  </ApolloProvider>
);

export default App;
