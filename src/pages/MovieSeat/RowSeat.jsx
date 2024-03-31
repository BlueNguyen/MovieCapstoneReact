import React, { Component } from "react";
import { debounce } from "lodash";

class RowSeat extends Component {
  // Terminal : BẤM TERMINAL      (npm install lodash.debounce) 

  // Tạo một hàm xử lý sự kiện debounce để giảm số lần gọi
  handleSeatClick = debounce((ghe) => {
    this.props.datGhe(ghe);
  }, 300); // Thời gian chờ 300ms

  renderGhe = () => {
    const { hangGhe, selectedSeats } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = ghe.daDat ? "gheDuocChon" : "";
      let cssGheDangDat = selectedSeats?.some(
        (selectedGhe) => selectedGhe.soGhe === ghe.soGhe
      )
        ? "gheDangChon"
        : "";

      // hàng ghế đầu tiên 1 2 3...12
      if (hangGhe.hang === "") {
        return (
          <span key={index} className="rowNumber">
            <span style={{ margin: "0 22px" }}>{ghe.soGhe}</span>
          </span>
        );
      } else {
        return (
          <button
            disabled={ghe.daDat}
            className={`seats ${cssGheDaDat} ${cssGheDangDat}`}
            key={index}
            onClick={() => this.handleSeatClick(ghe)} // Sử dụng hàm xử lý sự kiện debounce
          >
            {ghe.soGhe}
          </button>
        );
      }
    });
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-3">
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </div>
    );
  }
}

export default RowSeat;
