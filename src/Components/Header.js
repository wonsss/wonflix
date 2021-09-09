import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Header = styled.header`
    color: white;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:0 10px;
    background-color:rgba(20,20,20,0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
    z-index:10;

`;
const List = styled.ul`
    display:flex;
    &:hover{
    }
`;

const Item = styled.li`
    width:50px;
    height: 50px;
    text-align: center;
`;

const SLink = styled(Link)`
    height: 50px;   
    display: flex;
    align-items: center; 
    justify-content: center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Header>
        <List>
            <Item><SLink to="/">Movies</SLink></Item>
            <Item><SLink to="/tv">Tv</SLink></Item>
            <Item><SLink to="/search">Search</SLink></Item>
        </List>
    </Header>
);