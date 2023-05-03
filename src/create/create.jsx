import React from 'react'
import {Form, Button, Card} from 'react-bootstrap';

const Create = () => {
    return (
        <div className="contentcontainer">
          <h2>Posts:</h2>
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{flex:"1 1 auto"}}>
              <Form className="createform">
                <Form.Group controlId="title">
                    <Form.Label>Label</Form.Label>
                    <Form.Control type="text" id="title" />
                </Form.Group> 
                <Button variant="primary" type="button" >
              Create
            </Button>   
              </Form>
            </div>
            <div style={{flex:"0 0 auto", display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                <Card className="post" style={{flex:"0 0 auto"}}>
                    <Card.Title>Post Title</Card.Title>
                    <Card.Text>Post Body</Card.Text>
                </Card>
            </div>
        </div>
      </div>);
}
export default Create;