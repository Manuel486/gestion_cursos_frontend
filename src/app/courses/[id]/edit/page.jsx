"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import CoursesForm from "@/components/courses/CoursesForm";
import { useCourses } from "@/hooks/useCourses";
import { ArrowPathIcon } from "@heroicons/react/24/outline"; 

const EditCoursePage = () => {
  const params = useParams();
  const id = params.id?.toString();
  const router = useRouter();

  const { useCourse, updateMutation } = useCourses();
  const { data: course, error, isLoading } = useCourse(id);

  useEffect(() => {
    if (error) {
      router.push("/courses");
    }
  }, [error, router]);

  const onSubmit = (formData) => {
    console.log("actualizandoo")
    const parsedData = {
      ...formData,
      id
    };

    updateMutation.mutate(parsedData, {
      onSuccess: () => router.push("/courses"),
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ArrowPathIcon className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Editar Curso</h2>
      <CoursesForm
        onSubmit={onSubmit}
        defaultValues={{
          ...course,
          fecha_inicio: new Date(course.fecha_inicio),
          fecha_fin: new Date(course.fecha_fin),
        }}
      />
    </>
  );
};

export default EditCoursePage;
