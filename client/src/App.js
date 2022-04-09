import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Home></Home>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
