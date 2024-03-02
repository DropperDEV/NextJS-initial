import React from "react";

function page() {
  return (
    <main>
      <h1>Nossas plantaformas de comunicação</h1>
      <div style={{ display: "flex", gap: "8px" }}>
        <p>Facebook:</p>{" "}
        <p>https://www.facebook.com/user/Loremipsumdolorsitamet</p>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <p>Telegram:</p>{" "}
        <p>https://www.telegram.com/user/Loremipsumdolorsitamet</p>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <p>Email:</p> <p>Loremipsumdolorsitamet@gmail.com</p>
      </div>
    </main>
  );
}

export default page;
