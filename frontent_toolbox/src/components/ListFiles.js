import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ApiController from '../Api/ApiController';
const ListFiles = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const result = await ApiController.getFilesList();
        console.log(result)
        setData(result.data)

    }

    useEffect(() => {
        getData()
    }, [])
    return (

        <Container>
            <p className='title'>
                List Files
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>File Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((item, index) => (

                        <tr key={item}>
                            <td>{index + 1}</td>
                            <td>{item}</td>
                        </tr>



                    )) : null}
                </tbody>
            </Table>
        </Container>
    )
}
export default ListFiles;