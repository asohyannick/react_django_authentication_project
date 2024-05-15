import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Home, Register, NotFound } from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogOut() {
  localStorage.clear();
  return <Register />;
}
const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className="title">
          The course goal of this web application is to solidify my knowledge
          and understanding on how to create <br /> and consume a Django Restful
          API with User Authentication using Json Web Tokens (JWT),
          <br /> Django rest_framework and consuming the API endpoints with{" "}
          <br /> any UI framework which in my case is react.js.
        </header>
        <div className="sub-title-one">
          Feel free to use any UI layer of your choice such as Vue, Angular to
          consume the API endpoints and see the magic for yourself
        </div>
        <section className="sub-title">
          This project also act as a template guide for any full-stack developer
          who wants to create <br /> Django Restful API&lsquo;s with user
          authentication using Json Web Tokens(JWT) and react.js to <br />{" "}
          consume the API endpoints and present the data to the end-users using
          React.js{" "}
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer-container">
        <p>Django Restful API with user authentication created in the year @{new Date().getFullYear()} by   Asoh Yannick</p>
        <span className="footer-items">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </span>
      </footer>
    </>
  );
};

export default App;
