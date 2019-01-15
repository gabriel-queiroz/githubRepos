import styled from "styled-components";
import PlatForm from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #014668;
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: "#014668"
})``;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${PlatForm.OS === "ios" ? "10px" : "0px"};
  background-color: #fff;
  align-items: center;
  background-color: #046595;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, bottom: 20, left: 50, right: 50 }
})``;

export const ButtonText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const ReposListScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20
  }
})``;

export const RepoListItem = styled.View`
  padding: 20px;
  background-color: #fff;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
