function Sweets() {
  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h2>Sweet Shop</h2>

      <input placeholder="Search sweets" />
      <button>Search</button>

      <hr />

      <ul>
        <li>
          Gulab Jamun | Dessert | ₹50 | Qty: 5
          <button>Buy</button>
        </li>

        <li>
          Rasgulla | Dessert | ₹40 | Qty: 0
          <button disabled>Buy</button>
        </li>
      </ul>
    </div>
  );
}

export default Sweets;
