const Router = require("express");
const {
  getToDo,
  deleteToDo,
  updateToDo,
} = require("../controllers/ToDoController");
const router = Router();

// router.get("/", (req, res) => {
//   res.json({ message: "hi there///" });
// });

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
