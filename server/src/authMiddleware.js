const { Users, UserState } = require("./models");

const UserShow = async (req, res, next) => {
  user = await getUser(req)
  if (user != null) {
    req.user = user.dataValues
    next();
  } else {
    console.error("user not found", userId);

    res.status(401).json({
      success: false
    });
  }
};

const UserInsertUpdateStates = async (req, res, next) => {
  // console.log("req:", req)
  try {
    var states = req.body.states
    console.log("UserInsertUpdateStates states:", states)
    userResp = UserShow(req, res, next) 
    user = await getUser(req, res)
    console.log("user", user)
    if (user != null) {
      user.setStates(states).then(assocStates => {

        console.log("associated states:", assocStates)
      })
    }

  } catch (e) {
    console.error("unable insert/update user's selected states", e)

    res.status(401).json({
      success: false
    });
  }
};


const getUser = async (req, res) => {
  try {
    const token = parseInt(req.get("Authorization").split(" ")[1]);
    const user = await Users.findOne({
      where: { token }
    });

    if (user) {
      return user
    }
  } catch (e) {
    console.log("unable to authenticate user", e)

    res.status(401).json({
      success: false
    });
  }

  return null
}
module.exports = { UserShow, UserInsertUpdateStates };
