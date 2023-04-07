import styled from 'styled-components';

import LanguageSwitchC from './LanguageSwitch';
import SkipButtonC from './SkipButton';

const sidebardWidth = '200px';

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 3;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.font.xl};
  line-height: ${({ theme }) => theme.lineHeight.xl};
  color: ${({ theme }) => theme.color.font.primary};
  background-color: #fff;
  padding: 0.5em;
  margin: 0;
`;

export const SideBar = styled.aside`
  position: fixed;
  inset: calc(
      ${({ theme }) =>
        `${theme.lineHeight.xl} + ${theme.font.xl} + ${theme.lineHeight.md} + ${theme.font.md}`}
    )
    auto calc(${({ theme }) => `${theme.lineHeight.sm} + 2 * ${theme.font.sm}`}) 0;
  overflow: auto;

  width: ${sidebardWidth};
  background: white;
  border-right: 1px solid ${({ theme }) => theme.color.border.shadow};

  z-index: 2;
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  margin: calc(
      ${({ theme }) =>
        `${theme.lineHeight.xl} + ${theme.font.xl} + ${theme.lineHeight.md} + ${theme.font.md}`}
    )
    0 calc(${({ theme }) => `${theme.lineHeight.sm} + 2 * ${theme.font.sm}`}) ${sidebardWidth};
  z-index: 1;
`;

export const Footer = styled.div`
  position: fixed;
  inset: auto 0 0 0;
  z-index: 2;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.font.sm};
  line-height: ${({ theme }) => theme.lineHeight.sm};
  color: ${({ theme }) => theme.color.font.secondary};
  padding: 1em;
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
