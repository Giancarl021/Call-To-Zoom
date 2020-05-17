import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 0;
    align-items: center;
    flex-direction: row;
    background-color: ${({selected}) => selected ? '#0002' : '#0000'};
    justify-content: flex-start;
    margin-bottom: 5px;
`;

export const Label = styled.Text`
    color: #333;
    font-size: 20px;
    text-align: center;
    width: 100%;
`;