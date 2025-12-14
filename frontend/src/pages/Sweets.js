import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Sweets() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");

  const fetchSweets = async () => {
    const res = await fetch(`${API_URL}/sweets`);
    const data = await res.json();
    setSweets(data);
  };

  const searchSweets = async () => {
    const res = await fetch(`${API_URL}/sweets/search?q=${search}`);
    const data = await res.json();
    setSweets(data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h2>🍬 Sweet Shop</h2>

      <input
        placeholder="Search sweets"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchSweets}>Search</button>

      <hr />

      <ul>
        {sweets.map((sweet) => (
          <li key={sweet._id}>
            <b>{sweet.name}</b> | {sweet.category} | ₹{sweet.price} | Qty:{" "}
            {sweet.quantity}

            <button
              disabled={sweet.quantity === 0}
              style={{ marginLeft: "10px" }}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sweets;
