require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const courseRoute = require("./router/course-router.js");
const contactRoute = require("./router/contact-router.js");
const adminRoute = require("./router/admin-router.js");
const connectdb = require("./utils/db.js");
const errorMiddleware = require("./middleware/error-middleware.js");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PATCH,DELETE,PUT,HEAD",
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/data", courseRoute);
app.use("/api/form", contactRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);


app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

const PORT = 5000;
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });
});