import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Sweets() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");

  // add sweet states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");


  // fetch all sweets
  const fetchSweets = async () => {
    const res = await fetch(`${API_URL}/sweets`);
    const data = await res.json();
    setSweets(data);
  };

  // search sweets
  const searchSweets = async () => {
    const res = await fetch(`${API_URL}/sweets/search?q=${search}`);
    const data = await res.json();
    setSweets(data);
  };

  // add sweet
  const addSweet = async () => {
    if (!name || !category || !price || !quantity) {
      alert("All fields required");
      return;
    }

    await fetch(`${API_URL}/sweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        category,
        price: Number(price),
        quantity: Number(quantity)
      })
    });

    // reset form
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");

    fetchSweets(); // refresh list
  };

  // buy sweet
  const buySweet = async (id) => {
    await fetch(`${API_URL}/sweets/${id}/purchase`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: 1 })
    });

    fetchSweets();
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h2>Sweet Shop</h2>

      {/* ADD SWEET */}
      <h3>Add Sweet</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addSweet}>Add</button>

      <hr />

      {/* SEARCH */}
      <input
        placeholder="Search sweets"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchSweets}>Search</button>

      <hr />

      {/* SWEET LIST */}
      <ul>
        {sweets.map((sweet) => (
          <li key={sweet._id}>
            <b>{sweet.name}</b> | {sweet.category} | ₹{sweet.price} | Qty:{" "}
            {sweet.quantity}
            <button
              disabled={sweet.quantity === 0}
              onClick={() => buySweet(sweet._id)}
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
