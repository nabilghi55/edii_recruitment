const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Biodata = sequelize.define("biodata", {
  posisi_dilamar: DataTypes.STRING,
  nama: DataTypes.STRING,
  no_ktp: DataTypes.STRING,
  tempat_lahir: DataTypes.STRING,
  tanggal_lahir: DataTypes.DATE,
  jenis_kelamin: DataTypes.STRING,
  agama: DataTypes.STRING,
  golongan_darah: DataTypes.STRING,
  status: DataTypes.STRING,
  alamat_ktp: DataTypes.TEXT,
  alamat_tinggal: DataTypes.TEXT,
  email: DataTypes.STRING,
  no_telp: DataTypes.STRING,
  kontak_darurat: DataTypes.STRING,
  skill: DataTypes.TEXT,
  bersedia_ditempatkan: DataTypes.BOOLEAN,
  gaji_diharapkan: DataTypes.DECIMAL,
});

User.hasOne(Biodata, { foreignKey: "user_id" });
Biodata.belongsTo(User, { foreignKey: "user_id" });

module.exports = Biodata;
