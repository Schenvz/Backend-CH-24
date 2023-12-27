const express = require("express");
const events = require("./data/fs/events.fs.js");

const server = express();

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

//middleware
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, ready);

//endpoint
server.get("/api/events", (req, res) => {
  try {
    const all = events.getAllEvents();
    if (Array.isArray(all)) {
      return res.status(200).json({
        success: true,
        response: all,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: all,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

server.get("/api/events/:eid", (req, res) => {
  try {
    const { eid } = req.params;
    const one = events.getEventById(eid);
    if (one) {
      return res.status(200).json({
        success: true,
        response: one,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
