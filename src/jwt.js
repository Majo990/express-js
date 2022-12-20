  /* const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  delete user.contraseña
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("header", authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    console.log(user);
    req.user = user;

    next();
  });
}

module.exports = {
  generateAccessToken,
  authenticateToken,
};

*/
