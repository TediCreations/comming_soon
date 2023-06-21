import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("pages/home"));
const Shop = React.lazy(() => import("pages/shop"));
const Contact = React.lazy(() => import("pages/contact"));
const About = React.lazy(() => import("pages/about"));
const Page404 = React.lazy(() => import("pages/404"));
const Test = React.lazy(() => import("pages/test"));
const Loading = React.lazy(() => import("pages/loading"));

class Leniko extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="product"
              element={
                <Suspense fallback={<Loading />}>
                  <Shop />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="test"
              element={
                <Suspense fallback={<Loading />}>
                  <Test />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <Page404 />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Leniko;
