import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import AnimalProfileForm from './AnimalProfileForm';
import { Link } from 'react-router-dom';

export default props => {

  const { aid } = useParams();
  const animal = props.animals.find(animal => animal.id === parseInt(aid));

  if (animal) {
    return (
      <>
        <h2>{animal.name}</h2>
        <p>{`${animal.entry_at}`}</p>
        <button type="submit" onClick= {Date()}>Close Out Animal </button>
        <Link to="/animals" onClick={() => props.handleDeleteAnimal(aid)}>Delete Animal</Link>
        <table> 
          <thead>
            <tr>
            <th>Date</th>
            <th>Animal Logs</th>
            <th>Delete</th>
            </tr>
          </thead> 
        <section>
          {props.logDetails.map(logDetail => {
            if (logDetail.aid === animal.id) {
              return (
                <tbody>
                  <td>{logDetail.date}</td>
                  <td>{logDetail.description}</td>
                  <td><button onClick={() => props.handleDeleteLog(logDetail.id)}>Delete Log </button></td>
            </tbody>
              );
            }
          })}
        </section>
        </table>
        <form>
        <AnimalProfileForm
          logCreateHandler={props.logCreateHandler}
          animal={animal}/>
        </form>
      </>
    );
  } else {
    return <Redirect to="/animals" />;
  }
}