import PropTypes from 'prop-types';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by any field"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Search;
