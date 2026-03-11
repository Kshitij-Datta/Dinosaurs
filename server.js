// server.js
import express from "express";
import fetch from "node-fetch"; // if Node <18, install node-fetch

const app = express();

app.get("/api/dinosaurs", async (req, res) => {
  const limit = req.query.limit || 200; // default 200, can be adjusted
  try {
    const response = await fetch(
      `https://paleobiodb.org/data1.2/taxa/list.json?base_name=Dinosauria&rel=all_children&rank=genus&status=valid&limit=${limit}`,
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "PBDB fetch failed" });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Server fetch failed", details: err.message });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
