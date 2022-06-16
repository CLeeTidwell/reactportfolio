import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import Resume from './screens/resume/Resume';
import SendMessage from './screens/sendMessage/SendMessage';
import ContactMe from './screens/contactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Resume />
      <SendMessage />
      <ContactMe />
    </div>
  );
}

export default App;
