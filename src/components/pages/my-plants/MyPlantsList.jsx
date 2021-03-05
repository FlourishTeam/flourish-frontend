// import React from 'react';
// import PropTypes from 'prop-types';
// import MyPlant from './MyPlant';
// import { Link } from 'react-router-dom';


// const MyPlantList = ({ plants }) => {
//   const listElement = plants.map((plant) => (

//     <Link key={plant.name} to={`/my-plant-detail/${plant.id}`}>
//       <li key={plant.name}>

//         <MyPlant 
//           name={plant.name}
//           image={plant.image}
//         />

//       </li>
//     </Link>
//   ));

//   return <ul data-testid="plants">{listElement}</ul>;
// };

// MyPlantList.propTypes = {
//   plants: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired
//     })
//   )
// };

// export default MyPlantList;
