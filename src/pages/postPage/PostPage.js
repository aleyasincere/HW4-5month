import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/PostSlicetwo";

function MainPage() {

    const[kefteme, setKefteme] = React.useState({
        name: '' ,
        username: '',
        email: '',
        password: ''

    })


    const dispatch = useDispatch()
    const zagruzka = useSelector(state => state.requestReducer.zagruzka)

   const changeKefteme = (event) => {
        event.preventDefault()
       setKefteme({
           ...kefteme,
       [
           event.target.name]: event.target.value,


       })
       console.log(kefteme)
   }

   const addKefteme = (event) => {
        event.preventDefault()
       const nameKefteme = /a-z/i
       const emailKefteme = /a-z/i
       const usernameKefteme = /a-z/i

       if (kefteme.name.trim() === '' || kefteme.email.trim() === '' || kefteme.username.trim() === '') {
           alert('Zapolnite vse polya')
       } else if (nameKefteme.test(kefteme.name) || emailKefteme.test(kefteme.email) || usernameKefteme.test(kefteme.username))  {
           alert(' Pravilno zapolnite vse polya')
       } else {
           dispatch(getPosts(kefteme))
       }
   }
    if (zagruzka) return <div> LOADING....</div>

    return (
        <Container>
            <Form onChange={changeKefteme}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className='mb-3' controlId="name">
                            <Form.Control
                                type="text"
                                placeholder='name'
                                name='name'
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className='mb-3' controlId="username">
                            <Form.Control
                                type="text"
                                placeholder='username'
                                name='username'
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className='mb-3' controlId="email">
                            <Form.Control
                                type="text"
                                placeholder='email'
                                name='email'
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type='submit' variant='success' onClick={addKefteme} className='w-100'>
                            register user
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default MainPage;