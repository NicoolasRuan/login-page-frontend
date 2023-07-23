import React from "react";
import styled from "styled-components";

interface TitleProps {
  subtitle?: [boolean, string?, string?];
  children?: React.ReactNode;
  size?: string;
  margin?: string;
  padding?: string;
  weight?: string;
  color?: string;
  height?: string;
}

export default function Title({
  subtitle = [false],
  children,
  size,
  margin,
  padding,
  weight,
  color,
  height,
}: TitleProps) {
  return (
    <Wrapper $margin={margin} $padding={padding} $height={height}>
      <H1 $color={color} $size={size} $weight={weight}>
        {children}
      </H1>
      {subtitle[0] && (
        <Paragraph $color={color} $size={subtitle[2]}>
          {subtitle[1] || "this is a paragraph"}
        </Paragraph>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $margin?: string;
  $padding?: string;
  $color?: string;
  $height?: string;
}>`
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "auto"};

  width: 100%;
  height: ${(props) => props.$height || "auto"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1<{ $size?: string; $weight?: string; $color?: string }>`
  font-size: ${(props) => props.$size || "26px"};
  font-weight: ${(props) => props.$weight || "400"};

  color: ${(props) => props.$color || "white"};
`;

const Paragraph = styled.p<{ $size?: string; $color?: string }>`
  font-size: ${(props) => props.$size || "12px"};

  color: ${(props) => props.$color || "white"};
  opacity: 0.5;
`;
