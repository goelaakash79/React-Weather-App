import React from 'react';

// class Form extends React.Component{
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City..."/>
//         <input type="text" name="country" placeholder="Country..."/>
//         <button>Get Weather</button>
//       </form>
//     );
//   }
// };

// Stateless Component
const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <button>Get Weather</button>
  </form>
);

export default Form;
