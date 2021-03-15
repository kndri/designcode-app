import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const SectionScreen = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="Close"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>Section Screen</Text>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
