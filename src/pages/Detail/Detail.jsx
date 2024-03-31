import { Flex, Progress, Rate } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import "./detail.scss";
import { Link, useParams } from "react-router-dom";
import { quanLyPhimServ } from "../../services/quanLyPhim";

const Detail = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [value, setValue] = useState(3);

  const { id } = useParams();
  
  const [lichChieu, setLichChieu] = useState(null);

  useEffect(() => {
    quanLyPhimServ
      .getLichChieu(id)
      .then((response) => {
        setLichChieu(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleBooking = (maLichChieu) => {
    window.location.href = `/booking`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${lichChieu?.hinhAnh})`,
        minHeight: "100vh",
      }}
    >
      <Header />
      <div>
        <div className="grid grid-cols-12 glassmorphism ">
          <div className="col-span-6 col-start-2">
            <div style={{ borderRadius: "10px" }} className="grid grid-cols-2">
              <div>
                <img
                  style={{ borderRadius: "10px", width: "260px" }}
                  src={lichChieu?.hinhAnh}
                  alt=""
                />
                <Link to="/booking">
                  <button
                    className="button m-10"
                  >
                    MUA VÉ NGAY
                  </button>
                </Link>
              </div>
              <div className="p-10">
                {lichChieu && (
                  <>
                    <h1 className="font-semibold">{lichChieu.tenPhim}</h1>
                    <p>{lichChieu.moTa}</p>
                    {/* Hiển thị danh sách các suất chiếu */}
                    {lichChieu?.lstLichChieuTheoPhim?.map((lichChieu) => (
                      <div
                        key={lichChieu.maLichChieu}
                        onClick={() => handleBooking(lichChieu.maLichChieu)}
                      >
                        <p>{lichChieu.ngayKhoiChieu}</p>
                        {/* Hiển thị các thông tin khác của suất chiếu */}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-3 text-center p-8 col-start-9 h-1/2">
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
