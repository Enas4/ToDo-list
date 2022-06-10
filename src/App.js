import { useState } from "react";
import FormInput from "./components/InputForm/InputForm";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [arrayItems, setArrayItems] = useState([]);

  const handleChange = (e) => {
    setInputItem(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setArrayItems([...arrayItems, inputItem]);
    setInputItem("");
  };

  const deleteItem = (id) => {
    setArrayItems((val) => {
      return val.filter((arrEle, idx) => {
        return idx !== id;
      });
    });
  };
  return (
    <>
      <h1>ToDo-List</h1>
      <input
        type="text"
        placeholder="Enter Item"
        onChange={handleChange}
        value={inputItem}
      />
      <button onClick={onSubmit}>submit</button>
      <ul>
        {arrayItems.map((val, i) => {
          return (
            <FormInput key={i} id={i} deleteSelect={deleteItem} text={val} />
          );
        })}
      </ul>
    </>
  );
}

export default App;
