import React, { useState, useEffect } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./components/Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };

    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table datas={data} />
    </div>
  );
}

export default App;
