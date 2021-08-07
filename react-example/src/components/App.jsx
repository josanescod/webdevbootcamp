import React from "react";
import Heading from '../components/Heading';
import List from '../components/List';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import ListPi from '../components/ListPi';
import Calc from '../components/Calc';


function App(){
    return (<div>
                 <Heading />
                 <List />
                 <Greeting />
                 <ListPi />
                 <Calc />
                 <Footer />
            </div>
            );
           
}

export default App;