import React, { useEffect } from "react";
import { TouchableOpacity, StatusBar, WebView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import Markdown from "react-native-showdown";

const SectionScreen = ({ navigation, route }) => {
  const { section } = route.params;

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);

    return () => {
      StatusBar.setBarStyle("dark-content", true);
    };
  });

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={{ uri: section.image.url }} />
        <Wrapper>
          <Logo source={{ uri: section.logo.url }} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>

        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={25} color="#4775f2" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        <Markdown
          body={section.content}
          pureCSS={htmlStyles}
          scalesPageToFit={false}
          scrollEnabled={false}
        />
      </Content>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

const Content = styled.View`
  height: 100%;
`;

const htmlStyles = `
<style>
  * {
    font-family: -apple-system; 
    margin: 0;
    padding: 0;
    font-size: 17px; 
    font-weight: normal; 
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }

  p {
    margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

</style>
`;
