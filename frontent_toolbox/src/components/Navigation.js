import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Navigation = ({ view, setView }) => {
    return (
        <Container className='NavigationContainer'>
            <Button onClick={() => setView(0)}>
                Lista Files
            </Button>
            <Button onClick={() => setView(1)}>
                All Files
            </Button>
            <Button onClick={() => setView(2)}>
                Search File
            </Button>
        </Container>
    )
}
export default Navigation