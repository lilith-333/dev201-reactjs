import './App.css';
import Info from './Info';

function App() {
  /* const salutation="salut "
  const nom="DEV"
  let isMember=false;

  const langages = ["html","css","js","bs"]; */

  const formateur ={
    nom : "nadir",
    filiere : "dev",
    ville : "mohammedia",
    centre : "cfpm"
  }

  return (
    <div className='container'>
      {/* <div className="style1">{`${salutation} ${nom}`}</div>
      <ul>
        { langages.map( (l,i) => <li className="style2" key={i}>{ l }</li> ) }
      </ul>
      <p>votre remise est : {isMember?0.2:0.1}</p> */}

{/*         <Info test="hi" groupe="dev201"/>

        <Info test="hi" groupe="dev202"/> */}

        {/* <Info nom={formateur.nom} filiere={formateur.filiere} ville={formateur.ville}/> */}
        
        <Info formateur={formateur}/>

    </div>
  );
}

export default App;
