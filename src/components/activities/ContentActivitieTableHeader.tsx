import React from "react";
import { TableHead, TableRow } from "../ui/table";

const ContentActivitieTableHeader = () => {
  return (
    <TableRow>
      <TableHead className="w-72 ">Judul Kegiatan</TableHead>
      <TableHead className="">Nama Proyek</TableHead>
      <TableHead className="">Tanggal Mulai</TableHead>
      <TableHead className="">Tanggal Berakhir</TableHead>
      <TableHead className="">Waktu Mulai</TableHead>
      <TableHead className="">Waktu Berakhir</TableHead>
      <TableHead className="">Durasi</TableHead>
      <TableHead className="">Aksi</TableHead>
    </TableRow>
  );
};

export default ContentActivitieTableHeader;
