import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import AnimalProfileForm from './AnimalProfileForm';

export default props => {

    const { aid } = useParams();
    const animal = props.animals.find(animal => animal.id === parseInt(aid));

    if (animal) {
        return (
          <>
          <h2>{animal.name}</h2>
          <p>{`${animal.entry_at} - ${animal.exit_at}`}</p>   
          <h3>Data Log Details</h3>
          <p>{animal.logDetails}</p>
          <AnimalProfileForm logCreateHandler = {props.logCreateHandler}/>
    
          </>
        );
      } else {
        return <Redirect to="/animals" />;
      }
}

