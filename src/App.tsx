import React from 'react';
import './styles.scss';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import List from "./modules/transaction";
import Detail from "./modules/transaction/detail";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Router>
                    <Route exact path="/">
                        <List/>
                    </Route>
                    <Route path="/:id/detail">
                        <Detail/>
                    </Route>
                </Router>
            </div>
        </div>
    );
}

export default App;
