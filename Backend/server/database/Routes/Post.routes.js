const {
  getDataBedSideTable,
  getDataBedding,
  getDataBeds,
  getDataBookCase,
  getDataFurniture,
  getDataMattress,
  getDataSofa,
  getDataTables,
  getDataUnderBedStorage,
} = require("../Controllers/PostController/PostController");

const express = require(express);
const router = express.router();

router.get("/bedding", async (req, res) => {
  let { page } = req.params;
  let data = await getDataBedding(page);
  res.send({
    data,
  });
});

router.get("/beds", async (req, res) => {
  let { page } = req.params;
  let data = await getDataBeds(page);
  res.send({
    data,
  });
});

router.get("/bed-side-table", async (req, res) => {
  let { page } = req.params;
  let data = await getDataBedSideTable(page);
  res.send({
    data,
  });
});

router.get("/bookcase", async (req, res) => {
  let { page } = req.params;
  let data = await getDataBookCase(page);
  res.send({
    data,
  });
});

router.get("/furniture", async (req, res) => {
  let { page } = req.params;
  let data = await getDataFurniture(page);
  res.send({
    data,
  });
});

router.get("/mattress", async (req, res) => {
  let { page } = req.params;
  let data = await getDataMattress(page);
  res.send({
    data,
  });
});

router.get("/sofa", async (req, res) => {
  let { page } = req.params;
  let data = await getDataSofa(page);
  res.send({
    data,
  });
});

router.get("/table", async (req, res) => {
  let { page } = req.params;
  let data = await getDataTables(page);
  res.send({
    data,
  });
});

router.get("/underbed-storage", async (req, res) => {
  let { page } = req.params;
  let data = await getDataUnderBedStorage(page);
  res.send({
    data,
  });
});

router.post("/cart", async (req, res) => {
  let data = req.body;
  // let res=
});
