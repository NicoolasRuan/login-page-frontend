import React from "react";
import styled from "styled-components";

interface WrapperProps {
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  color?: string;
  className?: string;
}

export default function Wrapper({
  children,
  margin,
  padding,
  className,
}: WrapperProps) {
  return (
    <WrapperField className={className} $margin={margin} $padding={padding}>
      {children}
    </WrapperField>
  );
}

export const WrapperField = styled.div<{
  $margin?: string;
  $padding?: string;
}>`
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "auto"};

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
