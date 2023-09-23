import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./DropDown.css";

function DropDown({ data, attrName }) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const toggleDropdownOpen = () => setOpen(true);
  const toggleDropdownClose = () => setOpen(false);
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };
  return (
    <div
      className="dropdown"
      onMouseOver={toggleDropdownOpen}
      onMouseOut={toggleDropdownClose}
    >
      <div className="dropdown-header">
        {attrName}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && "selected"
              }`}
            >
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
