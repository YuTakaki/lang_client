import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { get } from "./requests";

const PrivateRoute = (gssp: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;
    try {
      const isAuth = await get("/api/auth/verify", {
        headers: {
          Cookie: req.headers.cookie,
        },
      });

      console.log(isAuth);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      } else {
        console.log(error);
      }
      return {
        props: {},
        redirect: {
          destination: "/login",
        },
      };
    }
    return gssp(ctx);
  };
};

export default PrivateRoute;
