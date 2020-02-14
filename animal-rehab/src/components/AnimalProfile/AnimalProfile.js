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
        <button type="submit" onClick= {Date.now()}>Close Out Animal </button>
        <Link to="/animals" onClick={() => props.handleDeleteAnimal(aid)}>Delete Animal</Link>
        
        <h3>Data Log Details</h3>
        <AnimalProfileForm
          logCreateHandler={props.logCreateHandler}
          animal={animal}
        />
        <section>
          {props.logDetails.map(logDetail => {
            if (logDetail.aid === animal.id) {
              return (
                <section>
                  <p>{logDetail.date}</p>
                  <p>{logDetail.description}</p>
                  <button onClick={() => props.handleDeleteLog(logDetail.id)}>Delete Log </button>
                </section>
              );
            }
          })}
        </section>
      </>
    );
  } else {
    return <Redirect to="/animals" />;
  }
}