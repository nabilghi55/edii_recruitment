const Biodata = require("../models/biodata");

exports.createOrUpdate = async (req, res) => {
  const data = req.body;
  const user_id = req.user.id;

  const biodata = await Biodata.findOne({ where: { user_id } });

  if (biodata) {
    await biodata.update(data);
    return res.json({ message: "Biodata updated" });
  }

  await Biodata.create({ ...data, user_id });
  res.json({ message: "Biodata created" });
};

exports.getMyBiodata = async (req, res) => {
  const biodata = await Biodata.findOne({
    where: { user_id: req.user.id },
  });
  res.json(biodata);
};
