import { Triangle } from "react-loader-spinner";

const Loader = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={style}>
      <Triangle height="80" width="80" color="#ffc727"></Triangle>
    </div>
  );
};

export default Loader;
