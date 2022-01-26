import React, { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import 'antd/dist/antd.css'

import { Layout, Menu, Breadcrumb, Button } from 'antd'
import { useQuery } from 'react-apollo'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  HomeOutlined,
  SettingOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  RightCircleOutlined,
  GroupOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

const MySideBar = ({isLogin,user,setIsLogin,setUser}) =>{

  return (
    <Layout style={{ height: '100%', overflow: 'auto', minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* ===================================================================== 
    Menu Section Start (Top)
=========================================================================*/}
          <Menu
            style={{
              backgroundColor: '#2d2f33',
              color: 'white',
              opacity: '.9',
            }}
            className="background"
            mode="horizontal"
            theme="dark"
          >
            {/* defaultSelectedKeys={['1']} */}
            <Menu.Item key="0">
              
            </Menu.Item>
            {!isLogin ? (
              <>
                <Menu.Item key="Login" style={{ marginLeft: 'auto' }}>
                  <Link to="/login">Sign In</Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.SubMenu
                  //   style={{ marginLeft: 'auto' }}
                  key="Info"
                  icon={<InfoCircleOutlined />}
                  title="Info"
                >
                  <Menu.ItemGroup title="How to use">
                    {
                        <Menu.Item key={'111'}>
                            <Link to={'i.path'}>{'111'}</Link>
                        </Menu.Item>
                    }
                  </Menu.ItemGroup>
                </Menu.SubMenu>

                <Menu.Item key="search" style={{ marginLeft: 'auto' }} onClick={() => {}}>
                  <Button
                    size="small"
                    type="primary"
                    shape="circle"
                    ghost
                    className="searchButton"
                    onClick={() => {}}
                  >
                    <SearchOutlined />
                  </Button>
                </Menu.Item>

                <Menu.SubMenu
                  //   style={{ marginLeft: 'auto' }}
                  key="UserInfo"
                  icon={<UserOutlined />}
                  title="User"
                >
                  <Menu.ItemGroup title="User Information">
                    <Menu.Item key="setting:1">
                      <Link to={`${user}/info`}>Account Information</Link>
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                      <Link
                        to="/"
                        onClick={() => {
                          localStorage.clear()
                          setIsLogin(false)
                          setUser('')
                        }}
                      >
                        {' '}
                        Sign Out
                      </Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                </Menu.SubMenu>
              </>
            )}
          </Menu>
          {/* ===================================================================== 
    Menu Section End (Top)
=========================================================================*/}
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              margin: 'auto',
            }}
          >
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MySideBar
