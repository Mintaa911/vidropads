import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from './App'
import Layout from './components/Layout'
import TermsAndConditions from "./TermAndCondition";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Home/>
    </Layout>,
  },
  {
    path: "/term-and-codition",
    element: <Layout>
    <TermsAndConditions/>
  </Layout>,
  },
  {
    path: "/privacy-policy",
    element:  <Layout>
    <PrivacyPolicy/>
  </Layout>,
  },
  {
    path: "/refund-policy",
    element:  <Layout>
    <RefundPolicy/>
  </Layout>,
  },
  {
    path: "/contact-us",
    element: <Layout>
      <Home/>
    </Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);