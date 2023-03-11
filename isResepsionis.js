const jwt = require("jsonwebtoken");

const SECRET_KEY = "UKKcyangpalingcantik";

// verifyToken = (req, res, next) => {
//   let header = req.headers.authorization;
//   let token = header && header.split(" ")[1];

//   let jwtHeader = {
//     algorithm: "HS256",
//   };
//   if (token == null) {
//     res.status(401).json({ message: "Unauthorized" });
//   } else {
//     jwt.verify(token, SECRET_KEY, jwtHeader, (error, user) => {
//       if (error) {
//         res.status(401).json({
//           message: "Invalid token",
//         });
//       } else {
//         next();
//       }
//     });
//   }
// };

isResepsionis = (req, res, next) => {
  let header = req.headers.authorization;
  let token = header && header.split(" ")[1];

  let jwtHeader = {
    algorithm: "HS256",
  };
  if (token == null) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    jwt.verify(token, SECRET_KEY, jwtHeader, (error, user) => {
      if (error) {
        res.status(401).json({
          message: "Invalid token",
        });
      } else {
        if(user.role === 'respsionis')
        {next();}
        else {
          res.json({
            message: 'Hanya untuk resepsionis'
          })
        }
      }
    });
  }
};

// const authJwt = {
//   // verifyToken: verifyToken,
//   isAdmin: isAdmin,
//   //isResepsionis: isResepsionis
// }

module.exports = isResepsionis;
