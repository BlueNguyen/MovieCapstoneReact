import { Flex, Progress, Rate } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import "./detail.scss";
import { useParams } from "react-router-dom";
import { quanLyPhimServ } from "../../services/quanLyPhim";

const Detail = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [value, setValue] = useState(3);

  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState(null);

  useEffect(() => {
    quanLyPhimServ
      .getFilmDetail(id)
      .then((response) => {
        setFilmDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching film detail: ", error);
      });
  }, [id]);

  const handleBooking = (maLichChieu) => {
    window.location.href = `/booking/${maLichChieu}`;
  };

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
                {filmDetail && (
                  <>
                    <h1>{filmDetail.tenPhim}</h1>
                    <p>{filmDetail.moTa}</p>
                    {/* Hiển thị danh sách các suất chiếu */}
                    {filmDetail.lstLichChieuTheoPhim.map((lichChieu) => (
                      <div
                        key={lichChieu.maLichChieu}
                        onClick={() => handleBooking(lichChieu.maLichChieu)}
                      >
                        <p>{lichChieu.ngayChieuGioChieu}</p>
                        {/* Hiển thị các thông tin khác của suất chiếu */}
                      </div>
                    ))}
                  </>
                )}
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
