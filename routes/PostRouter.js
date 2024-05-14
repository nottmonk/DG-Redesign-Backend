const middleware = require("../middleware");

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
);
