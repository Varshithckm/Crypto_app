import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import{ Link} from ' react-router-dom'
import {HomeOutlined, MoneyCollectedOutlined, BulbOutlined, FindOutlined, MenuOutlined} from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='nav-container '>
      <div className='logo-container'>
        <Avatar/>
        <Typography.Title level={2} className='Logo'>
            <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
    </div>
  )
}

export default Navbar
