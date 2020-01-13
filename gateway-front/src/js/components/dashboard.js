import * as React from 'react'
import '../../less/dashboard.less'
import history from '../utils/history'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { Menu, Icon, Layout, Divider } from 'antd'
import Platform from './platform/platform'

const { SubMenu } = Menu
const MenuItem = Menu.Item
const { Header, Content, Sider } = Layout

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    const { lastOpenKeys } = this.state

    this.setState({
      collapsed,
      openKeys: collapsed ? [] : lastOpenKeys,
    })
  }

  handleClick = e => {
    history.push(e.key)
}

  render () {
    return (
      <div className="home">
        <Router history={history}>
          <Layout className="main-layout">
            <Header className="main-header">
              <div className="logo">AwesomeGateway</div>
              <div className="header-right">
                <Divider type="vertical"/>
                <div className="logout" onClick={this.logout}>
                  退出
                </div>
              </div>
            </Header>
            <Layout>
              <Sider
                className="main-sider"
                theme='light'
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                breakpoint="lg"
              >
                <Menu
                  onClick={this.handleClick}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                >
                  {/*下拉菜单*/}
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                      <Icon type="fund"/>
                      <span>第三方平台</span>
                    </span>
                    }
                  >
                    <MenuItem key="/dashboard/nacos">Nacos</MenuItem>
                    <MenuItem key="/dashboard/skyWalking">SkyWalking</MenuItem>
                    <MenuItem key="/dashboard/sentinel">Sentinel</MenuItem>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="right-sider">
                <Content className="main-content">

                  {/* 路由*/}
                  <Switch>
                    <Route exact path="/dashboard/nacos" component={Platform} />
                    <Route exact path="/dashboard/skyWalking" component={Platform} />
                    <Route exact path="/dashboard/sentinel" component={Platform} />
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </div>
    )
  }
}
const TODOPage = () => {
  return <div className="todo">功能正在开发中</div>;
};
export default Dashboard