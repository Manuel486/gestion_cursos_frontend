
const CoursesSearch = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Buscar por nombre de curso"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
    );
  };
  
  export default CoursesSearch;
  