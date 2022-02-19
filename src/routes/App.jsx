import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import NewPassword from '../pages/NewPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import Login from '../pages/Login';
import Account from '../pages/MyAccount';
import CreatedAccount from '../pages/CreatedAccount';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import PasswordRecovery from '../pages/PasswordRecovery';
import '../styles/principal.css';

const App = () => {
    return (
        <BrowserRouter>
             <Layout>
                <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route element={<NewPassword />} exact path="/NewPassword" />
                        <Route exact path="/SendEmail" element={<SendEmail />} />
                        <Route  path='*' element={<NotFound />} />
                        <Route exact path='/Login' element={<Login />}  />
                        <Route exact path='/MyAccount' element={<Account />} />
                        <Route exact path='/CreatedAccount' element={<CreatedAccount />} />
                        <Route exact path='/Orders' element={<Orders />} />
                        <Route exact path='/Checkout' element={<Checkout />} />
                        <Route exact path='/PasswordRecovery' element={<PasswordRecovery />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
