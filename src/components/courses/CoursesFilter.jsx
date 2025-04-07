import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";

const CoursesFilter = ({ statusFilter, setStatusFilter }) => {
  return (
    <Select value={statusFilter} onValueChange={setStatusFilter}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Seleccionar Estado" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="activo">Activo</SelectItem>
          <SelectItem value="inactivo">Inactivo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CoursesFilter;
