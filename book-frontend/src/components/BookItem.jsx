import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const BookItem = () => {
const BookItem = (props) => {
// props.book: props 객체내부에 book이라는 속성이 있고, book속성안에 책정보(id,title,author)가있음
const {id,title,author} = props.book;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title  >{title}</Card.Title>
        
        <Button variant="primary">{author}</Button>
      </Card.Body>
    </Card>
  )
}

export default BookItem