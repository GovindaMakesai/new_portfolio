require("dotenv").config();
const app = require("./app");
const connectDb = require("./config/db");

const PORT = Number(process.env.PORT || 5000);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Server failed to start:", error.message);
    process.exit(1);
  }
};

void start();
