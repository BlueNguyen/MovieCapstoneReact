import { Flex, Progress, Rate } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import "./detail.scss";

const Detail = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [value, setValue] = useState(3);
  

  return (
    <div
      style={{
        backgroundImage:
          "url(https://lsvn.vn/uploads/photos/13/003/16/63d0a954cd207.jpg)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div classname="">
        <div className="grid grid-cols-12 glassmorphism ">
          <div className="col-span-4 col-start-3">
            <div style={{ borderRadius: "10px" }} className="grid grid-cols-2">
              <img
                src="https://i.pinimg.com/736x/61/1e/8e/611e8e9bddb8f499f392415cb8deb02e.jpg"
                alt=""
              />
              <div className="ml-5">
                <h3>Ten</h3>
                <p>Mota</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 text-center p-10 col-start-9">
            <Flex gap="middle" wrap="wrap" vertical>
              <Progress type="circle" percent={100} format={() => "10"} />

              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : null}
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
