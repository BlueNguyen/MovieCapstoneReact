// RowSeat.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { datGhe } from "../../redux/slice/bookingSlice";

const RowSeat = (props) => {
  const { hangGhe } = props;
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const dispatch = useDispatch();

  const handleSeatClick = React.useCallback(
    (ghe) => {
      dispatch(datGhe(ghe));
    },
    [dispatch]
  );

  const renderGhe = () => {
    // Render ghế
  };

  return (
    <div className="text-light text-left ml-5 mt-3">
      {hangGhe.hang}
      {renderGhe()}
    </div>
  );
};

export default RowSeat;
