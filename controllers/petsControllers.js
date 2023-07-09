const { Pet } = require("../models/pets");

const { controlWrapper } = require("../helpers/controlWrapper");
const { HttpError } = require("../helpers/HttpError");

const getPet = async (req, res) => {
  const { _id: owner } = req.user;

  const findPet = await Pet.find({ owner }).select([
    "name",
    "birthday",
    "breed",
    "comments",
    "avatarURL",
  ]);

  res.json(200, findPet);
};

const addPet = async (req, res) => {
  const owner = req.user.id;
  const petData = req.body;

  const data = !!req.file
    ? { avatarURL: req.file.path, owner, ...petData }
    : { owner, ...petData };

  const newPet = await Pet.create(data);
  res.status(201).json(newPet);
};

const deletePetsId = async (req, res) => {
  const { petId } = req.params;
  const result = await Pet.findByIdAndRemove(petId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(200, { message: "contact deleted" });
};

module.exports = {
  addPet: controlWrapper(addPet),
  deletePetsId: controlWrapper(deletePetsId),
  getPet: controlWrapper(getPet),
};
