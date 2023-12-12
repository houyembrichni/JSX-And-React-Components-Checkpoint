import React from "react";
import Name from "./component/Name";
import Price from "./component/Price";
import Description from "./component/Description";
import Image from "./component/Image";
import Card from "react-bootstrap/Card";
import "./App.css";
function App() {
  let firstName = "Houyem";
  return (
    <div className="App">
      <Card
        border="dark"
        style={{ width: "30rem", height: "41rem", borderRadius: "10px" }}
      >
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
        {firstName ? (
          <h3
            style={{
              marginTop: "-50px",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            <br /> Hello {firstName} <i class="fa-solid fa-hand"></i>
          </h3>
        ) : (
          <h3>Hello There!</h3>
        )}
      </Card>
    </div>
  );
}
export default App;
