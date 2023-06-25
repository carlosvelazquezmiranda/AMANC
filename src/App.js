import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1>Título de la WEB</h1>
        </header>
        <Header></Header>
        <section>
          <article>
            <h2>CONTENIDO PRINCIPAL</h2>
            <p>Este es el contenido principal de mi web.</p>
          </article>
        </section>
        <aside>
          <h3>Testimonios</h3>
          <p>Me gusta mucho esta página.</p>
        </aside>
        <footer>
          <h4>Redes sociales</h4>
          <a href="#">Facebook</a>
          <a href="#">Tiwtter</a>
        </footer>
      </body>
    </div>
  );
}

export default App;
