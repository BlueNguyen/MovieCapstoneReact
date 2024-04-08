import { http } from "./config";

export const quanLyDatVeServ = {
  getDanhSachPhongVe() {
    return http.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MaLichChieu}`);
  },
};