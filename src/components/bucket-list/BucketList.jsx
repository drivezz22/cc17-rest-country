import React, { useState } from "react";
import BucketItem from "./BucketItem";

function BucketList({ buckerList, setBuckerList }) {
  return (
    <section className="favorite__list">
      <div>
        <h1>My Bucket List</h1>
      </div>
      <div className="favorite__list--all">
        {buckerList.length > 0 &&
          buckerList.map((b) => (
            <BucketItem
              data={b}
              buckerList={buckerList}
              setBuckerList={setBuckerList}
              key={b.name}
            />
          ))}
      </div>
    </section>
  );
}

export default BucketList;
