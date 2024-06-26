import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovieThunk } from "../../redux/slice/phimSlice";
import { NavLink } from "react-router-dom";

const ListMovie = () => {
  const { arrMovie } = useSelector((state) => state.phimSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovieThunk());
  }, []);

  return (
    <div className="grid grid-cols-5 gap-10">
      {arrMovie.map((movie, index) => {
        return (
          <div className="movie_item space-y-4" key={index}>
            <img
              className="w-full h-96 object-cover rounded"
              src={movie.hinhAnh}
              alt={movie.tenPhim}
            />
            <div>
              <h3 className="mb-3">
                <span className="bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                  C18
                </span>
                <span className="text-xl font-semibold">{movie.tenPhim}</span>
              </h3>
              <p className="line-clamp-2">{movie.moTa}</p>
            </div>

            <div className="w-full">
              <NavLink to={`/detail/${movie.maPhim}`} className="button">
                Đặt vé
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListMovie;
