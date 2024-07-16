import './App.css'


function App() {
  let foodItems = []
  // let foodItems = ["a", "b", "c"];


  return (
    <>
    <h1>Healthy foods</h1>
      {/* logical operators */}
      {/* {foodItems.length=== 0 && <h3>Iam still Hungry!</h3>} */}

      {foodItems.length === 0 }
      <ul className="list-group">
        {foodItems.map((item) => (
           <li key={item} className="list-group-item">{item}</li>
        ))}
       
      </ul>
    </>
  );
}

export default App;
