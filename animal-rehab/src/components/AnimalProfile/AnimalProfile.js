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
        <table>   
          <thead>
            <tr>
              <th>Animal</th>
              <th>Entry date</th>
              <th>Delete Animal</th>
            </tr>
          </thead>
          <tbody> 
            <tr>
              <td>{animal.name}</td>
              <td>{`${animal.entry_at.slice(0,10)}`}</td>
              <td><button type="submit"  
              to="/animals" onClick={() => props.handleDeleteAnimal(aid)}>Delete Animal</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table> 
          <thead>
            <tr>
            <th>Date</th>
            <th>Animal Logs</th>
            <th>Delete</th>
            </tr>
          </thead> 
       <tbody>
          {props.logDetails.map(logDetail => {
            if (logDetail.aid === animal.id) {
              return (
                  <tr>
                  <td>{logDetail.date}</td>
                  <td>{logDetail.description}</td>
                  <td><button onClick={() => props.handleDeleteLog(logDetail.id)}>Delete Log </button></td>
                  </tr>
        
              );
            }
          })}
              </tbody>
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