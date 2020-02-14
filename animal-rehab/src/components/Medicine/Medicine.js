import React from 'react';


export default props => (
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {props.medicine.map(med => (
                <tr key={med.id}>
                    <td>{med.name}</td>
                    <td>{med.type}</td>
                    <td>{med.description}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
);
