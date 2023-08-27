
# TO-DO :
[ ] implement React Routing DOM 
[ ] Implement Edit option for transactions
[ ] Added User Authentication & Login-Signup
[P] Setup Asset & Libilities frontend & Backend
[P] Create a actual dashboard of net worth (assets-liabilities) & savings (income-expense)
[ ] Create a Invesment (Stock, Crypto, other invesment) tab
[ ] Implement Profile Settings & Customizations
[ ] Deploy in Production Server
[ ] Improve Charts in Analytics tab
[X] Implement Edit option for bank accounts
[X] Expense & Income first 4 items show then show more transactions (clicking that will show others Tranactions)
[X] In Transactions tab all transactions will show (with filter and search)

# Issues :
[ ] Multiple instances of components in the background when navigating between different pages (Login, signup, forgot password) >> use react-router-dom
[X] Sync all calculations
[X] Fix Calculation for Total Value for Individual Cash
[X] Handle Error message (backend error validations not showing)
[X] Cash Inventory Notes negative value & number validations not set

# Income-Expense Json Format :
{
    "title" : "Test Title",
    "amount" : "1000",
    "category" : "Test Category",
    "description" : "Test Description",
    "date" : "10-10-2023"
}

# Expense categories:
Travel & Transport
Recharge & Bill Payments
Education
Entertainment
Food & Drink
Health & Fitness
Investment & Trading
Rent/Debt
Shopping
Home & Utilities
Money Transfer
Uncategorized

# Income categories:
Money Recieved
Investment Profit
Cashback
Gift/Vouchers
Game Money
Freelancing
Uncategorized





# App.js

import React, { useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; // Import BrowserRouter, Route, Switch, and Redirect
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import { useGlobalContext } from "./context/globalContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import Analytics from "./Components/Dashboard/Analytics";
import Transactions from "./Components/Transactions/Transactions";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expense/Expense";
import Profile from "./Components/Profile/Profile";
import Assets from "./Components/Assets/Assets";
import Liabilities from "./Components/Liabilities/Liabilities";
import InvestmentTrading from "./Components/Trading/InvestmentTrading";
import DebtsLends from "./Components/DebtsLends/DebtsLends";
import LoginPage from "./Components/Profile/LoginPage";

function App() {
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const global = useGlobalContext();
  console.log(global);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        passwordCorrect ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        <Orb />
        <MainLayout>
          {passwordCorrect && (
            <Navigation setPasswordCorrect={setPasswordCorrect} />
          )}
          <main>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <PrivateRoute path="/income" component={Income} />
              <PrivateRoute path="/expenses" component={Expenses} />
              <PrivateRoute path="/assets" component={Assets} />
              <PrivateRoute
                path="/investment-trading"
                component={InvestmentTrading}
              />
              <PrivateRoute path="/liabilities" component={Liabilities} />
              <PrivateRoute path="/debts-lends" component={DebtsLends} />
              <PrivateRoute path="/analytics" component={Analytics} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route
                path="/login"
                render={(props) => (
                  <LoginPage
                    {...props}
                    setPasswordCorrect={setPasswordCorrect}
                  />
                )}
              />
              <Redirect to="/" />
            </Switch>
          </main>
        </MainLayout>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
