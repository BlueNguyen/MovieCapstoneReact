import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import MovieManager from "../pages/MovieManager/MovieManager";
import AddMovie from "../pages/AddMovie/AddMovie";
import Detail from "../pages/Detail/Detail";
import TicketRoom from "../pages/TicketRoom/TicketRoom";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserTemplate />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
        {
          path: "/booking",
          element: <TicketRoom />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />,
      children: [
        {
          path: "quan-li-phim",
          element: <MovieManager />,
        },
        {
          // path: "them-phim",
          element: <AddMovie />,
          index: true,
        },
        {
          path: "them-phim",
          element: <AddMovie />,
        },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
