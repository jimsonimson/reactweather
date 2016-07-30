var React = require('react');

//This original about createClass component

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

//This is the syntax to use if the component only renders

var About = (props)=>{
  return (
    <div>
    <h3>About</h3>
    <p>This is app is my first react app It is connected to the openweatherapi</p>
    <p>apparently i cant use punctuation in jsx</p>
    </div>
  );
}

module.exports= About;
