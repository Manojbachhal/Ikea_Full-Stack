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
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let data = await Bedding.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
  await Beds.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
  let data = await BedSideTable.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
  return data;
};

const getDataBookCase = async (page, sort) => {
  await BookCase.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
  let data = await Furniture.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
  let data = await Mattress.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
  let data = await Sofa.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
  let data = await Tables.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
  return data;
};

const getDataUnderBedStorage = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let data = await UnderBedStorage.find()
    .sort({ salesPrice_numeral: sortOrder })
    .skip(page - 1)
    .limit(10);
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
