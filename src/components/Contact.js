import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

function Contact() {

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: ''
    })

    const submitUserInfo = ()=>{
        console.log(userInfo);
    }


    return (
        <>
            <h1 className="d-flex justify-content-center align-items-center">Contact me</h1>
            <div className="container">
        <Form>
            <Form.Group className="mb-3" controlId="UserName">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={userInfo.username} onChange={(e)=>setUserInfo({...userInfo,username: e.target.value})} type="text" placeholder="Enter UserName" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Password</Form.Label>
                <Form.Control value={userInfo.email} onChange={(e)=>setUserInfo({...userInfo,email: e.target.value})} type="email" placeholder="email" />
            </Form.Group>
            <Button onClick={submitUserInfo} variant="primary">
                Submit
            </Button>
        </Form>
            </div>
        </>
    );
}

export default Contact;