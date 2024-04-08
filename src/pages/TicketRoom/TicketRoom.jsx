// TicketRoom.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

// import { selectSeat, deselectSeat, resetSeats } from "../../redux/slice/bookingSlice";
import RowSeat from "./RowSeat"; // Import RowSeat component
import InfoBookSeat from "./InfoBookSeat";

const TicketRoom = () => {
  const dispatch = useDispatch();
  const { MaLichChieu } = useParams();
  const bookedSeats = useSelector((state) => state.seat);

  useEffect(() => {
    // Fetch data if needed
  }, [MaLichChieu]);

  const renderRowSeat = () => {
    // Render your RowSeat components here
  };

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) {
      // dispatch(deselectSeat(seat));
    } else {
      // dispatch(selectSeat(seat));
    }
  };

  return (
    <div>
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="screen">
                  <h1 className="text-light display-4">MOVIE SEAT SELECTION</h1>
                  {renderRowSeat()}
                </div>
              </div>
              <div className="col-4">
                <h2 className="text-center p-5" style={{ fontSize: "35px" }}>
                  SELECTED SEATS LIST
                </h2>
                <InfoBookSeat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketRoom;
