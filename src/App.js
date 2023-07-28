import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CreateTask } from "./Pages/CreateTask";
import store from "./store/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/todo/home" element={<Home />} />
          <Route path="/todo/create-task" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
