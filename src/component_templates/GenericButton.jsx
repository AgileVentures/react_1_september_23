const GenericButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        display: "inline-block",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight: "5px",
        borderRadius: "5px",
      }}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};

export default GenericButton;
