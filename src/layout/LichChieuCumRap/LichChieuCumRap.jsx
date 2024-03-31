import React, { useEffect, useState } from "react";
import { Pagination, Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import LichChieuPhim from "../../components/LichChieuPhim/LichChieuPhim";

const LichChieuCumRap = () => {
  const [arrCumRap, setArrCumRap] = useState([]);
  

  useEffect(() => {
    quanLyRapServ
      .getAllThongTinCumRap()
      .then((res) => {
        setArrCumRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  


  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl text-center">
        Danh sách lịch chiếu cụm rạp
      </h2>
      <div className="grid grid-cols-8 gap-20">
        <Tabs
          tabPosition="left"
          style={{ height: "500px" }}
          items={arrCumRap.map((cumrap, index) => ({
            label: <img className="w-14" src={cumrap.logo} />,
            key: cumrap.maHeThongRap,
            children: <LichChieuPhim cumrap={cumrap.lstCumRap} />,
          }))}
        />
      </div>
      
    </div>
  );
};

export default LichChieuCumRap;
