import express, { Router } from "express";
import cors from "cors";
import { config } from "dotenv";
import { Port } from "./src/ports/port.js";
import { makeUserFactory } from "./src/factories/user.factory.js";
import { makeRepoFactory } from "./src/factories/repo.factory.js";
import { makeAuthFactory } from "./src/factories/auth.factory.js";
import { MongoDbConnection } from "./src/database/connection/connect.js";

config();
MongoDbConnection.connectDb();

const app = express();
const router = Router();

const repoFactory = makeRepoFactory(router);
const userFactory = makeUserFactory(router);
const authFactory = makeAuthFactory(router);

app.use(express.json());
app.use(cors());

app.use("/repo", repoFactory.route());
app.use("/user", userFactory.route());
app.use("/auth", authFactory.route());

Port.portConnect(app);
