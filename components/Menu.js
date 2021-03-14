import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { useSelector, useDispatch } from "react-redux";

const screenHeight = Dimensions.get("window").height;

const Menu = () => {
  const items = [
    {
      icon: "ios-settings",
      title: "Account",
      text: "settings",
    },
    {
      icon: "ios-card",
      title: "Billing",
      text: "payments",
    },
    {
      icon: "ios-compass",
      title: "Learn React",
      text: "start course",
    },
    {
      icon: "ios-exit",
      title: "Log out",
      text: "see you soon!",
    },
  ];

  // declaring new state variable.
  const menuTop = useRef(new Animated.Value(screenHeight)).current;

  const action = useSelector((state) => state.action);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleMenu();
  });

  const toggleMenu = () => {
    if (action == "openMenu") {
      Animated.spring(menuTop, {
        toValue: 54,
      }).start();
    }

    if (action == "closeMenu") {
      Animated.spring(menuTop, {
        toValue: screenHeight,
      }).start();
    }
  };

  const closeMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };

  return (
    <AnimatedContainer style={{ top: menuTop }}>
      <Cover>
        <Image source={require("../assets/background2.jpg")} />
        <Title>Kouame N'Dri</Title>
        <Subtitle>kouamendri1@gmail.com</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
      <Content />
    </AnimatedContainer>
  );
};

export default Menu;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  position: absolute;
  background: white;
  height: 100%;
  width: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;
