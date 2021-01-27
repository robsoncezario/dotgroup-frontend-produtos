import React from 'react';
import { Collapse } from 'antd';
import { Container, ExpandIcon, Content, Row, Description, Card } from './styles';

const columns = [
  {
    title: 'Lorem ipsum',
    imageSrc: process.env.PUBLIC_URL + "/assets/media/background/image.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },

  {
    title: 'Lorem ipsum',
    imageSrc: process.env.PUBLIC_URL + "/assets/media/background/image.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },

  {
    title: 'Lorem ipsum',
    imageSrc: process.env.PUBLIC_URL + "/assets/media/background/image.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },

  {
    title: 'Lorem ipsum',
    imageSrc: process.env.PUBLIC_URL + "/assets/media/background/image.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  }
]

const {Panel} = Collapse;
const AccordionsContainer = () => {
  return (
    <Container>
      <Collapse
          bordered={false}
          defaultActiveKey={['0']}
          accordion
          expandIcon={({ isActive }) => <ExpandIcon src={process.env.PUBLIC_URL + (isActive ? "/assets/media/arrows/expand-up.svg" : "/assets/media/arrows/expand-down.svg")}/>}
          className={"site-collapse-custom-collapse"}
        >
          {columns.map((c, index: number) => (
            <Panel header={c.title} key={index} className="site-collapse-custom-panel">
              <Content>
                <Row>
                  <Card src={c.imageSrc} />
                  <Description>{c.description}</Description>
                </Row>
              </Content>
            </Panel>
          ))}
      </Collapse>,
    </Container>
  )
}

export default AccordionsContainer;