import React from "react";
import { Link } from 'react-router-dom';


export default props => (
  <>
    <h1>Animals currently in care: {props.animals.length}</h1>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Entry date</th>
          <th>Exit date</th>
        </tr>
      </thead>
      <tbody>
        {props.animals.map(animal => (
          <tr key={animal.id}>
            <td>{animal.id}</td>
            <td>
              <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
            </td>
            <td>{animal.entryAt}</td>
            <td>{animal.exitAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
