const Biodata = require("../models/biodata");
const User = require("../models/user");

exports.getAllBiodata = async (req, res) => {
  const data = await Biodata.findAll({
    include: [{ model: User, attributes: ["email"] }],
  });

  res.json(
    data.map((d) => ({
      id: d.id,
      nama: d.nama,
      email: d.email,
      tempat_lahir: d.tempat_lahir,
      tanggal_lahir: d.tanggal_lahir,
      posisi_dilamar: d.posisi_dilamar,
      no_telp: d.no_telp,
    }))
  );
};

exports.deleteBiodata = async (req, res) => {
  const biodata = await Biodata.findByPk(req.params.id);
  if (!biodata) return res.status(404).json({ message: "Not found" });

  await biodata.destroy();
  res.json({ message: "User deleted" });
};

exports.getBiodataById = async (req, res) => {
  const biodata = await Biodata.findByPk(req.params.id, {
    include: [{ model: User, attributes: ["email"] }],
  });

  if (!biodata) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }

  res.json({
    ...biodata.toJSON(),
  });
};
