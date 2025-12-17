import styled from "styled-components/native";

interface DividerProps {
  text?: string;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

const DividerText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-horizontal: ${({ theme }) => theme.spacing.lg}px;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

export function Divider({ text }: DividerProps) {
  if (!text) {
    return <Line />;
  }

  return (
    <Container>
      <Line />
      <DividerText>{text}</DividerText>
      <Line />
    </Container>
  );
}
