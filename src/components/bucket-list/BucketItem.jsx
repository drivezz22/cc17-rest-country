import React, { useState } from "react";

function BucketItem({ data, buckerList, setBuckerList }) {
  const [newText, setNewText] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const deleteBucketList = (countryName) => {
    const filterOut = buckerList.filter((c) => c.name !== countryName);
    setBuckerList(filterOut);
  };

  const editBucketList = () => {
    if (isEdit === false) {
      setIsEdit(true);
      setNewText((d) => data.text);
    } else {
      const newData = buckerList.map((c) => {
        if (c.name === data.name) {
          return { ...c, text: newText };
        }
        return c;
      });
      setBuckerList(newData);
      setIsEdit(false);
    }
  };

  return (
    <div className="favorite__list--item">
      {isEdit ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <p>
          {data.name} : {data.text}
        </p>
      )}
      <div className="favorite__list--btn">
        <button onClick={editBucketList}>edit</button>
        <button onClick={() => deleteBucketList(data.name)}>delete</button>
      </div>
    </div>
  );
}

export default BucketItem;
