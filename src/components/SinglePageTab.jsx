import React, { useState } from "react";
import { ConfigProvider, Avatar, List, Card } from "antd";
// css import
import "./SinglePageTab.css";

const tabList = [
  {
    id: 1,
    title: "Tab1",
  },
  {
    id: 2,
    title: "Tab2",
  },
  {
    id: 3,
    title: "Tab3",
  },
];

const ListData1 = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const ListData2 = [
  {
    title: "Ant Design Title 1 Set 2",
  },
  {
    title: "Ant Design Title 2 Set 2",
  },
  {
    title: "Ant Design Title 3 Set 2",
  },
  {
    title: "Ant Design Title 4 Set 2",
  },
];
const ListData3 = [
  {
    title: "Ant Design Title 1 Set 3",
  },
  {
    title: "Ant Design Title 2 Set 3",
  },
  {
    title: "Ant Design Title 3 Set 3",
  },
  {
    title: "Ant Design Title 4 Set 3",
  },
];

const ListData = [ListData1, ListData2, ListData3];
export default function SinglePageTab() {
  const [tabId, setTabId] = useState(1);

  return (
    <>
      <div className="canvas">
        <div className="tabCanvas">
          <div className="tabsContainer">
            {tabList.map((tab) => (
              <div
                className={`tab ${tabId === tab.id ? "activeTab" : ""}`}
                key={tab.id}
                onClick={() => setTabId(tab.id)}
              >
                <button>{tab.title}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="listCanvas">
          <div className="ListContainer">
            <ConfigProvider
              theme={{
                components: {
                  List: {
                    colorText: "rgb(210, 213, 214)",
                    paddingContentVertical: "30",
                  },
                  Card: {
                    colorBgContainer: "rgb(23, 29, 37)",          
                    colorTextDescription: "rgb(210, 213, 214)",
                    colorTextHeading:"rgb(210, 213, 214)",
                    fontSize: "0.7vw",
                  },
                },
              }}
            >
              <List
                pagination={{ position: "top", align: "start" }}
                dataSource={ListData[tabId - 1]}
                renderItem={(item, index) => (
                  <List.Item>
                    <Card
                      style={{ width: "50vw", display: "flex"}}
                      cover={
                        <img
                          alt="example"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                      }
                      actions={[]}
                      hoverable = {true}
                    >
                      <Card.Meta
                        avatar={
                          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                        }
                        title={item.title}
                        description="This is the description"
                      />
                    </Card>
                  </List.Item>
                )}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
}
