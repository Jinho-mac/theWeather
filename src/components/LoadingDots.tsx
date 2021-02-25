import React, { memo } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from 'styled-components';

const Container = styled.div`
  margin: 10rem;
  display: flex;
  justify-content: center;
`;

const LoadingDots = memo(() => {
  return (
    <Container>
      <Loader type="ThreeDots" color="#ef629f" height={100} width={100} />
    </Container>
  );
});

export default LoadingDots;