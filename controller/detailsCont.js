const detailsModel = require("../models/detailsModel");

exports.post_details = async (req, res) => {
  const {
    hospitalName,
    address,
    typeOfTreatment,
    availableDoctors,
    openCloseTime,
    facilities,
    latitude,
    longitude,
    about,
  } = req.body;

  const postData = await detailsModel.create({
    hospitalName,
    address,
    typeOfTreatment,
    availableDoctors,
    openCloseTime,
    facilities,
    latitude,
    longitude,
    about,
  });
  res.status(200).json({
    msg: "data submitted successfully",
    postData,
  });
};

exports.img_upload = async (req, res) => {
  const dataImg = await detailsModel.findByIdAndUpdate(
    req.params.id,
    { img: req.body.img },
    { new: true, runValidators: true }
  );
  res.status(200).json({
    msg: "image uploaded",
    dataImg,
  });
};

exports.get_details = async (req, res) => {
  const queryObject = { ...req.query };
  const queryFields = ["fields", "page", "sort", "limit", "name"];
  queryFields.forEach((el) => delete queryObject[el]);

  let querySearch = queryObject;
  const regexp = new RegExp(req.query.name, "i");
  if (req.query.name) {
    querySearch = { ...querySearch, hospitalName: regexp };
  }

  let query = detailsModel.find(querySearch);

  const number_of_item = await detailsModel.find(querySearch).countDocuments();
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  query = query.skip((page - 1) * limit).limit(limit);
  const getDetails = await query;

  res.status(200).json({
    number_of_item,
    msg: "details received from DB",
    getDetails,
  });
};

exports.delete_details = async (req, res) => {
  const delete_data = await detailsModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    msg: "details deletes!!!!",
  });
};
