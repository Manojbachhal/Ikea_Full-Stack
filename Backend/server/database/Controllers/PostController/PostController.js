const Bedding = require("../../Models/ProductModel/Bedding");
const Beds = require("../../Models/ProductModel/Beds");
const BedSideTable = require("../../Models/ProductModel/Bedsidetables");
const BookCase = require("../../Models/ProductModel/Bookcases");
const Furniture = require("../../Models/ProductModel/Furniture");
const Mattress = require("../../Models/ProductModel/Mattresses");
const Sofa = require("../../Models/ProductModel/Sofa");
const Tables = require("../../Models/ProductModel/Tables");
const UnderBedStorage = require("../../Models/ProductModel/UnderBedStorage");

const getDataBedding = async () => {
  await Bedding.find();
};

const getDataBeds = async () => {
  await Bedding.find();
};

const getDataBedSideTable = async () => {
  await BedSideTable.find();
};

const getDataBookCase = async () => {
  await BookCase.find();
};

const getDataFurniture = async () => {
  await Furniture.find();
};

const getDataMattress = async () => {
  await Mattress.find();
};

const getDataSofa = async () => {
  await Sofa.find();
};

const getDataTables = async () => {
  await Tables.find();
};

const getDataUnderBedStorage = async () => {
  await UnderBedStorage.find();
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
};
