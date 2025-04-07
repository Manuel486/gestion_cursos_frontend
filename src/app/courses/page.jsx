"use client";

import CoursesFilter from "@/components/courses/CoursesFilter";
import CoursesSearch from "@/components/courses/CoursesSearch";
import CoursesTable from "@/components/courses/CoursesTable";
import { useCourseActions } from "@/hooks/useCourseAction";
import { useCourses } from "@/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const CoursesPage = () => {
  const router = useRouter();
  const { coursesQuery, deleteMutation } = useCourses();
  const { statusFilter, setStatusFilter, searchQuery, setSearchQuery } =
    useCourseActions();

  const filteredCourses =
    coursesQuery.data?.filter((course) => {
      const matchesSearch = course.nombre
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "activo" ? course.activo : !course.activo);
      return matchesSearch && matchesStatus;
    }) || [];

  const handleCreate = () => {
    router.push("/courses/new");
  };

  return (
    <>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-6 grid grid-cols-12 gap-3">
          <div className="col-span-8">
            <CoursesSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="col-span-4 flex items-center" >
            <CoursesFilter
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </div>
        </div>

        <div className="col-span-6 flex justify-end">
          <Button
            className="text-black whitespace-nowrap"
            variant="outline"
            onClick={handleCreate}
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Crear Curso
          </Button>
        </div>
      </div>

      <CoursesTable
        courses={filteredCourses}
        onDelete={(id) => deleteMutation.mutate(id)}
      />
    </>
  );
};

export default CoursesPage;
