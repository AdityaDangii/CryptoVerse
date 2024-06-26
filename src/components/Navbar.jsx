import React from 'react'
import { Button, Menu , Typography , Avatar } from 'antd'
import { HomeOutlined , MoneyCollectOutlined, BulbOutlined , FunctionOutlined , MenuFoldOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

function navbar() {
  return (
    <div className='nav-container'>
    <div className="logo-container">
        <Avatar src={icon} size={'large'}/>
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FunctionOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/Exchanegs">Exchnages</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  
</div>
  )
}

export default navbar;
