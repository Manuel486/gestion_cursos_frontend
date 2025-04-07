"use client";

import { useRouter } from 'next/navigation';
import CoursesForm from "@/components/courses/CoursesForm";
import { useCourses } from "@/hooks/useCourses";

const NewCoursePage = () => {
  const { createMutation } = useCourses();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    createMutation.mutate(data, {
      onSuccess: () => {
        router.push("/courses");
      },
    });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Crear Curso</h2>
      <CoursesForm onSubmit={onSubmit} />
    </>
  );
};

export default NewCoursePage;
