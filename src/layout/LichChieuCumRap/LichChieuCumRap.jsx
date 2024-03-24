import React, { useEffect, useState } from "react";
import { Pagination, Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import LichChieuPhim from "../../components/LichChieuPhim/LichChieuPhim";

const LichChieuCumRap = () => {
  const [arrCumRap, setArrCumRap] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Số lượng sản phẩm trên mỗi trang

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

  // Tính toán sản phẩm hiển thị trên trang hiện tại
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = arrCumRap.slice(indexOfFirstItem, indexOfLastItem);

  // Hàm xử lý khi thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl text-center">
        Danh sách lịch chiếu cụm rạp
      </h2>
      <div className="grid grid-cols-4 gap-20">
        <Tabs
          tabPosition="left"
          style={{ height: "500px" }}
          items={currentItems.map((cumrap, index) => ({
            label: <img className="w-14" src={cumrap.logo} />,
            key: cumrap.maHeThongRap,
            children: <LichChieuPhim cumrap={cumrap.lstCumRap} />,
          }))}
        />
      </div>
      <div className="mt-4 flex justify-center">
        {/* Hiển thị Pagination */}
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={arrCumRap.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false} // Ẩn chọn kích thước trang
          showQuickJumper={false} // Ẩn điều hướng nhanh
          showTotal={(total) => `Total ${total} items`} // Hiển thị tổng số sản phẩm
          style={{ marginBottom: "20px" }}
        />
      </div>
    </div>
  );
};

export default LichChieuCumRap;
