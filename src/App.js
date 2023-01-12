import "./App.css";
import Header from "./components/Header";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data,
      {
        name,
        email,
        number,
      },
    ]);
    setName("");
    setEmail("");
    setNumber("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    data.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            id="outlined-basic"
            label="Number"
            variant="outlined"
          />
          <Button onClick={addData} className="addBtn" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data-val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Number</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data-val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <h4>{element.number}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="outlined"
                  color="error"
                >
                  <DeleteIcon className="delBtn" />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
