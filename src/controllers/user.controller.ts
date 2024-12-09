import { Request, Response, NextFunction } from "express";
import { prisma } from "..";

export const getUserLists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const users = await prisma.user.findMany({ where: { id } });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) throw { message: "Email adress already exists", statusCode: 400 };
    await prisma.user.create({ data: { name, email, password } });
    res.status(200).json({ mesaage: "user created successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    await prisma.user.update({
      where: { id },
      data: { name, email, password },
    });
    res.status(200).json({ mesaage: "updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};
