import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #eecda3, #ef629f);
  padding: 1rem;
  font-size: 1.5rem;
`;

const List = styled.ul`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Item = styled.li`
  padding: 0.5rem;
`

const Header = memo(() => {
  return (
    <Wrap>
      <StyledLink to="/">
        <span><FontAwesomeIcon icon={faCloudSunRain} /> The Weather</span>
      </StyledLink>
      <List>
        <StyledLink to="/weather"><Item>날씨</Item></StyledLink>
        <StyledLink to="/news"><Item>뉴스</Item></StyledLink>
      </List>
    </Wrap>
  );
});

export default Header;