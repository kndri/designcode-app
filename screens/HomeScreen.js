import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import Course from "../components/Course";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Avatar from "../components/Avatar";
import { useSelector, useDispatch } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const logos = [
    {
      image: require("../assets/logo-framerx.png"),
      text: "Framer X",
    },
    {
      image: require("../assets/logo-figma.png"),
      text: "Figma",
    },
    {
      image: require("../assets/logo-studio.png"),
      text: "Studio",
    },
    {
      image: require("../assets/logo-react.png"),
      text: "React",
    },
    {
      image: require("../assets/logo-swift.png"),
      text: "Swift",
    },
    {
      image: require("../assets/logo-sketch.png"),
      text: "Sketch",
    },
  ];

  const cards = [
    {
      title: "React Native for Designers",
      image: require("../assets/background11.jpg"),
      subtitle: "React Native",
      caption: "1 of 12 sections",
      logo: require("../assets/logo-react.png"),
    },
    {
      title: "Styled Components",
      image: require("../assets/background12.jpg"),
      subtitle: "React Native",
      caption: "2 of 12 sections",
      logo: require("../assets/logo-react.png"),
    },
    {
      title: "Props and Icons",
      image: require("../assets/background13.jpg"),
      subtitle: "React Native",
      caption: "3 of 12 sections",
      logo: require("../assets/logo-react.png"),
    },
    {
      title: "Static Data and Loop",
      image: require("../assets/background14.jpg"),
      subtitle: "React Native",
      caption: "4 of 12 sections",
      logo: require("../assets/logo-react.png"),
    },
  ];

  const courses = [
    {
      title: "Prototype in InVision Studio",
      subtitle: "10 sections",
      image: require("../assets/background13.jpg"),
      logo: require("../assets/logo-studio.png"),
      author: "Meng To",
      avatar: require("../assets/avatar.jpg"),
      caption: "Design and interactive prototype",
    },
    {
      title: "React for Designers",
      subtitle: "12 sections",
      image: require("../assets/background11.jpg"),
      logo: require("../assets/logo-react.png"),
      author: "Meng To",
      avatar: require("../assets/avatar.jpg"),
      caption: "Learn to design and code a React site",
    },
    {
      title: "Design and Code with Framer X",
      subtitle: "10 sections",
      image: require("../assets/background14.jpg"),
      logo: require("../assets/logo-framerx.png"),
      author: "Meng To",
      avatar: require("../assets/avatar.jpg"),
      caption: "Create powerful design and code components for your app",
    },
    {
      title: "Design System in Figma",
      subtitle: "10 sections",
      image: require("../assets/background6.jpg"),
      logo: require("../assets/logo-figma.png"),
      author: "Meng To",
      avatar: require("../assets/avatar.jpg"),
      caption:
        "Complete guide to designing a site using a collaborative design tool",
    },
  ];

  // const navigation = useNavigation();

  const action = useSelector((state) => {
    return { action: state.action, name: state.name };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    toggleMenu();
  });

  const openMenu = () => {
    dispatch({ type: "OPEN_MENU" });
  };

  const scale = useRef(new Animated.Value(1)).current;
  const opactiy = useRef(new Animated.Value(1)).current;

  const toggleMenu = () => {
    if (action == "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(opactiy, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (action == "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(opactiy, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{ transform: [{ scale: scale }], opactiy: opactiy }}
      >
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                onPress={openMenu}
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome back,</Title>
              <Name>{action.name}</Name>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}
              horizontal={true}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Continue learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.push("Section", {
                      section: card,
                    });
                  }}
                >
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    subtitle={card.subtitle}
                    caption={card.caption}
                    logo={card.logo}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

export default HomeScreen;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 800;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
