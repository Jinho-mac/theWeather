import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCity, setLocalStorage } from '../service/citySlice';
import styled from 'styled-components';
import { memo } from 'react';

const Input = styled.input`
  width: 15rem;
  font-size: 1.3rem;
  padding: 0.2rem;
`;

const Button = styled.button`
  padding: 0.2rem;
  font-size: 1.3rem;
`;

const SearchBar = memo(() => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const dispatch = useDispatch();
  const dispatchCity = (place: string) => dispatch(setCity(place));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const place: string = inputRef.current.value;
    dispatchCity(place);
    setLocalStorage(place);
    inputRef.current.value = "";
  };
  
  return (
    <form onSubmit={onSubmit}>
      <Input type="text" name="city" placeholder="읍/면/동을 입력해주세요." ref={inputRef}/>
      <Button type="submit">검색</Button>
    </form>
  );
});

export default SearchBar;