import { http } from "./config";

export const quanLyRapServ = {
  getAllThongTinCumRap() {
    return http.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01");
  },
  getThongTinLichChieuPhim(maPhim){
    return http.get(`/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  }, 
  
};
