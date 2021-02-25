import React from 'react';
import { memo } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingSpin = memo(() => {
  return (
    <Container>
      <Loader type="TailSpin" color="#ef629f" height={100} width={100} />
    </Container>
  );
});

export default LoadingSpin;

