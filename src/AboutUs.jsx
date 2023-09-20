import GenericButton from "./component_templates/GenericButton";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>AboutUs</div>
      <GenericButton action={() => navigate("/")} text="Gå till Hem" />
    </>
  );
};

export default AboutUs;
