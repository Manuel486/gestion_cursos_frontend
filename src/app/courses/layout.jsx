import { Toaster } from "sonner";

const { default: CoursesNavbar } = require("@/shared/CoursesNavbar");

const CoursesLayout = ({ children }) => {
  return (
    <div className="container mx-auto p-6">
      <CoursesNavbar />
      {children}
      <Toaster />
    </div>
  );
};

export default CoursesLayout;
