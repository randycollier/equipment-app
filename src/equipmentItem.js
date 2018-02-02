import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const List = styled.ul`
  list-style-type: none;
`
const Attribute = styled.div`
  padding:0.25rem;
`
const AttributeTitle = styled.span`
    display: inline-block;
    width: 100px;
`
 
class EquipmentItem extends React.Component {
   
  constructor(props) {
    super(props);
   
    this.state = {
        equipment: {}
    };
  }
  
  async componentDidMount() {
    const response =  await axios.get(`http://localhost:8080/equipment/id/${this.props.match.params.id}`);
    this.setState(()=>({
      equipment: response.data
    }));
  }

  async componentWillReceiveProps(nextProps) {
    if(this.state.equipment.equipmentID !== nextProps.match.params.id) {
        const response =  await axios.get(`http://localhost:8080/equipment/id/${nextProps.match.params.id}`);
        this.setState(()=>({
            equipment: response.data
        }));
    }
    return;    
  }
  

  render() {
    return (
    <div>  
        <h1>EquipmentID: {this.state.equipment.equipmentID}</h1>
        <Attribute><AttributeTitle>Category:</AttributeTitle>{this.state.equipment.category}</Attribute>
        <Attribute><AttributeTitle>Class:</AttributeTitle>{this.state.equipment.Class}</Attribute>
        <Attribute><AttributeTitle>Name:</AttributeTitle>{this.state.equipment.equipmentName}</Attribute>
        <Attribute><AttributeTitle>Value:</AttributeTitle>{this.state.equipment.equipmentValue}</Attribute>
    </div>)
  }
}

  
export default EquipmentItem;