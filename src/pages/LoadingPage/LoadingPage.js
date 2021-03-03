import React from "react";
import { LoadingWrapper } from "./LoadingPageStyle";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const LoadingPage = () => {
  return (
    <LoadingWrapper>
      <LoadingSpinner />
      <h2>Loading...</h2>
    </LoadingWrapper>
  );
};

export default LoadingPage;
