import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Recipe = ({recipe}) => {
  return (
    <section>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image_url} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </section>
  )
}

export default Recipe
