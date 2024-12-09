// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: { message: string; statusCode?: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "An unexpected error occurred";

  res.status(statusCode).json({
    error: {
      message,
      statusCode,
    },
  });
};
