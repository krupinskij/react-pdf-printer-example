import styled from 'styled-components';

export const LangWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const LanguageButton = styled.button<{ selected: boolean }>`
  padding: 0;
  border: 1px solid ${({ selected, theme }) => (selected ? 'black' : theme.color.border.shadow)};
  border-radius: 2px;
  overflow: hidden;
`;

export const LanguageImage = styled.img`
  display: block;
`;
