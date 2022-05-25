//@desc     Display main page
//@route    GET /
//@access   Public
exports.mainPage = async (req, res, next) => {
  res.json([{ message: "Hola tu, como estas", id:'1' }]);
};
