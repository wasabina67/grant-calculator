function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>grant-calculator</h1>
      <ul style={{ padding: "0px 0px 0px 20px" }}>
        <li>補助上限</li>
        <ul>
          <li>aaaaaaaaaaaa</li>
        </ul>
        <li>補助率</li>
        <ul>
          <li>aaaaaaaaaaaa</li>
        </ul>
        <li>事業費</li>
        <ul>
          <li>補助上限を適応するために必要な最低額の事業費</li>
        </ul>
      </ul>
      <div>
        <h3 style={{ marginBottom: "5px" }}>
          <label htmlFor="limit">補助上限</label>
        </h3>
        <input
          type="number"
          id="limit"
          style={{ margin: "0px 0px 0px 20px" }}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "5px" }}>
          <label htmlFor="rate">補助率</label>
        </h3>
        <input
          type="number"
          id="rate"
          style={{ margin: "0px 0px 0px 20px" }}
        />
      </div>
      <button
        style={{ margin: "20px 0px 0px 0px" }}
      >
        計算
      </button>
      <div>
        <h3 style={{ marginBottom: "5px" }}>事業費</h3>
        <p style={{ margin: "0px 0px 0px 20px" }}>266.67 万円</p>
      </div>
    </div>
  );
}

export default App;
