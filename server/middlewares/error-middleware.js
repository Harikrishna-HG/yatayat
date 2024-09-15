const errorMiddleware = (err, req, res, next) => {
  // Use logical OR (||) to provide default values
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from Backend";

  // Send the JSON response
  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
