import React from "react";
import loadingGif from "../../assets/img/loading.gif";
const Loading = () => {
  return (
    <div
      className="h-screen w-full bg-slate-100 flex items-center justify-center fixed top-0 left-0"
      style={{ zIndex: 9999, backgroundColor: '#fff' }}
    >
      <img src={loadingGif} alt="loading-image" />
    </div>
  );
};

export default Loading;
