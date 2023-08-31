
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


###############

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./Images/bg.png";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; // Import BrowserRouter and Route
import { useGlobalContext } from "./context/globalContext";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import Transactions from "./Pages/Transactions";
import Income from "./Pages/Income";
import Expenses from "./Pages/Expense";
import Profile from "./Pages/Profile";
import Assets from "./Pages/Assets";
import Liabilities from "./Pages/Liabilities";
import InvestmentTrading from "./Pages/InvestmentTrading";
import DebtsLends from "./Pages/DebtsLends";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [active, setActive] = useState(1);
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const global = useGlobalContext();
  console.log(global);

  const handleSignOut = () => {
    setPasswordCorrect(false); // Reset password status to trigger login page
    setActive(1); // Reset active menu item to the dashboard
  };

  const displayData = () => {
    if (passwordCorrect) {
      return (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/income" component={Income} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/assets" component={Assets} />
          <Route path="/investment" component={InvestmentTrading} />
          <Route path="/liabilities" component={Liabilities} />
          <Route path="/debts" component={DebtsLends} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/dashboard" /> {/* Default route */}
        </Switch>
      );
    } else {
      return <LoginPage setPasswordCorrect={setPasswordCorrect} />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          {passwordCorrect && (
            <Navigation
              active={active}
              setActive={setActive}
              onSignOut={handleSignOut}
            /> 
          )}
          <main>{displayData()}</main>
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


################################


import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../Images/avatar.png";
import bhaskar from "../../Images/bhaskar.jpeg";
import { signout } from "../../utils/Icons";
import { menuItems } from "../../utils/menuItems";
import { Link } from "react-router-dom";

function Navigation({ active, setActive, onSignOut }) {
  const handleProfileClick = () => {
    setActive(10); // Set the active menu item to trigger display of Profile (case:10 in App.js)
  };

  const handleSignOut = () => {
    onSignOut(); // Call the onSignOut function from props
  };

  return (
    <NavStyled>
      <div className="user-con" onClick={handleProfileClick}>
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Bhaskar</h2>
          <p>Finance Tracker</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              <Link to={item.link}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li onClick={handleSignOut}>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
      a {
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        font-weight: 500;
        color: rgba(34, 34, 96, 0.6);
        text-decoration: none;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i,
    a {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;



###########################################

# App.js

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./Images/bg.png";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; // Import BrowserRouter and Route
import { useGlobalContext } from "./context/globalContext";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import Transactions from "./Pages/Transactions";
import Income from "./Pages/Income";
import Expenses from "./Pages/Expense";
import Profile from "./Pages/Profile";
import Assets from "./Pages/Assets";
import Liabilities from "./Pages/Liabilities";
import InvestmentTrading from "./Pages/InvestmentTrading";
import DebtsLends from "./Pages/DebtsLends";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [active, setActive] = useState(1);
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const global = useGlobalContext();
  console.log(global);

  const handleSignOut = () => {
    setPasswordCorrect(false); // Reset password status to trigger login page
    setActive(1); // Reset active menu item to the dashboard
  };

  const displayData = () => {
    if (passwordCorrect) {
      switch (window.location.pathname) {
        case "/dashboard":
          return <Dashboard />;
        case "/transactions":
          return <Transactions />;
        case "/incomes":
          return <Income />;
        case "/expenses":
          return <Expenses />;
        case "/assets":
          return <Assets />;
        case "/investment":
          return <InvestmentTrading />;
        case "/liabilities":
          return <Liabilities />;
        case "/debts":
          return <DebtsLends />;
        case "/analytics":
          return <Analytics />;
        case "/profile":
          return <Profile />;
        default:
          return <Dashboard />;
      }
    } else {
      return <LoginPage setPasswordCorrect={setPasswordCorrect} />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          {passwordCorrect && (
            <Navigation
              active={active}
              setActive={setActive}
              onSignOut={handleSignOut}
            /> 
          )}
          <main>{displayData()}</main>
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



# Navigation.js

import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../Images/avatar.png";
import bhaskar from "../../Images/bhaskar.jpeg";
import { signout } from "../../utils/Icons";
import { menuItems } from "../../utils/menuItems";
import { Link } from "react-router-dom";

function Navigation({ active, setActive, onSignOut }) {
  const handleProfileClick = () => {
    setActive(10); // Set the active menu item to trigger display of Profile (case:10 in App.js)
  };

  const handleSignOut = () => {
    onSignOut(); // Call the onSignOut function from props
  };

  return (
    <NavStyled>
      <div className="user-con" onClick={handleProfileClick}>
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Bhaskar</h2>
          <p>Finance Tracker</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              <Link to={item.link}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li onClick={handleSignOut}>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
      a {
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        font-weight: 500;
        color: rgba(34, 34, 96, 0.6);
        text-decoration: none;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i,
    a {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;







