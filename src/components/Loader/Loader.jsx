import { Triangle } from "react-loader-spinner";

const Loader = ({ style }) => {
  const defaultStyle = {
    background: "linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={{ ...defaultStyle, ...style }}>
      <Triangle height="80" width="80" color="#FFB627"></Triangle>
    </div>
  );
};

export default Loader;
