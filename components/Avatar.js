import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Avatar = () => {
  const [photo, setPhoto] = useState(
    "https://cl.ly/55da82beb939/download/avatar-default.jpg"
  );

  const action = useSelector((state) => state.action);
  const dispatch = useDispatch();

  const updateName = (name) => {
    dispatch({
      type: "UPDATE_NAME",
      name,
    });
  };

  useEffect(() => {
    const fecthUser = async () => {
      try {
        let response = await fetch("https://randomuser.me/api/");
        let json = await response.json();
        setPhoto(json.results[0].picture.thumbnail);
        updateName(json.results[0].name.first);
      } catch (error) {
        console.log(error);
      }
    };

    fecthUser();
  }, []);

  return <Image source={{ uri: photo }} />;
};

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
`;
