import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={Home} exact />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
