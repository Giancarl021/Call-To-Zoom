import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
    padding-top: ${Constants.statusBarHeight + 20}px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: #ffac70;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 26px;
`;

export const Label = styled.Text`
    color: #333;
    font-size: 18px;
    text-align: left;
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const Number = styled.TextInput`
    width: 100%;
    background-color: #0002;
    font-size: 20px;
    padding: 10px;
`;

export const RadioContainer = styled.View`
    width: 100%;
    display: flex;
    padding: 20px;
`;