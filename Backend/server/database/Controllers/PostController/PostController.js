const Cart = require("../../Models/CartModel/Cart.model");
const Bedding = require("../../Models/ProductModel/Bedding");
const Beds = require("../../Models/ProductModel/Beds");
const BedSideTable = require("../../Models/ProductModel/Bedsidetables");
const BookCase = require("../../Models/ProductModel/Bookcases");
const Furniture = require("../../Models/ProductModel/Furniture");
const Mattress = require("../../Models/ProductModel/Mattresses");
const Sofa = require("../../Models/ProductModel/Sofa");
const Tables = require("../../Models/ProductModel/Tables");
const UnderBedStorage = require("../../Models/ProductModel/UnderBedStorage");
const { verifyTOken } = require("../AuthController/LoginController");

const getDataBedding = async (page, sort) => {
  let skipPage = (page - 1) * 10;
  // console.log("page" + " " + page);
  let total = await Bedding.find();
  let data = Bedding.find().skip(skipPage).limit(12);
  if (sort == "asc") {
    data = Bedding.find().sort({ salesPrice_numeral: 1 });
  } else {
    data = Bedding.find().sort({ salesPrice_numeral: -1 });
  }
  data = await data;
  return {
    data,
    totalPage: total.length,
  };
};

const getDataBeds = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  await Beds.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataBedSideTable = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await BedSideTable.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataBookCase = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  await BookCase.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataFurniture = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Furniture.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataMattress = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Mattress.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataSofa = async (page, sort) => {
  let skipPage = (page - 1) * 10;
  let total = await Sofa.find();
  let data = await Sofa.find().skip(skipPage).limit(12);

  // .sort({ salesPrice_numeral: sortOrder });
  return {
    data,
    totalPage: total.length,
  };
};

const getDataTables = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Tables.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataUnderBedStorage = async (page, sort) => {
  let sortOrder;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await UnderBedStorage.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const createCartData = async (Data) => {
  let user = verifyTOken(Data.token);
  let email = user.email;
  Data.cartItem.email = email;
  // console.log(Data.cartItem);
  let itemNoGlobal = Data.cartItem.itemNoGlobal;

  let data = await Cart.findOne({ email, itemNoGlobal });
  console.log(data, "cart");
  if (data) {
    let res = await Cart.findOneAndUpdate(
      { email, itemNoGlobal },
      { quantity: data.quantity + 1 }
    );
    // data.quantity += 1;
    return res;
  } else {
    Data.cartItem.quantity = 1;
    delete Data.cartItem._id;
    delete Data.cartItem.id;
    // console.log(Data.cartItem);
    let res = await Cart.create(Data.cartItem);
    // console.log(res);
    return res;
  }
};

module.exports = {
  getDataBedSideTable,
  getDataBedding,
  getDataBeds,
  getDataBookCase,
  getDataFurniture,
  getDataMattress,
  getDataSofa,
  getDataTables,
  getDataUnderBedStorage,
  createCartData,
};
