import { http } from "./config";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return http.get("/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return http.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  themPhimUploadHinh: (data) => {
    return http.post("/QuanLyPhim/ThemPhimUploadHinh", data);
  },
  getFilmDetail : (id) => {
    return http.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  }, 
  getLichChieu: (id) => {
    return http.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  }
  
};
