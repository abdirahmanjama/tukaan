import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "../src/pages/ProductDetails";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
