const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

const readData = () => {
  const data = fs.readFileSync("./db.json", "utf-8");
  return JSON.parse(data).dishes;
};

const writeData = (dishes) => {
  fs.writeFileSync("./db.json", JSON.stringify({ dishes }, null, 2), "utf-8");
};


app.post("/dishes", (req, res) => {
  try {
    const dishes = readData();
    const newDish = req.body;

    if (!newDish.id || !newDish.name || !newDish.price || !newDish.category) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const exists = dishes.find((dish) => dish.id === newDish.id);
    if (exists) {
      return res.status(409).json({ message: "Dish with this ID already exists" });
    }

    dishes.push(newDish);
    writeData(dishes);
    res.status(201).json(newDish);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.get("/dishes", (req, res) => {
  try {
    const dishes = readData();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.get("/dishes/:id", (req, res) => {
  try {
    const dishes = readData();
    const id = Number(req.params.id);
    const dish = dishes.find((dish) => dish.id === id);

    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.put("/dishes/:id", (req, res) => {
  try {
    let dishes = readData();
    const id = Number(req.params.id);
    const index = dishes.findIndex((dish) => dish.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Dish not found" });
    }

    dishes[index] = { ...dishes[index], ...req.body };
    writeData(dishes);
    res.status(200).json(dishes[index]);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.delete("/dishes/:id", (req, res) => {
  try {
    let dishes = readData();
    const id = Number(req.params.id);
    const newDishes = dishes.filter((dish) => dish.id !== id);

    if (newDishes.length === dishes.length) {
      return res.status(404).json({ message: "Dish not found" });
    }

    writeData(newDishes);
    res.status(200).json({ message: "Dish deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.get("/dishes/get", (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ message: "Name query required" });

    const dishes = readData();
    const results = dishes.filter(dish =>
      dish.name.toLowerCase().includes(name.toLowerCase())
    );

    if (results.length === 0) {
      return res.status(404).json({ message: "No dishes found" });
    }

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.use("*", (req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
