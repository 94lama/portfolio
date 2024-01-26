import './App.css';
import Navigator from './components/Navigator';
import About from './components/About';
import CV from './components/CV';
//import WebPages from './components/Web';
import Stars from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navigator />
      <About />
      <div style={{ "marginTop": "100vh", 'width': '100%', 'backgroundColor': '#011f4b'}}>
        <h1>Experiences</h1>
        <CV />
      </div>
      {/* <WebPages /> */}
      <Stars />
      <Footer />
    </main>
  )
}

export default App;