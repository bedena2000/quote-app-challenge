import React, { useEffect } from 'react';

// Redux hooks
import { useDispatch, useSelector } from 'react-redux';

// Api
import axios from 'axios';

// React icons
import { AiOutlineReload } from 'react-icons/ai';

// Actions
import { addQuoteAndText } from '../redux/actions/actions';

const Reload = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const getQuote = () => {
    axios.get('https://api.quotable.io/random').then((data) => {
      const quoteObject = {
        author: data.data.author,
        quote: data.data.content,
        authorSlug: data.data.authorSlug,
      };
      dispatch(addQuoteAndText(quoteObject));
    });
  };

  useEffect(() => {
    axios.get('https://api.quotable.io/random').then((data) => {
      const quoteObject = {
        author: data.data.author,
        quote: data.data.content,
        authorSlug: data.data.authorSlug,
      };
      dispatch(addQuoteAndText(quoteObject));
    });
  }, []);

  return (
    <div
      onClick={getQuote}
      className="flex justify-center items-center gap-[2px] cursor-pointer sm:justify-end pr-[15px]">
      <p className="text-[18px] font-normal text-[#4F4F4F] leading-[21.6px]">random</p>
      <div>
        <AiOutlineReload size={15} />
      </div>
    </div>
  );
};

export default Reload;
