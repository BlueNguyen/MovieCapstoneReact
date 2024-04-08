// InfoBookSeat.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { datGhe, xoaGhe, xoaTatCaGhe } from "../../redux/slice/bookingSlice";

const InfoBookSeat = () => {
  const selectedSeats = useSelector((state) => state.selectedSeats);
  const dispatch = useDispatch();

  const handleDeleteSeat = (soGhe) => {
    dispatch(xoaGhe(soGhe));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedSeats?.forEach((seat) => {
      totalPrice += seat.gia;
    });
    totalPrice = totalPrice.toLocaleString("en-US") + "đ";
    return totalPrice;
  };

  const handlePay = () => {
    dispatch(xoaTatCaGhe());
    // Thực hiện điều hướng đến màn hình trống
    // Ví dụ: this.props.history.push('/man-hinh-trong');
  };

  return <div className="text-light">{/* ... */}</div>;
};

export default InfoBookSeat;
