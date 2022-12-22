import express from "express";
import router from "./routes/router.js";
import { croncitoDolar, croncitoUF } from "./cronjobs/job1.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, () => {
    // croncitoUF.start();
    // croncitoDolar.start();
    console.log("Server listening on port 3000");
});

