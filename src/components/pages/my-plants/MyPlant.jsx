/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import RemoveFromCollection from '../../reusable/collection/RemoveFromCollection';


const MyPlant = ({ name, image }) => (
  <div>
    <figure>
      <img src={image} alt={name}/>

      <figcaption>
        <p>{name}</p>
      </figcaption>
    
    </figure>
    {/* <RemoveFromCollection /> */}
  </div>

);

MyPlant.propTypes = {
  name: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
};

export default MyPlant;
