import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useReducer } from "react";
import Loading from "./components/Loading";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home";
// import CreatePost from "./components/CreatePost";
// import Messages from "./pages/Messages";
// import Friends from "./pages/Friends";
// import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const Messages = lazy(() => import("./pages/Messages"));
const Friends = lazy(() => import("./pages/Friends"));
const Login = lazy(() => import("./pages/Login"));

const INIT_STATE = {
  name: "Feisbrut",
  nav: [
    { link: "/", label: "Home" },
    // { link: "/new-post", label: "Create new post" },
    { link: "/friends", label: "Friends" },
    { link: "/messages", label: "Messages" },
    { link: "/login", label: "Login" }
  ],
  friendsPreview: [],
};

const reducer = (state, action) => {                                 // l"action è l"oggetto che reducer riceve dal dispatch
  switch (action.type) {
    case "change-name":
      return { ...state, name: "Feisbell" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />
      <button onClick={() => dispatch({ type: "change-name" })}>Cambia nome</button>
      {/* <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<CreatePost />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/login" element={<Login />} /> */}
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>} />
        <Route path="/new-post" element={
          <Suspense fallback={<Loading />}>
            <CreatePost />
          </Suspense>} />
        <Route path="/messages" element={
          <Suspense fallback={<Loading />}>
            <Messages />
          </Suspense>} />
        <Route path="/friends" element={
          <Suspense fallback={<Loading />}>
            <Friends />
          </Suspense>} />
        <Route path="/login" element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
