import '../index.css';
import Main from "./Main.jsx";
import Header from './Header.jsx';
import Card from './Card.jsx';





function App() {
  return (
    <div className="App">
    <Header/>
      <Main/>
      <Card/>
      
        
    
        <footer className="footer">
          <p className="footer__copyright">© 2021 Alrededor de los EEUU</p>
        </footer>
 
    </div>
  );
}

export default App;
