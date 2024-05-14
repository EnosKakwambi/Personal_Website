// import scss/css pages to appy the styles to the components
import './scss/App.scss';

// Do not forget to install this pakage, you may get an error at first.
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import React from 'react';

// Import the pages that we want to render
import Home from './Home';
import About from './About';

// Defining a default route for our website this is the first page that will be rendered
function DefaultRoute() {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate('/home');
  }, [navigate]);
}

// Our js files return components that are rendered in index.html
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;