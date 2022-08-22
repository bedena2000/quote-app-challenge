import React, { useState, useEffect } from 'react';

// Routing
import { Link } from 'react-router-dom';

// Components
import QuoteText from '../components/QuoteText';

// Icons
import { BiArrowBack } from 'react-icons/bi';

// Actions
import { addQuotesByAuthor } from '../redux/actions/actions';

// Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Quote
import QuoteText2 from '../components/QuoteText2';

export default function AuthorQuotes() {
  const [listOfAuthorsArray, setListOfAuthorsArray] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    axios
      .get('https://api.quotable.io/quotes', {
        params: {
          author: data.authorSlug,
        },
      })
      .then((data) => setListOfAuthorsArray(data.data.results));
  }, []);

  return (
    <div className="pt-[20px] px-[15px]">
      <div className="max-w-[915px] mx-auto mb-[50px] flex items-center justify-between">
        <div className="text-[24px] text-[#333333] leading-[42.26px] font-bold">{data.author}</div>
        <Link to="/" className="bg-white hover:bg-slate-400 transition ease-in delay-150 p-[10px]">
          <BiArrowBack />
        </Link>
      </div>
      <div className="flex flex-col gap-[30px]">
        {listOfAuthorsArray.map((item) => (
          <QuoteText2 key={item._id} quote={item.content} />
        ))}
      </div>
    </div>
  );
}
