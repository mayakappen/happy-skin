import styled from "styled-components";

export const AddBtn = styled.button`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100 %;
cursor: pointer;
border-radius: 4px;
background: #fec8c1;
padding: 10px 22px;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #fad9c1;
}
 &.active {
    color: #fe9c8f
}
`