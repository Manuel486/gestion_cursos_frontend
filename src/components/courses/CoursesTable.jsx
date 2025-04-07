"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const CoursesTable = ({ courses, onDelete }) => {
  const [courseIdToDelete, setCourseIdToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    setCourseIdToDelete(id);
  };

  const handleDeleteConfirm = () => {
    if (courseIdToDelete) {
      onDelete(courseIdToDelete);
    }
  };

  return (
    <>
      <Table className="border rounded-md shadow-md">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Fecha de Inicio</TableHead>
            <TableHead>Fecha de Fin</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={course.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{course.nombre}</TableCell>
              <TableCell>
                <div className="max-h-32 overflow-auto break-words whitespace-normal">
                  <p>{course.descripcion}</p>
                </div>
              </TableCell>

              <TableCell>{course.fecha_inicio}</TableCell>
              <TableCell>{course.fecha_fin}</TableCell>
              <TableCell>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    course.activo
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {course.activo ? "Activo" : "Inactivo"}
                </span>
              </TableCell>
              <TableCell>
                <Link href={`/courses/${course.id}/edit`}>
                  <Button variant="outline" size="sm" className="mr-2">
                    <PencilIcon className="h-4 w-4" />
                    Editar
                  </Button>
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteClick(course.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                      Eliminar
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        ¿Estás seguro de que deseas eliminar este curso? Esta
                        acción no se puede deshacer.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteConfirm}>
                        Confirmar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CoursesTable;
