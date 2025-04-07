"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const courseSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  descripcion: z.string().optional(),
  fecha_inicio: z.date({ required_error: "La fecha de inicio es obligatoria" }),
  fecha_fin: z.date({ required_error: "La fecha de fin es obligatoria" }),
  activo: z.boolean().default(true),
});

const CoursesForm = ({ onSubmit, defaultValues }) => {
  const form = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      nombre: defaultValues?.nombre || "",
      descripcion: defaultValues?.descripcion || "",
      fecha_inicio: defaultValues?.fecha_inicio
        ? new Date(defaultValues.fecha_inicio).toISOString().split("T")[0] // Convert to YYYY-MM-DD format
        : "",
      fecha_fin: defaultValues?.fecha_fin
        ? new Date(defaultValues.fecha_fin).toISOString().split("T")[0] // Convert to YYYY-MM-DD format
        : "",
      activo: defaultValues?.activo || true,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const router = useRouter();

  const handleGoBack = () => {
    router.push("/courses");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded-xl shadow-md"
    >
      <div>
        <Label className="mb-2">Nombre *</Label>
        <Input {...register("nombre")} />
        {errors.nombre && (
          <p className="text-sm text-red-500">{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-2">Descripción</Label>
        <Textarea {...register("descripcion")} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-2">Fecha de Inicio *</Label>
          <input
            type="date"
            {...register("fecha_inicio", {
              setValueAs: (v) => {
                const date = new Date(v);
                return isNaN(date) ? undefined : date; // Convert to Date object
              },
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fecha_inicio && (
            <p className="text-sm text-red-500">{errors.fecha_inicio.message}</p>
          )}
        </div>

        <div>
          <Label className="mb-2">Fecha de Fin *</Label>
          <input
            type="date"
            {...register("fecha_fin", {
              setValueAs: (v) => {
                const date = new Date(v);
                return isNaN(date) ? undefined : date; // Convert to Date object
              },
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fecha_fin && (
            <p className="text-sm text-red-500">{errors.fecha_fin.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          checked={watch("activo")}
          onCheckedChange={(checked) => setValue("activo", checked)}
        />
        <Label>Activo</Label>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 items-center">
        <Button type="submit" className="w-full max-w-md">
          Guardar Curso
        </Button>

        <Button
          type="button"
          className="w-full max-w-md"
          variant="outline"
          onClick={handleGoBack}
        >
          Regresar a Cursos
        </Button>
      </div>
    </form>
  );
};

export default CoursesForm;
