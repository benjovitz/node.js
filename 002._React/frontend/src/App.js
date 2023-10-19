import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Member } from './components/Member.jsx';

function App() {

  const [members, setMembers] = useState([])

  useEffect(() => {
    async function getMembers() {
        const response = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/members.json");
        const data = await response.json();
        setMembers(data); // save data in the 'members' state
    }
    // Call the 'getMembers' function only once when the component mounts (empty dependency array)
    getMembers();
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {members.map(member => <Member member={member}/>)}
      </header>
    </div>
  );
}

export default App;
