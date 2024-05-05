import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import { Layout , typography , Space, Typography} from 'antd';
import {Navbar , Homepage, Cryptocurrencies , CryptoDetails , News , Exchanges} from './components'
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar/>
        <h1>Hello world</h1>

      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<Homepage/>}>
                
              </Route>
              <Route path='/exchanges' element={<Exchanges/>}>
                
              </Route>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}>
                
              </Route>
              <Route path='/crypto/:coinID' element={<CryptoDetails/>}>
                
              </Route>
              <Route path='/news' element={<News/>}>
                
              </Route>
            </Routes>
          </div>
        </Layout>

     
      <div className="footer">
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
 </div>
      </div>
    </div>
  )
}

export default App
