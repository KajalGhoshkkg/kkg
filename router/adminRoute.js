const express = require("express");
const { registerData, login, logout } = require("../controller/authinticationCont");
// const { img_upload } = require("../controller/detailsCont");

const adminRoute = express.Router();

adminRoute.post("/signup", registerData);
adminRoute.post("/login",login)
adminRoute.get("/logout",logout)
// adminRoute.patch("/imgupload/patch/:id",protect,restrictedTo("admin"),img_upload)
module.exports = adminRoute;
