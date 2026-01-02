import { useState } from "react";
import api from "../api/axios";

interface Props {
  initialData?: any;
  isEdit?: boolean;
  onSuccess?: () => void;
}

export default function BiodataForm({
  initialData,
  isEdit = false,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    nama: initialData?.nama || "",
    email: initialData?.email || "",
    posisi_dilamar: initialData?.posisi_dilamar || "",
    no_ktp: initialData?.no_ktp || "",
    tempat_lahir: initialData?.tempat_lahir || "",
    tanggal_lahir: initialData?.tanggal_lahir || "",
    jenis_kelamin: initialData?.jenis_kelamin || "",
    agama: initialData?.agama || "",
    golongan_darah: initialData?.golongan_darah || "",
    status: initialData?.status || "",
    alamat_ktp: initialData?.alamat_ktp || "",
    alamat_tinggal: initialData?.alamat_tinggal || "",
    no_telp: initialData?.no_telp || "",
    kontak_darurat: initialData?.kontak_darurat || "",
    skill: initialData?.skill || "",
    gaji_diharapkan: initialData?.gaji_diharapkan || "",
    bersedia_ditempatkan: initialData?.bersedia_ditempatkan || false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    isEdit
      ? await api.post("/biodata", form)
      : await api.post("/biodata", form);

    alert(isEdit ? "Biodata diperbarui" : "Biodata disimpan");
    onSuccess?.();
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white max-w-4xl mx-auto p-8 rounded-2xl shadow"
    >
      <h2 className="text-xl font-semibold mb-6">
        {isEdit ? "Edit Biodata" : "Isi Biodata"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Nama Lengkap">
          <input
            className="w-full"
            name="nama"
            value={form.nama}
            onChange={handleChange}
          />
        </Field>

        <Field label="Email">
          <input className="w-full" name="email" value={form.email}  />
        </Field>

        <Field label="Posisi Dilamar">
          <input
            className="w-full"
            name="posisi_dilamar"
            value={form.posisi_dilamar}
            onChange={handleChange}
          />
        </Field>

        <Field label="No KTP">
          <input
            className="w-full"
            name="no_ktp"
            value={form.no_ktp}
            onChange={handleChange}
          />
        </Field>

        <Field label="Tempat Lahir">
          <input
            className="w-full"
            name="tempat_lahir"
            value={form.tempat_lahir}
            onChange={handleChange}
          />
        </Field>

        <Field label="Tanggal Lahir">
          <input
            className="w-full"
            type="date"
            name="tanggal_lahir"
            value={form.tanggal_lahir}
            onChange={handleChange}
          />
        </Field>

        <Field label="Jenis Kelamin">
          <select
            name="jenis_kelamin"
            value={form.jenis_kelamin}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </Field>

        <Field label="Agama">
          <input name="agama" value={form.agama} onChange={handleChange} />
        </Field>

        <Field label="Golongan Darah">
          <input
            name="golongan_darah"
            value={form.golongan_darah}
            onChange={handleChange}
          />
        </Field>

        <Field label="Status Pernikahan">
          <input name="status" value={form.status} onChange={handleChange} />
        </Field>

        <Field label="No Telepon">
          <input name="no_telp" value={form.no_telp} onChange={handleChange} />
        </Field>

        <Field label="Kontak Darurat">
          <input
            name="kontak_darurat"
            value={form.kontak_darurat}
            onChange={handleChange}
          />
        </Field>

        <Field label="Gaji Diharapkan">
          <input
            name="gaji_diharapkan"
            value={form.gaji_diharapkan}
            onChange={handleChange}
          />
        </Field>
      </div>

      <Field label="Alamat KTP">
        <textarea
          className="w-full"
          name="alamat_ktp"
          value={form.alamat_ktp}
          onChange={handleChange}
        />
      </Field>

      <Field label="Alamat Tinggal">
        <textarea
          className="w-full"
          name="alamat_tinggal"
          value={form.alamat_tinggal}
          onChange={handleChange}
        />
      </Field>

      <Field label="Skill">
        <textarea
          className="w-full"
          name="skill"
          value={form.skill}
          onChange={handleChange}
        />
      </Field>

      <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          name="bersedia_ditempatkan"
          checked={form.bersedia_ditempatkan}
          onChange={handleChange}
        />
        Bersedia ditempatkan
      </label>

      <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
        {isEdit ? "Update Biodata" : "Simpan Biodata"}
      </button>
    </form>
  );
}

/* ================= COMPONENT KECIL ================= */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-xs font-semibold text-gray-600">{label}</label>
      <div className="w-full border-black border p-2 rounded-lg [&>input,&>select,&>textarea]:border [&>input,&>select,&>textarea]:rounded-lg [&>input,&>select,&>textarea]:px-3 [&>input,&>select,&>textarea]:py-2">
        {children}
      </div>
    </div>
  );
}
