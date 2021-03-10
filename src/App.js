import React, { useEffect, useState } from 'react';
import Containter from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Title from './components/Title';
import SearchFrom from './components/SearchFrom';
import axios from 'axios';



function App() {
  const [search, setSeach] = useState('');

  let users;

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20&nat=us&inc=name,email,picture')
      .then((res) => {
        users = JSON.stringify(res);
        console.log(`users: ${users}`);
        console.log(res);
      })
  }, [])


  return (
    <Containter>
      <Row>
        <Col size="md-8">
          <Title />
        </Col>
      </Row>
      <Row>
        <Col size="md-8">
          <SearchFrom />
        </Col>
      </Row>
    </Containter>
  );
}

export default App;
