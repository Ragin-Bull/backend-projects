// We are creating a wrapper function to take care of asynchronous tasks
const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (err) {
    res.status(500).json({
      status: "Failure to connect",
    });
  }
};

export default asyncHandler;
