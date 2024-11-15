import { useState } from 'react';
import PropTypes from 'prop-types';

function AddressBookForm({ addBook }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!firstName) errors.firstName = 'The first name is required';
    if (!lastName) errors.lastName = 'The last name is required';
    if (!phone) errors.phone = 'The phone is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addBook(firstName, lastName, phone);
      setFirstName('');
      setLastName('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <button type="submit" className="btn">Add Contact</button>
    </form>
  );
}

AddressBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddressBookForm;
