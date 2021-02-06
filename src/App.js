import React, { useState } from "react";
import "./styles.css";
import maggi from "./maggi.jpg"

export default function App() {
  const [like, setLike] = useState(45)
  const [comm, setComm] = useState(7)
  return (
    <div className="App" style={{   margin : '0px 200px', textAlign : 'left'}}>
      <h2 style={{color : 'red'}}> Crazy Masala Maggi</h2>
      <img src={maggi} style={{ width : '400px', height: '300px', display : 'inline-block', margin : '0px', padding : '0px'}} ></img>
      <div style={{display : 'inline-block', marginLeft : '50px', position : 'relative', bottom : '100px'}}>
        <p>🕑Total Time <span style={{fontWeight : 'bold'}}>30m</span></p>
        <p>⌛ Prep Time <span style={{fontWeight : 'bold'}}>10m</span></p>
        <p>⚡ Calories <span style={{fontWeight : 'bold'}}>130</span></p>
        <button style={{ borderRadius :'7px', display : 'block', fontWeight : 'bold',  border : '0px',border : '1px solid black', backgroundColor : 'white'}} onClick={()=> setLike(like+1)}>👍 Like ({like})</button>
        <button style={{borderRadius : '7px', display : 'block', marginTop : '15px', fontWeight : 'bold', border : '1px solid black', backgroundColor : 'white'}} onClick={() => setComm(comm+1)}>💬 Comment ({comm})</button>
        <button style={{borderRadius : '7px', display : 'block', marginTop : '15px', fontWeight : 'bold', border : '1px solid black', backgroundColor : 'white'}} >⭐ Rate </button>

      </div>
      <h2 style={{color : 'red'}}>Ingredients</h2>
      <ul>
      <li><i>2 Maggi packets</i></li>
      <li><i>500ml Water</i></li>
      <li><i>2 Carrots</i></li>
      <li><i>Onions</i></li>
      <li><i>2 Capsicum</i></li>
      <li><i>Beans</i></li>
      </ul>
      <h2 style={{color : 'red'}}>Directions</h2>
      <ul>
      <li><i>To prepare this mouth-watering snack recipe, put a deep-bottomed pan over medium flame and add water
              in it and bring it to a boil.</i></li>
      <li><i> Meanwhile, take a chopping board and finely chop onion, capsicum, tomato and green chilli on it.</i></li>
      <li><i>Once the water begins to boil, add Maggi masala noodles and peas to it and cook till the noodles and peas
        are soft and tender.</i></li>
      <li><i>Next, in another pan, add butter and let it melt. Then, add chopped onion and saute till it changes
             colour. Now, add garlic paste, chopped capsicum, tomato and green chilli to it and saute well for a
              couple of minutes, till the tomatoes are soft.</i></li>
      <li><i>Next, in the sauteed vegetables, add red chilli powder, turmeric powder, garam masala powder, black
             pepper powder in it and saute for a minute. Now, add the boiled Maggi noodles and peas to this 
             masala and mix well and cook for 1 more minute. It's done.</i></li>
      </ul>

    </div>
  );
}
