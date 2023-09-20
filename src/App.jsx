import Button from "./Button";
import { useNavigate } from "react-router-dom";
import GenericButton from "./component_templates/GenericButton";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button />
      <GenericButton action={() => navigate("/about_us")} text="Gå till Om oss..." />
    </>
  );
};

export default App;
