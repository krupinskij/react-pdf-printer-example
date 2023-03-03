import styled, { keyframes } from 'styled-components';

import ButtonComp from 'components/Button';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
`;

export const Icon = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Spinner = styled(Icon)`
  animation: ${rotate} 2s infinite;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Text = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.font.secondary};
  font-size: ${({ theme }) => theme.font.lg};
  text-align: center;
  margin-bottom: 12px;
`;

export const Button = styled(ButtonComp)`
  display: block;
  margin-inline: auto;
`;
