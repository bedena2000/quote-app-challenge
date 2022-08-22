import React from 'react';

// Routing
import { Link } from 'react-router-dom';

// Component
import Quote from '../components/Quote';

const MainPage = () => {
  return (
    <Link to="/authorQuotes" className="pt-[31px] px-[15px]">
      <Quote />
    </Link>
  );
};

export default MainPage;
