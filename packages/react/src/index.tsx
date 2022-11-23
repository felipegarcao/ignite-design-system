import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: '$md',
  padding: '$4',
  height: '$10'
});

export function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>teste</Button>
    </>
  );
}
