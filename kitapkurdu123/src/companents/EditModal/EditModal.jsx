import React from "react";

const EditModal = ({setShowEditModal}) => {
  return (
    <div className="modal-wrapperr">
      <div className="modall">
        <h5>Kitap İsmini Düzenle</h5>
        <input type="text" value={"Kitap Adı"} className="form-control" />
        <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary">Kaydet</button>
            <button onClick={()=>setShowEditModal(false)} className="btn btn-warning">Vazgeç</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
