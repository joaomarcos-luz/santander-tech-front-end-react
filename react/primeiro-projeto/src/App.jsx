import React from "react" ;
import "./styles/app.css"
import { Navbar } from "./components/navbar/navbar";
import { Article } from "./components/article/article";
import { Couter } from "./components/counter/counter";

class App extends React.Component {
  render(){
    return (
      <>
      <Navbar/>

      <Couter/>
      {/* <section>
         <Article title="Designig Deslords" provides="Nasa" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse veniam, quia quos accusamus cum mollitia incidunt, deserunt ab quidem dicta in accusantium quas velit at temporibus ut. Sint, distinctio tempora."/>

         <Article title="Vibrant Portraits of 2020" provides="SpacNews" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse veniam, quia quos accusamus cum mollitia incidunt, deserunt ab quidem dicta in accusantium quas velit at temporibus ut. Sint, distinctio tempora."/>

         <Article title="36 Days of Malayala Type" provides="SpacNews" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse veniam, quia quos accusamus cum mollitia incidunt, deserunt ab quidem dicta in accusantium quas velit at temporibus ut. Sint, distinctio tempora."/>

         <Article title="Designew Dathsolord" provides="Desig" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse veniam, quia quos accusamus cum mollitia incidunt, deserunt ab quidem dicta in accusantium quas velit at temporibus ut. Sint, distinctio tempora."/>
      </section> */}
      </>
    )
  }
}

export default App;
