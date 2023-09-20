import { useState } from "react";
import GenericButton from "./component_templates/GenericButton";

const Button = () => {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("Du har inte klickat på något");
  const [users, setUsers] = useState();
  const incrementValue = () => {
    setCount(count + 100);
    setMessage("Nu klickade du!");
  };
  const displayUsers = users
    ? users.map((user, index) => {
        return <p key={index}>{index + 1} -  {user}</p>;
      })
    : "Inga användare....";

  return (
    <>
      <button onClick={incrementValue}>Värdet är {count}</button>
      <GenericButton action={incrementValue} text="Klicka mig" />
      <GenericButton
        text="Lägg till användare"
        action={() => {
          setUsers(["Roger", "Thomas", "Anna"]);
        }}
      />
      <p>{message}</p>
      {displayUsers}
    </>
  );
};

export default Button;
