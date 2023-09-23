// Import Icons
import closeIcon from './assets/close_FILL0_wght400_GRAD0_opsz24.svg';
import forwardIcon from './assets/arrow_forward.svg';
import backwardIcon from './assets/arrow_back.svg';

// Import style sheets
import './App.css';

// Import Compo
import DropDown from './components/DropDown';

//main page

function App() {
  return (
    <>
      <div className="topBar">
        <div className="accountAction" id='actionGroup'>
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
        </div>

        <div className="siteAction">
          <img src={closeIcon} alt="" />
          <img src={closeIcon} alt="" />
          <img src={closeIcon} alt="" />
        </div>


        <div className="pageAction" id='actionGroup'>
          <div className="navGroup" style={{ paddingTop: "5px" }}>
            <img src={backwardIcon} alt="" />
            <img src={forwardIcon} alt="" />
          </div>
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
          <DropDown data={[
            { id: 0, label: "item1" },
            { id: 1, label: "item2" },
          ]} attrName="Steam" />
        </div>
      </div>

    </>
  );
}

export default App;
