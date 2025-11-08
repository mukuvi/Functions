import express from "express";
import { getAllData } from "../controllers/getAlldata.js";
import { getDataByParams } from "../controllers/getDataByParams.js";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);
apiRouter.get("/:field/:term", getDataByParams);
