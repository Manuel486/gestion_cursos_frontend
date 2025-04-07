
import { useState } from "react";

export const useCourseActions = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return {
    statusFilter,
    setStatusFilter,
    searchQuery,
    setSearchQuery,
  };
};
