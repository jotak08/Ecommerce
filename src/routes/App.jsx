import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import RecoveryPassword from '../containers/recoveryPassword'
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route element={<Login />} exact path="/login" />
                        <Route exact path="recovery-password" element={<RecoveryPassword />} />
                        <Route  element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
