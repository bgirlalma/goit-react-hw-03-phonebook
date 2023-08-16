import styled from 'styled-components';

export const FilterWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const LabelFilter = styled.label`
font-family: Cantarell;
font-weight: normal;
font-size: 16px;

display: flex;
justify-content: center;
`;

export const FilterInput = styled.input`
margin: 10px 20px;
padding: 5px 0 5px 15px;
border-radius: 10px;
border: 2px solid rgb(21 31 216 / 30%);

font-family: Cantarell;
font-weight: normal;
font-size: 16px;

&:hover{
    border: 3px solid rgb(11 236 17 / 30%);
}
`;