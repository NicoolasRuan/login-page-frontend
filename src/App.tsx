import "./App.css";
import Title from "./components/Title";
import Form from "./components/form/Form";
//import NovoForm from "./components/form/NovoForm";
import Container from "./components/layout/Container";

function App() {
  return (
    <Container bkgColor="#151414">
      <Container
        justifyContent="start"
        bkgColor="#2a2c2d"
        height="70%"
        width="30%"
        borderRadius="5px"
      >
        <Title
          size="3vw"
          padding="15px 0px 10px 0px"
          subtitle={[true, "venha conhecer a nossa plataforma!", "1vw"]}
          weight="900"
          height="30%"
          color="#dbdbdb"
        >
          Cadastre-se
        </Title>

        <Form />
      </Container>
    </Container>
  );
}

export default App;
