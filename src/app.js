import Express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = Express();

//middlewares
app.use(cors());
app.use(Express.json());

//router
app.use("/", router);

export default app;
