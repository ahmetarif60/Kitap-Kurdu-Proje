import React from "react";

const Card = ({bookInfo,handleModal,handleEditModal}) => {
  //console.log(props);
  const {title,date,isRead,id}=bookInfo
  return (
    <div className="d-flex justify-content-between align-items-center p-3 mt-5 border rounded shadow">
      <div>
        <h5
          style={{
            textDecoration: isRead ? "line-through" : "none",
          }}
        >
          {title}
        </h5>

        <p>{date}</p>
      </div>

      <div className="btn-group">
        <button onClick={()=>handleModal(id,title)} className="btn btn-danger">sil</button>

        <button onClick={()=>handleEditModal} className="btn btn-primary">düzenle</button>
        <button className="btn btn-success">
          {isRead === true ? "Okundu" : "Okunmadı"}
        </button>
      </div>
    </div>
  );
};

export default Card;
