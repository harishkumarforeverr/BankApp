import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDom, { useHistory } from 'react-router-dom';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp';
import { SnackbarProvider } from 'notistack';
import Home from './routes/home';
import statement from './routes/statement';
import { Deposit, Withdraw } from './routes/forms';
import LoginPage from './Auth/Login/LoginPage';
import {
  LogoutOutlined
} from '@ant-design/icons';
import "./BankApp.scss"
function BankApp() {
  const history=useHistory()
  return (
    <div> 
      <SnackbarProvider autoHideDuration={1000}>
        <BrowserRouter>
          <CssBaseline />
          <Container>
            <AppBar position="static">
             <div className='headerStatic'>
             <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  component={Link}
                  to="/"
                >
                  <AccountBalanceSharpIcon />
                </IconButton>
                <h2>My Bank</h2>
              </Toolbar>
              <div className='logoutContainer'>
              <LogoutOutlined onClick={()=>{
                history.push("/") 
                window.location.reload();
              }}  />
              </div>
             </div>
            </AppBar>
            <Switch>
              <Route path="/statement" component={statement} />
              <Route path="/deposit" component={Deposit} />
              <Route path="/withdraw" component={Withdraw} />
              
              <Route path="/home" component={Home} />
              <Route path="/" component={LoginPage} />
            </Switch>
          </Container>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default BankApp;
