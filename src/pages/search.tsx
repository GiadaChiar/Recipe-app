import "../style/global.scss";
import SearchBar from "../components/searchbar";
import FiltersCollapse from "../components/filterCollapse";





function Search() {
  //function to send clicked to first button send

  return (
    <>
      <div id ="green_background">
        <div style={{ marginTop: "100px" }}>
          <h1>Are you ready to cook?</h1>
        </div>

        <SearchBar />

        <FiltersCollapse />
        
    </div>
    </>
  );
}







export default Search;
