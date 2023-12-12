import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ApiController from '../Api/ApiController';
const SearchFile = () => {
    const [data, setData] = useState([])
    const [fileName, setFileName] = useState('')
    const getData = async () => {
        const result = await ApiController.getFile(fileName);
        console.log(result)
        setData(result.data)

    }

    useEffect(() => {
        if (fileName.length > 1) {
            setTimeout(() => {
                getData()
            }, 1500)
        }


    }, [fileName])
    return (

        <Container>
            <div className='header'>
                <p className='title'>
                    Search File
                </p>
                <input placeholder='Search file by name' valur={fileName} onChange={(e) => setFileName(e.target.value)} />


            </div>

            {fileName.length < 1 ? "White the file name for search" : data.length > 0 ? <Table striped bordered hover>
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
                                <td>{line.number.toFixed(2)}</td>
                                <td>{line.hex}</td>
                            </tr>
                        ))

                    )) : null}
                </tbody>
            </Table> : null}
            {data.message ? data.message : null}
        </Container>
    )
}
export default SearchFile;