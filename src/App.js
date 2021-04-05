import React from 'react';
import './App.css';
import { List, Layout  } from 'antd';
const { Content } = Layout;

class App extends React.Component {
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
      <div className="App">
        <Layout>
          <Content>
            <List
              header={<div>print("iOS有人要")</div>}
              footer={<div>git commit -m "feature: init"</div>}
              bordered
              dataSource={this.state.items}
              renderItem={item => (
                <List.Item>
                  👋 {item.title} <br/>
                  工作地点：{item.city.join(",")} <br/>
                  职位要求：{item.requirement} <br/>
                  微信联系：{item.wechat}
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App;

