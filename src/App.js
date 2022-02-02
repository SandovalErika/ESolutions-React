import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import Timer from "./component/Timer";
import Component1 from "./component/Component1";
import Ref from "./component/Ref";
import Main from "./component/Main";
import User from "./component/User";
import Message from "./component/Message";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="wrapper-app">
      {true && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<User />} />
              <Route path="messages" element={<Message />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
      {false && <Timer />}
      {false && <Component1 />}
      {false && <Ref />}
      {false && <Main />}

      <div>
        {false && (
          <Button variant="outlined" color="primary">
            Aceptar
          </Button>
        )}
      </div>
      <div>
        {false && (
          <TextField
            placeholder="Caja de texto básica"
            label="Caja de texto básica"
          />
        )}

        {false && (
          <TextField
            placeholder="Caja de texto básica"
            label="Caja de texto básica"
          />
        )}
      </div>
    </div>
  );
}

export default App;
