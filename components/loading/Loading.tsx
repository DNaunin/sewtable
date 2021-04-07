import Lottie from "react-lottie";
import animationData from "../../lotties/loading.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}

export default Loading;
