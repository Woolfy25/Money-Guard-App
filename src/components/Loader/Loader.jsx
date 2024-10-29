import { Triangle } from "react-loader-spinner";

const Loader = () => {
  const style = {
    background: "linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <div style={style}>
      <Triangle height="80" width="80" color="#FFB627"></Triangle>
    </div>
  );
};

export default Loader;
