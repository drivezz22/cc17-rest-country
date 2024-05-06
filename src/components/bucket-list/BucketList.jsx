import React from "react";

function BucketList() {
  return (
    <section className="favorite__list">
      <div>
        <h1>My Bucket List</h1>
      </div>
      <div className="favorite__list--all">
        <div className="favorite__list--item">
          <p>Thailand : I want to go in 2025</p>
          <button>delete</button>
        </div>
      </div>
    </section>
  );
}

export default BucketList;
