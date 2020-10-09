import React from "react";
import {Col, Row, Tabs} from "antd";
import Widget from "components/Widget";
// import {aboutList} from '../../../routes/socialApps/Profile/data'
import AboutItem from "./AboutItem";


const TabPane = Tabs.TabPane;

const About = () => {

    return (
      <Widget title="About" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Overview" key="1">
            <div className="gx-mb-2">
              <Row>
              <Col key={1} xl={8} lg={12} md={12} sm={12} xs={24}>
                <AboutItem data={{title: "asd", icon: "1", desc: "asd", userList: "as"}}/>  
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Work" key="2">
            <div className="gx-mb-2">
              <Row>
                <Col key={2} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={{title: "asd", icon: "1", desc: "asd", userList: "as"}}/>
                </Col>
              </Row>
            </div>
          </TabPane>
          
        </Tabs>
      </Widget>
    );
}


export default About;
