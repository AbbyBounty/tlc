import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header className="sticky-top"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
