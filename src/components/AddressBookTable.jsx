import PropTypes from 'prop-types';
import AddressBookRow from './AddressBookRow';

function AddressBookTable({ books, editBook, searchQuery }) {
  const filteredBooks = books.filter((book) =>
    Object.values(book).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      {filteredBooks.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {filteredBooks.map((book) => (
            <AddressBookRow key={book.id} book={book} editBook={editBook} />
          ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

AddressBookTable.propTypes = {
  books: PropTypes.array.isRequired,
  editBook: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default AddressBookTable;
