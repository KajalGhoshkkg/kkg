const express = require("express");
const { protect, restrictedTo } = require("../controller/authinticationCont");
const { post_details, get_details, delete_details, img_upload } = require("../controller/detailsCont");

const detailsRoute = express.Router();

detailsRoute.post("/post",protect,restrictedTo("admin"), post_details);
detailsRoute.get("/get", get_details);
detailsRoute.delete("/delete/:id",protect,restrictedTo("admin"), delete_details);
detailsRoute.patch("/imgupload/patch/:id",protect,restrictedTo("admin"),img_upload)

module.exports = detailsRoute;
