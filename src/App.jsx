import { useState } from 'react';
import AddressBookForm from './components/AddressBookForm';
import AddressBookTable from './components/AddressBookTable';
import Search from './components/Search';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const addBook = (firstName, lastName, phone) => {
    const newBook = { id: nextId, firstName, lastName, phone };
    setBooks([...books, newBook]);
    setNextId(nextId + 1);
  };

  const editBook = (editedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === editedBook.id ? editedBook : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <h1 className="h1">Address Book</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <AddressBookForm addBook={addBook} />
      <AddressBookTable books={books} editBook={editBook} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
