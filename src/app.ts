import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import issueRoutes from "./routes/issueRoutes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/issues", issueRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
