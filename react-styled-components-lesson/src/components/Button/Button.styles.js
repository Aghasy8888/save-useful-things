import styled from "styled-components";

export const StyledButton = styled.button`
color: ${(props) => props.variant === 'outline' ? 'green' : 'white' };
background: ${(props) => props.variant === 'outline' ? 'yellow' : 'pink' };;
cursor: pointer;
&:hover {
    color: ${(props) => props.variant === 'outline' ? 'blue' : 'red' };
background: ${(props) => props.variant === 'outline' ? 'green' : 'brown' };;
}
`

export const FansyButton = styled(StyledButton)`
border: none;
background-image: linear-gradient(to right, blue 0%, yellow 100%);
`
//attrs((props) => ({
//     type: 'submit'
// }))` this is also something to use in case we need 
export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit'
})`
&:active {
    color: yellowgreen;
    background-color: purple;
}
`