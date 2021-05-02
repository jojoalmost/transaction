import React from 'react';
import './styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import List from "./modules/transaction";
import Detail from "./modules/transaction/detail";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    <List />
                </Route>
                <Route path="/:id/detail">
                    <Detail />
                </Route>
                <Route path="*">
                    {/*<NoMatch />*/}
                </Route>
            </Router>
        </div>
    );
}

export default App;
