import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ApiController from '../Api/ApiController';
const AllFiles = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const result = await ApiController.getAllFiles();
        console.log(result)
        setData(result.data)

    }

    useEffect(() => {
        getData()
    }, [])
    return (

        <Container>
            <p className='title'>
                All Files
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((item) => (
                        item.lines.map((line, index) => (
                            < tr key={line.file} >
                                <td>{index + 1}</td>
                                <td>{line.file}</td>
                                <td>{line.text}</td>
                                <td>{line.number}</td>
                                <td>{line.hex}</td>
                            </tr>
                        ))

                    )) : null}
                </tbody>
            </Table>
        </Container >
    )
}
export default AllFiles;