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
    <h3>About Component</h3>
  );
}

module.exports= About;
