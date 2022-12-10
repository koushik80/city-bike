const dotenv = require("dotenv");
const app = require("./app/app");
const connectDatabase = require("./config/database");

// HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the Server due to UNCAUGHT Promise Rejection!`);
    process.exit(1)
});

// environment configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: 'backend/config/config.env' });
}

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is firing on http://localhost:${process.env.PORT}`);
});

// UNHANDLED PROMISE REJECTION
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the Serve due to Unhandled Promise Rejection!`);

    server.close(() => {
        process.exit(1)
    })
});


