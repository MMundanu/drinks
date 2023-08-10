import { useState } from "react";
import "./App.css";
import { AppRouters } from "./routes";
import { MainLayout } from "./layouts";
import { CategoriesProvider } from "./context/CategoriesProvider";

function App() {
  return (
    <>
      <CategoriesProvider>
        <MainLayout>
          <AppRouters />
        </MainLayout>
      </CategoriesProvider>
    </>
  );
}

export default App;
