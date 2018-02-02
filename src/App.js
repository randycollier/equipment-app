import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EquipmentList from './equipmentList';
import EquipmentItem from './equipmentItem';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';



const Container = styled.section`
  width:100%;
  display: flex;
  height: 100vh;
`
const NavAside = styled.div`
  overflow-y: auto;
  padding:10px;
  flex: 0 0 200px;
  flex-sring:1;
  background:#dedede;

`
const Content = styled.div`
  overflow-y: auto;
  padding:10px;
  flex: 1 0 70%;
  background:#f3f3f3;
`
const home = ()=>  {
  return (<h1>Empty</h1>);
}
class App extends Component {
 



  render() {
    return (
      <div className="App">
        <Container>
            <NavAside>
            <EquipmentList/>
              </NavAside>
         
           
          <Content>
            <Switch>
              <Route exact path='/' omponent={home}/>
              <Route exact path='/:id' component={EquipmentItem}/>
            </Switch>
          </Content>
          </Container>
        
      </div>
    );
  }
}

export default App;
