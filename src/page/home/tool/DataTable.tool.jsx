import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import SweetAlert2 from "react-sweetalert2";
import { useState } from "react";
import { useDeleteMutation } from "../../../store/service/endpoints/contact.endpoint";
import "sweetalert2/dist/sweetalert2.css";
import { SheetTrigger } from "../../../components/ui/sheet";

const DataTableTool = ({ apiData, handleEdit }) => {
  const [swalProps, setSwalProps] = useState({});
  const [deleteFun, { isLoading, data, isError }] = useDeleteMutation();

  const handleDelete = (id) => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "You want to remove?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "red",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: async () => {
        await deleteFun(id);
        setSwalProps({
          show: false,
        });
      },
    });
  };

  return (
    <div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow className="bg-basic hover:bg-basic">
            <TableHead className="rounded-l-xl">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-end">Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="rounded-r-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiData.map((i) => (
            <TableRow key={i.id} className="bg-[#FCFCFD]">
              <TableCell>{i.id}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell className="text-gray-400">{i.email}</TableCell>
              <TableCell className="text-end text-gray-400">
                {i.phone}
              </TableCell>
              <TableCell className="text-gray-400 w-[300px] text-wrap ">
                {i.address}
              </TableCell>
              <TableCell className="text-xl space-x-5">
                <SheetTrigger>
                  <button onClick={handleEdit.bind(null, i.id)}>
                    <MdOutlineModeEdit />
                  </button>
                </SheetTrigger>
                <button onClick={handleDelete.bind(null, i.id)}>
                  <FaRegTrashAlt className="text-danger" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default DataTableTool;
