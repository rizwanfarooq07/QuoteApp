import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Khaled Hosseini', text: 'For you, a thousand times over'},
  {id: 'q2', author: 'Sir Alex Ferguson', text: 'Football, Bloody hell !'}
]

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuote;
