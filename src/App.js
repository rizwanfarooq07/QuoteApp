import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuote from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route exact path="/quotes">
          <AllQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
