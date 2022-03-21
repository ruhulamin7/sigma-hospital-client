import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Data from './Data';
import './Stockout.css';

const Stockout = () => {
    const [stockOut, setStockOut] = useState([])

    useEffect(() => {
        fetch(`https://shrouded-headland-44423.herokuapp.com/medicine`)
            .then(res => res.json())
            .then(data => {
                const stockout = data.medicine.filter(data => data?.stock === 0)
                setStockOut(stockout)

            })
    }, [])
    return (
        <div>
            <h4 className='Medicine-Center'>Stock Out Medicine</h4>
            <Table striped bordered hover size="sm" className=' mt-5'>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>brand</th>
                        <th>Medicine-Name</th>
                        <th>pawer</th>
                        <th>type</th>
                        <th>stock</th>
                        <th> Sale Price</th>
                        <th>Unit Price</th>

                    </tr>
                </thead>
                <tbody>
                    {stockOut?.map((medicine, index) => (
                        <Data medicine={medicine}
                            key={medicine._id}
                            index={index}

                        ></Data>

                    ))}

                </tbody>
            </Table>


        </div>
    );
};

export default Stockout;