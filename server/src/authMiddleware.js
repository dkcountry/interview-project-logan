const { Users } = require("./models");

const authMiddleware = async (req, res, next) => {
  try {
    const userId = parseInt(req.get("Authorization").split(" ")[1]);
    const user = await Users.findOne({
      where: { id: userId }
    });
    if (user) {
      req.user = user.dataValues;

      next();
    } else {
      console.error("user not found", userId);

      res.status(401).json({
        success: false
      });
    }
  } catch (e) {
    console.error("unable to authenticate user", e);

    res.status(401).json({
      success: false
    });
  }
};

module.exports = authMiddleware;
