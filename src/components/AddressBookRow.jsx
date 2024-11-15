import { useState } from 'react';
import PropTypes from 'prop-types';

function AddressBookRow({ book, editBook }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const newErrors = {};
    if (!editedBook.firstName) newErrors.firstName = 'The first name is required';
    if (!editedBook.lastName) newErrors.lastName = 'The last name is required';
    if (!editedBook.phone) newErrors.phone = 'The phone is required';

    if (Object.keys(newErrors).length === 0) {
      editBook(editedBook);
      setIsEditing(false);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={editedBook.firstName}
            onChange={handleChange}
          />
        ) : (
          book.firstName
        )}
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={editedBook.lastName}
            onChange={handleChange}
          />
        ) : (
          book.lastName
        )}
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={editedBook.phone}
            onChange={handleChange}
          />
        ) : (
          book.phone
        )}
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave} className="btn">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn">Edit</button>
        )}
      </td>
    </tr>
  );
}

AddressBookRow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  editBook: PropTypes.func.isRequired,
};

export default AddressBookRow;
