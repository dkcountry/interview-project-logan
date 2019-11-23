const { Users, States } = require("./models");

const Index = async (req, res, next) => {
  try {
    var states = await States.findAll({});
    if (states && states != []) {
      states = states.map(x => x.dataValues.name)
      console.log("states: ", states)
      req.states = states;

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

module.exports = Index;
