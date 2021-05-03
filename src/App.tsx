import React from 'react';
import './styles.scss';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import List from "./modules/transaction";
import Detail from "./modules/transaction/detail";
import TransactionsProvider from "./modules/transaction/utils/TransactionContext";

function App() {
    return (
        <div className="App">
            <div className="container">
                <TransactionsProvider>
                    <Router>
                        <Route exact path="/">
                            <List/>
                        </Route>
                        <Route path="/:id/detail">
                            <Detail/>
                        </Route>
                    </Router>
                </TransactionsProvider>
            </div>
        </div>
    );
}

export default App;
