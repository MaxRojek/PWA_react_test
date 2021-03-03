import React, { useState, useEffect, lazy, Suspense } from "react";
import { GlobalStateContextProvider } from "../src/globalContext/globalContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import NavMenuDesktop from "./components/NavMenu/NavMenuDesktop/NavMenuDesktop";
import NavMenuMobile from "./components/NavMenu/NavMenuMobile/NavMenuMobile";
import { ContentWrapper } from "./AppStyle";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const BasketPage = lazy(() => import("./pages/BasketPage/BasketPage"));

function App() {
  const [isMobile, setIsMobile] = useState(false); // change when resize
  const [basketValue, setBasketValue] = useState(0);
  const updateIfMobile = () => {
    const ifMobile = window.innerWidth < 768 ? true : false;

    setIsMobile(ifMobile);
  };
  useEffect(() => {
    updateIfMobile();
    window.addEventListener("resize", updateIfMobile);
  }, [isMobile]);

  return (
    <>
      <ContentWrapper>
        <GlobalStateContextProvider
          value={{
            mobileDispatcher: [isMobile, setIsMobile],
            basketDispatcher: [basketValue, setBasketValue],
          }}
        >
          <BrowserRouter>
            {isMobile ? <></> : <NavMenuDesktop />}
            <Suspense fallback={<LoadingPage />}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/basket" component={BasketPage} />
              </Switch>
            </Suspense>
            {isMobile ? <NavMenuMobile /> : <></>}
          </BrowserRouter>
        </GlobalStateContextProvider>
      </ContentWrapper>
    </>
  );
}

export default App;
