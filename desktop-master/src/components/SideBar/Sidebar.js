import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Style = {
  mainStyle: {
    width: 256
  },
  iconStyle: {
    fontSize: 30
  }
}

// class Sider extends Component {
//   handleClick = (e) => {
//     console.log('click ', e);
//   }
class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={Style.mainStyle}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        mode="inline"
      >
        <Menu.Item key="1"><Link to="/"><Icon type="user" style={Style.iconStyle}/></Link></Menu.Item>
        <SubMenu key="sub2" title={<Icon type="plus-circle-o" style={Style.iconStyle} />}>
          <Menu.Item key="2"><Link to="/add_text"><Icon type="file-text" /><span>文件导入</span></Link></Menu.Item>
          <Menu.Item key="3"><Link to="/add_URL"><Icon type="link" /><span>链接导入</span></Link></Menu.Item>
          <Menu.Item key="4"><Link to="/add_editor"><Icon type="edit" /><span>手动导入</span></Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="5"><Link to="/search"><Icon type="search" style={Style.iconStyle}/></Link></Menu.Item>
        <SubMenu key="sub4" title={<Icon type="star-o" style={Style.iconStyle}/>}>
          <Menu.Item key="6">计算机科学</Menu.Item>
          <Menu.Item key="7">招聘信息</Menu.Item>
          <Menu.Item key="8">动漫游戏</Menu.Item>
          <SubMenu key="sub1-1" title="历史">
              <Menu.Item key="9">明</Menu.Item>
              <Menu.Item key="10">清</Menu.Item>
          </SubMenu>
          <Menu.Item key="11">其他</Menu.Item>
        </SubMenu>        
      </Menu>
    );
  }
}

export default Sider;