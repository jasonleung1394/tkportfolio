import React from "react";

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

export default function SinglePageTab() {
  return (
    <>
      <div className="canvas">
        <div className="tabsContainer">
          {tabList.map((tab) => (
            <div className="tab" key={tab.id}>
              <button>{tab.title}</button>
            </div>
          ))}
        </div>
        
        <div className="tabContent">
            
        </div>

      </div>
    </>
  );
}
