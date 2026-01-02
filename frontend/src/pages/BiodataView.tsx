interface Props {
  biodata: any;
  onEdit: () => void;
}

export default function BiodataView({ biodata, onEdit }: Props) {
  return (
    <div className="bg-white max-w-4xl mx-auto p-8 rounded-2xl shadow">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Data Biodata</h2>
        <button
          onClick={onEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Edit
        </button>
      </div>

      {/* DATA UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <Field label="Nama Lengkap" value={biodata.nama} />
        <Field label="Email" value={biodata.email} />
        <Field label="Posisi Dilamar" value={biodata.posisi_dilamar} />
        <Field label="Nomor KTP" value={biodata.no_ktp} />
        <Field label="Tempat Lahir" value={biodata.tempat_lahir} />
        <Field label="Tanggal Lahir" value={biodata.tanggal_lahir} />
        <Field label="Jenis Kelamin" value={biodata.jenis_kelamin} />
        <Field label="Agama" value={biodata.agama} />
        <Field label="Golongan Darah" value={biodata.golongan_darah} />
        <Field label="Status Pernikahan" value={biodata.status} />
        <Field label="Nomor Telepon" value={biodata.no_telp} />
        <Field label="Kontak Darurat" value={biodata.kontak_darurat} />
        <Field label="Gaji Diharapkan" value={biodata.gaji_diharapkan} />
      </div>

      {/* SECTION ALAMAT */}
      <Section label="Alamat Sesuai KTP" value={biodata.alamat_ktp} />
      <Section label="Alamat Tinggal" value={biodata.alamat_tinggal} />

      {/* SECTION SKILL */}
      <Section label="Keahlian / Skill" value={biodata.skill} />
    </div>
  );
}

/* ===== COMPONENT BANTUAN ===== */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1">
        {label}
      </label>
      <p className="text-gray-800 font-medium">{value || "-"}</p>
    </div>
  );
}

function Section({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6">
      <label className="block text-xs font-semibold text-gray-500 mb-1">
        {label}
      </label>
      <p className="text-gray-800 leading-relaxed">{value || "-"}</p>
    </div>
  );
}
