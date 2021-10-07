import React,{useState} from 'react';
import Header from './component/Header';
import About from './component/About';
import ContactForm from './component/Contact';
import Project from './component/Project';
import Footer from './component/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  return (
    <div>
      <Header 
      contactSelected={contactSelected}
      setContactSelected={setContactSelected} 
      projectSelected={projectSelected}
      setProjectSelected={setProjectSelected}
      />
      <main>
        {(() => {
          if (!contactSelected & !projectSelected){
            return (<About/>)
          } else if(contactSelected &!projectSelected) {
            return (<ContactForm />)
          } else if(!contactSelected & projectSelected) {
            return (<Project />)
          }
        })()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
