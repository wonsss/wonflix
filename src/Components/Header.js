import React from "react";
import {Link, withRouter} from "react-router-dom";
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
    padding: 10px 0px;
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
    width: 60px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => props.current ? "#c0392b" : "transparent"};
    transition: border-bottom .4s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;   
    display: flex;
    align-items: center; 
    justify-content: center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}><SLink to="/">Movies</SLink></Item>
            <Item current={pathname === "/tv"}><SLink to="/tv">Tv</SLink></Item>
            <Item current={pathname === "/search"}><SLink to="/search">Search</SLink></Item>
        </List>
    </Header>
));
