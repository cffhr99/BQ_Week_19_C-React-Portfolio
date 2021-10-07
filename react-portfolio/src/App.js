import React,{useState} from 'react';
import Header from './component/Header';
import About from './component/About';
import ContactForm from './component/Contact';
import Project from './component/Project';
import Footer from './component/Footer';
import Resume from './component/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected,setResumeSelected] = useState(false);
  console.log(contactSelected,projectSelected,resumeSelected)
  return (
    <div>
      <Header 
      contactSelected={contactSelected}
      setContactSelected={setContactSelected} 
      projectSelected={projectSelected}
      setProjectSelected={setProjectSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      />
      <main>
        {(() => {
          if (!contactSelected && !projectSelected && !resumeSelected){
            return (<About/>)
          } else if(contactSelected &&!projectSelected&&!resumeSelected) {
            return (<ContactForm />)
          } else if(!contactSelected && projectSelected&&!resumeSelected) {
            return (<Project />)
          } else if(!contactSelected && !projectSelected && resumeSelected) {
            return(<Resume />)
          }
        })()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
