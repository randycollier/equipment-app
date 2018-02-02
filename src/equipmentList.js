import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';

const List = styled.ul`
  list-style-type: none;
  padding:0 0.25rem;
`
const ListItem = styled.li`
  padding: 0.25rem 0;
  margin: 1rem .25rem 1rem;
`
const StyledLink = styled(Link)`
  border-radius: 3px;
  padding: 0.25em .25em;
  margin: 0 .25em;
  background: transparent;
  color: #1da4dc;
  border: 2px solid #1da4dc;

  &.active {
    color: palevioletred;
  }

`


class EquipmentList extends React.Component {
  state = {
    equipmentList: [],
  };  

  async componentDidMount() {
    const response = await axios.get('http://localhost:8080/equipment/list');
    this.setState(()=>({
      equipmentList: response.data
    }));
  }

  render() {
    return <List>
     {this.state.equipmentList.map(item=>{
       return (
        <ListItem key={item.equipmentID}>
          <StyledLink to={item.equipmentID} >{item.equipmentID} {item.category}</StyledLink>
        </ListItem>);
     })}
    </List>;
  }
}

export default EquipmentList;