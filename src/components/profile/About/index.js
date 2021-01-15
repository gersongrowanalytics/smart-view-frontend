import React from "react";
import {Col, Row, Tabs} from "antd";
import Widget from "components/Widget";
import AboutItem from "./AboutItem";
import {Avatar} from "antd";

const TabPane = Tabs.TabPane;

const About = () => {

  const userImageList = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
  
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: 'Mila Alba',
      rating: '5.0',
      deals: '27 Deals'
    },
  ]
  
  const aboutList = [
    {
      id: 1,
      title: 'Works at',
      icon: 'company',
      userList: '',
      desc: ['G-axon Tech Pvt. Ltd.']
    },
    {
      id: 2,
      title: 'Birthday',
      icon: 'birthday-new',
      userList: '',
      desc: ['Oct 25, 1984']
    },
    {
      id: 3,
      title: 'Went to',
      icon: 'graduation',
      userList: '',
      desc: ['Oxford University']
    },
    {
      id: 4,
      title: 'Lives in London',
      icon: 'home',
      userList: '',
      desc: ['From Switzerland']
    },
    {
      id: 5,
      title: '4 Family Members',
      icon: 'family',
      userList: [<ul className="gx-list-inline gx-mb-0" key={1}>
        {userImageList.map((user, index) =>
          <li className="gx-mb-2" key={index}>
            <Avatar className="gx-size-30" src={user.image}/>
          </li>
        )
        }
      </ul>],
      desc: ''
    },
  ]

    return (
      <Widget title="About" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Overview" key="1">
            <div className="gx-mb-2">
              <Row>
                {aboutList.map((about, index) =>
                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about}/>
                  </Col>
                )}
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Work" key="2">
            <div className="gx-mb-2">
              <Row>{aboutList.map((about, index) =>
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about}/>
                </Col>
              )}
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Education" key="3">
            <div className="gx-mb-2">
              <Row>
                {aboutList.map((about, index) =>

                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about}/>
                  </Col>
                )}
              </Row>
            </div>
          </TabPane>
        </Tabs>
      </Widget>
    );
}


export default About;
