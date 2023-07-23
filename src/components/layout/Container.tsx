import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  bkgColor?: string;
  borderRadius?: string;
  alignItems?: string;
  justifyContent?: string;
}

export default function Container({
  children,
  width,
  height,
  bkgColor,
  borderRadius,
  alignItems,
  justifyContent,
}: ContainerProps) {
  return (
    <Wrapper
      $width={width}
      $height={height}
      $bkgColor={bkgColor}
      $borderRadius={borderRadius}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $width?: string;
  $height?: string;
  $teste?: string;
  $bkgColor?: string;
  $borderRadius?: string;
  $alignItems?: string;
  $justifyContent?: string;
}>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};

  background-color: ${(props) => props.$bkgColor || "none"};

  border-radius: ${(props) => props.$borderRadius || "none"};

  display: flex;
  justify-content: ${(props) => props.$justifyContent || "center"};
  align-items: ${(props) => props.$alignItems || "center"};
  flex-direction: column;
`;
