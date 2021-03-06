var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few examples to try out:</p>
    <ol>
      <li>
        <Link to="/?location=Hayward">Hayward, CA</Link>
      </li>
      <li>
        <Link to="/?location=NewYork">New York, NY</Link>
      </li>
    </ol>
    </div>
  )
};

module.exports = Example;
