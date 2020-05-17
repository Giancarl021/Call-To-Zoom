import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 0;
    align-items: center;
    flex-direction: row;
    background-color: #0008;
    opacity: ${({disabled}) => disabled ? .2 : 1};
    justify-content: flex-start;
    margin: 10px 0;
`;

export const Label = styled.Text`
    text-transform: uppercase;
    font-weight: bold;
    color: #eef;
    font-size: 20px;
    text-align: center;
    width: 100%;
`;