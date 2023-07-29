import "./global.css";
import Title from "./components/Title";
import Form from "./components/form/Form";
//import NovoForm from "./components/form/NovoForm";
import Container from "./components/layout/Container";

function App() {
  return (
    <Container bkgColor="#0a0a0a">
      <Container
        justifyContent="start"
        bkgColor="#18181b"
        height="70%"
        width="30%"
        borderRadius="5px"
      >
        <Title
          size="3vw"
          padding="15px 0px 10px 0px"
          subtitle={[true, "venha conhecer a nossa plataforma!", "1vw"]}
          weight="900"
          height="25%"
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
