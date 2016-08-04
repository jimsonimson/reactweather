var React = require('react');

var About = (props)=>{
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>This is app is my first react app It is connected to the openweatherapi</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework I used
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - This is the css framework used
        </li>
      </ul>
    </div>
  );
}

module.exports= About;
