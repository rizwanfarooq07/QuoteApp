import { useHistory } from "react-router";
import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const onAddQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
