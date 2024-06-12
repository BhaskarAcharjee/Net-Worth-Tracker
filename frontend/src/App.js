import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./Images/bg.png";
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
import NameModal from "./Components/Profile/NameModal";

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
      switch (active) {
        case 1:
          return <Dashboard />;
        case 2:
          return <Transactions />;
        case 3:
          return <Income />;
        case 4:
          return <Expenses />;
        case 5:
          return <Assets />;
        case 6:
          return <InvestmentTrading />;
        case 7:
          return <Liabilities />;
        case 8:
          return <DebtsLends />;
        case 9:
          return <Analytics />;
        case 10:
          return <NameModal />;
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
