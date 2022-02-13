import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  const defaultError = {
    StatusCode : StatusCodes.INTERNAL_SERVER_ERROR,
    msg : "Something went wrong, try again later."
  }
  res.status(defaultError.StatusCode).json({ msg : err });
};

export default errorHandlerMiddleware;
