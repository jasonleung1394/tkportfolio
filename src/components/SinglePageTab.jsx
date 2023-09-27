import React, { useState } from "react";
import { Avatar, List } from "antd";
// css import
import "./SinglePageTab.css";
import Item from "antd/es/list/Item";
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
        <div className="ListContainer">
          <List
            pagination={{ position: "top", align: "start" }}
            dataSource={ListData[tabId - 1]}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}
