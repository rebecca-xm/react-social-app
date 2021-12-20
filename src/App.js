import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreatePost from "./components/CreatePost";
import Home from "./pages/Home";

// const CheckActive = (link) => {
//   const resolved = useResolvedPath(link);
//   const match = useMatch({path: resolved.pathname, end: true});

//   return match ? styles.active : "";
// };

const INIT_STATE = {
  name: 'Feisbrut',
  nav: [
    { link: '/home', label: 'Home' },
    { link: '/new-post', label: 'Create new post' },
    { link: '/friends', label: 'Friends' },
    { link: '/messages', label: 'Messages' }
  ],
  friendsPreview: [],
};

const reducer = (state, action) => {                                 // l'action è l'oggetto che reducer riceve dal dispatch
  switch(action.type) {
    case "change-name":
      return {...state, name: 'Feisbell'};
    default:
      return state;
  }
};

//* SINTASSI ALTERNATIVA ONCLICK
// const handleClick = () => dispatch({ type: "name-change"});
// <button onClick={handleClick}>Cambia nome</button>

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />
      {/* <button onClick={() => dispatch({ type: "change-name" })}>Cambia nome</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<CreatePost />} />
        <Route path="/messages" element={<h3>Messages</h3>} />
        <Route path="/friends" element={<h3>Friends</h3>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
