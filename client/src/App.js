import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
