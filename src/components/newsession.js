import Button from 'react-bootstrap/Button';
import "./newsession.css"
import Form from 'react-bootstrap/Form';

export default function NewSession (){
    return (
        <Form className="form">
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="choose-image-heading"> Create a New Study Session </Form.Label>
                <Form.Control type= "file" />
            </Form.Group>
            <Form.Control type="text" placeholder= "Name of Session" />
            <Button variant="primary" type="submit" className="submit-button">
                Create my session!
            </Button>
        </Form>
    )
 
}
