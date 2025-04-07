"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
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
    defaultValues: defaultValues || {
      nombre: "",
      descripcion: "",
      fecha_inicio: undefined,
      fecha_fin: undefined,
      activo: true,
    },
  });

  const {
    register,
    control,
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
          <Controller
            name="fecha_inicio"
            control={control}
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Seleccionar fecha</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          {errors.fecha_inicio && (
            <p className="text-sm text-red-500">
              {errors.fecha_inicio.message}
            </p>
          )}
        </div>

        <div>
          <Label className="mb-2">Fecha de Fin *</Label>
          <Controller
            name="fecha_fin"
            control={control}
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Seleccionar fecha</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
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
