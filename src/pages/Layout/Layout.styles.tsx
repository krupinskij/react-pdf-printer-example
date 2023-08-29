import styled from 'styled-components';

import LanguageSwitchC from './LanguageSwitch';
import SkipButtonC from './SkipButton';

const sidebardWidth = '15vw';
const headerHeight = '120px';
const footerHeight = '50px';

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 3;
  height: ${headerHeight};
  display: grid;
  grid-template-rows: 1fr 40px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.font.xl};
  line-height: ${({ theme }) => theme.lineHeight.xl};
  color: ${({ theme }) => theme.color.font.primary};
  background-color: #fff;
  margin: 0;
`;

export const SideBar = styled.aside`
  position: fixed;
  inset: ${headerHeight} auto ${footerHeight} 0;
  overflow: auto;

  width: ${sidebardWidth};
  background: white;
  border-right: 1px solid ${({ theme }) => theme.color.border.shadow};

  z-index: 2;
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  margin: ${headerHeight} 0 ${footerHeight} ${sidebardWidth};
  z-index: 1;
`;

export const Footer = styled.div`
  position: fixed;
  inset: auto 0 0 0;
  z-index: 2;

  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${footerHeight};

  font-size: ${({ theme }) => theme.font.sm};
  line-height: ${({ theme }) => theme.lineHeight.sm};
  color: ${({ theme }) => theme.color.font.secondary};
  background-color: ${({ theme }) => theme.color.background.shadow};
`;

export const SkipButton = styled(SkipButtonC)`
  position: absolute;
  left: 10px;
  top: 5px;

  transform: translateY(-200%);

  :focus {
    transform: translateY(0%);
  }
`;

export const LanguageSwitch = styled(LanguageSwitchC)`
  position: absolute;
  right: 10px;
  top: 5px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.font.secondary} !important;
`;
