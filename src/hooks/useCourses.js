import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from "@/actions/course-actions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const formatDate = (date) => {
  if (date) {
    return date.toISOString().split('T')[0];
  }
  return null;
};

export const useCourses = () => {
  const queryClient = useQueryClient();

  const coursesQuery = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    onError: () => {
      toast.error("Hubo un error al obtener los cursos");
    },
  });

  const createMutation = useMutation({
    mutationFn: (data) => {
      const formattedData = {
        ...data,
        fecha_inicio: formatDate(data.fecha_inicio),
        fecha_fin: formatDate(data.fecha_fin),
      };
      return createCourse(formattedData);
    },
    onSuccess: () => {
      toast.success("Curso creado");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("Hubo un error al crear el curso");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data) => {
      const { id, ...courseData } = data;
      const formattedData = {
        ...courseData,
        fecha_inicio: formatDate(data.fecha_inicio),
        fecha_fin: formatDate(data.fecha_fin),
      };
      return updateCourse(id, formattedData);
    },
    onSuccess: () => {
      toast.success("Curso actualizado");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("Hubo un error al actualizar el curso");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => {
      return deleteCourse(id);
    },
    onSuccess: () => {
      toast.success("Curso eliminado");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("Hubo un error al eliminar el curso");
    },
  });

  const useCourse = (id) =>
    useQuery({
      queryKey: ["course", id],
      queryFn: () => getCourseById(id),
      enabled: !!id,
      onError: () => {
        toast.error("Hubo un error al obtener el curso");
      },
    });

  return {
    coursesQuery,
    createMutation,
    updateMutation,
    deleteMutation,
    useCourse,
  };
};
