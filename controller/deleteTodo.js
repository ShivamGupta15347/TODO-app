const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const Todo = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: todo,
      message: "successfully deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "failed to delete todo",
    });
  }
};
