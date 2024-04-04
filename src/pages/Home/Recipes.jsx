import React, { useContext } from 'react'
import Recipe from './Recipe'
import { GlobalContext } from '../../context';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recipes = () => {
  const {recipeLists,loading,errorMessage} = useContext(GlobalContext);
  return (
    <>
    <Container>
      <Row>
        {recipeLists && recipeLists.length > 0 ? (recipeLists.map((recipe)=>{
        return <Col><Recipe recipe = {recipe}/> </Col>
    })) : 'not lol'}
      </Row>
    </Container>
    
    </>
  )
}

export default Recipes
