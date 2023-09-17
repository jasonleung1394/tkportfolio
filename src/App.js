import closeIcon from './assets/close_FILL0_wght400_GRAD0_opsz24.svg';
import './App.css';
import DropDown from './components/DropDown';

//main page

function App() {
  return (
    <>
      <div className="topBar">
        <div className="accountAction">
          <DropDown data={[
            { id: 0, label: "New York, US (JFK)" },
            { id: 1, label: "London, UK (LHR)" },
          ]} />
          <p>Steam</p>
          <p>Steam</p>
          <p>Steam</p>
        </div>

        <div className="placeHolder"></div>

        <div className="pageAction">
          <img src={closeIcon} alt="" />
          <img src={closeIcon} alt="" />
          <img src={closeIcon} alt="" />
        </div>
      </div>

    </>
  );
}

export default App;
