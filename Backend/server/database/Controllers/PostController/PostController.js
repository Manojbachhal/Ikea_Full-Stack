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

const getDataBedding = async (page, sort) => {
  let sortOrder;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  console.log("page" + " " + page);
  let data = await Bedding.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
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
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Sofa.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
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

// const createCartData = async (Data) => {
//   let id = Data.ProductId;
//   let email=Data.email;
//   let data = await Cart.find({email,id});
//   if(data){
//     data.quantity+=1;
//   }
//   return data;
// };

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
};
