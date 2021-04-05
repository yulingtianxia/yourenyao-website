import React from 'react';
import './App.css';
import { Card, Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          items: data.items
        });
      });
  }

  render() {
    return (
      <>
        {this.state.items.map((item) => {
          return (
            <div key={item.title}>
              <p>{"👋"} {item.title} | {item.city.join(",")} </p>
              <p> - 职位描述: {item.requirement}</p>
              <p> - 联系微信: {item.wechat}</p>
            </div>
          );
        })}
      </>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>print("YouRenYao")</Header>
          <Content>
            <ItemList />
          </Content>
          <Footer>git commit -m "feature: init"</Footer>
        </Layout>
      </div>
    )
  }
}

export default App;

