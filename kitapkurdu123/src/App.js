import { useState } from "react";
import Header from "./companents/header/header";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import Card from "./companents/Card/Card";
import DeleteModal from "./companents/DeleteModal/DeleteModal";
function App() {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);
  const [showDeleteModal,setShowDeleteModal]=useState(false)
  const [deleteId,setDeleteId]=useState(null)
  const [deleteTitle,setDeleteTitle]=useState('')
  const handleChange = (e) => {
    //console.log(e.target.value)
    setBookName(e.target.value);
  };
  //console.log("statedeki kitap", bookName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName) {
      toast.warn("Lütfen Kitap İsmi giriniz", { autoClose: 2000 });
      return;
    }

    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    //!console.log("yeni kitap objesi", newBook);
    setBooks([...books, newBook]);

    setBookName("");

    //console.log("form fonksiyonu");
  };
  //! console.log("kitaplar dizisi", books);






  const handleModal = (deleteBookId,deleteBookTitle) => {
   setDeleteId(deleteBookId)
   setDeleteTitle(deleteBookTitle)
    setShowDeleteModal(true)
  }

  const handleDelete=()=>{
    //!console.log('delete fonksiyonu')
  }

  const filteredBooks=books.filter((book)=>book.id !==deleteId)

  console.log(filteredBooks)
  if(0==0){
    setBooks(filteredBooks)
    setShowDeleteModal(false)
    }
  

  return (
    <div>
      <Header />

      <div className="container">
        <form className="d-flex gap-3 mt-4" onSubmit={handleSubmit}>
          <input
            value={bookName}
            onChange={handleChange}
            placeholder="Bir Kitap İsmi Giriniz"
            className="form-control shadow"
            type="text"
          />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>
        {books.length === 0 ? (
          <h4>Henüz Herhangi Bir Kitap Eklenmedi</h4>
        ) : (
          books.map((book) => <Card handleModal={handleModal} bookInfo={book} key={book.id} />)
        )}
      </div>
      {showDeleteModal&&<DeleteModal bookTitle={deleteTitle} handleDelete={handleDelete} setShowDeleteModal={setShowDeleteModal}/>}
    </div>
  );
}

export default App;

