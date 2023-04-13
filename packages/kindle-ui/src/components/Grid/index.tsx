import * as React from "react";
import styled from "styled-components";

export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  gap?: number;
}
const StyledGrid = styled.div<IGrid>`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: ${({ gap }) => gap}px;

  @media (max-width: 768px) {
    & > * {
      flex-basis: 50%;
    }
  }

  @media (min-width: 768px) {
    & > * {
      flex-basis: calc(100% / ${({ cldLength }) => cldLength});
    }
  }
`;


function Grid({ children, gap = 0 }: IGrid) {
  const cldLength = React.Children.count(children);

  return (
    <StyledGrid cldLength={cldLength} gap={gap}>
      {children}
    </StyledGrid>
  );
}

export default Grid;
