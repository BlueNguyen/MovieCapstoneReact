import React from "react";
import { Tabs } from "antd";
import "./lichChieuPhim.scss";
import moment from "moment";
const LichChieuPhim = ({ cumrap }) => {



  return (
    <div>
      <Tabs
        className="tab_cum_rap"
        tabPosition="left"
        style={{ height: "700px", width: "350px" }}
        items={cumrap.map((item, index) => {
          return {
            label: (
              <div className="text-left uppercase label_cumrap">
                <h4 className="text-green-600 font-medium text-lg truncate">
                  {item.tenCumRap}
                </h4>
                <p className="text-gray-500 truncate text-xs">{item.diaChi}</p>
              </div>
            ),
            key: index,
            children: (
              <div >
                {item.danhSachPhim.map((phim, index) => {
                  return (
                    
                    phim.dangChieu && (
                      <div className="flex my-5 w-80" key={index}>
                        <div>
                          <img
                            className="max-w-20 max-h-15"
                            src={phim.hinhAnh}
                            alt=""
                          />
                        </div>
                        <div className="ml-5">
                          {/* tên phim  */}
                          <h3 className="mb-3">
                            <span className="bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                              C18
                            </span>
                            <span className="text-xl font-semibold">
                              {phim.tenPhim}
                            </span>
                          </h3>
                          {/* suất chiếu  */}
                          <div className="grid grid-cols-2 gap-5">
                            {/* Suất chiếu chỉ hiện thị 4 phần tử đầu trong mảng  */}
                            {phim.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((gioChieu, index) => {
                                return (
                                  <div
                                  className="space-x-3"
                                    style={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    {/* ngày tháng  */}
                                    <button>
                                      {moment(
                                        gioChieu.ngayChieuGioChieu
                                      ).format("DD-MM-YYYY")}
                                    </button>
                                    <a>~</a>
                                    {/* giờ chiếu  */}
                                    <button>
                                      {moment(
                                        gioChieu.ngayChieuGioChieu
                                      ).format("hh:mm")}
                                    </button>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LichChieuPhim;
