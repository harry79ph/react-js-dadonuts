import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterWrapper = styled.div`
  padding: 6px 6vw;
  background-color: #ff00b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 6px 18px;
  }
`;

export const CopyRight = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  padding-left: 10px;
`;