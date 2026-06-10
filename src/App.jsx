import logo from "./assets/logo.svg";
import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main />
      </Container>
    </div>
  );
}

export default App;
