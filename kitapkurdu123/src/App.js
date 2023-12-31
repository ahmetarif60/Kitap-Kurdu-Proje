import { useState } from "react";
import Header from "./companents/header/header";
import { toast } from "react-toastify";
function App() {
  const [bookName, setBookName] = useState("");

  const handleChange = (e) => {
    //console.log(e.target.value)
    setBookName(e.target.value);
  };
  //console.log("statedeki kitap", bookName);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("form fonksiyonu");
  };

  if (!bookName) {
    toast.warn("Lütfen Kitap İsmi giriniz", { autoClose: 2000 });
  }

  return (
    <div>
      <Header />

      <div className="container">
        <form className="d-flex gap-3 mt-4" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Bir Kitap İsmi Giriniz"
            className="form-control shadow"
            type="text"
          />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default App;
