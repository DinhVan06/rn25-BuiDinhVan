import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import FormPOST from "./FormPOST";
import FormUpdate from "./FormUpdate";
import styles from "./style.module.css";
function PractiveRouter() {
  return (
    <div>
      <BrowserRouter>
        {/* Navigation */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/">ListPage</Link>
          </li>
          <li className={styles.link}>
            <Link to="/Form">Form</Link>
          </li>
          <li className={styles.link}>
            <Link to="/DetailPage">DetailPage</Link>
          </li>
          <li className={styles.link}>
            <Link to="/FormUpdate">FormUpdate</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/Form" element={<FormPOST />} />
          <Route path="/DetailPage/:id" element={<DetailPage />} />
          <Route path="/FormUpdate/:id" element={<FormUpdate />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PractiveRouter;
