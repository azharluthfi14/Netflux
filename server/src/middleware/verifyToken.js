import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token; // Req token from headers
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    // Validate token from header
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        return res.status(403).send({ message: "Invalid Credential" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).send({ message: "You are not authenticated!" });
  }
};

export default verifyToken;
