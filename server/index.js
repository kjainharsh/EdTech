require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const courseRoute = require("./router/course-router.js");
const contactRoute = require("./router/contact-router.js");
const adminRoute = require("./router/admin-router.js");
const notificationRoute = require("./router/notification-router.js");
const connectdb = require("./utils/db.js");
const errorMiddleware = require("./middleware/error-middleware.js");
const OpenAI = require("openai");

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
app.use("/api/user", notificationRoute);
app.use(errorMiddleware);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Load API key from .env file
});

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: userMessage }],
        });

        res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong!" });
    }
});

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

const PORT = 5000;
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });
});