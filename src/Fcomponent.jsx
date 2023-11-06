import React, { useState, forwardRef } from "react";
let Counter = 0;
const Fcomponent = (prop, ref) => {
  const [Name, setName] = useState("");
  const handleChangeName = () => {
    setName(ref.current.value);
  };
  return (
    <div className="form-fa-group text-center mt-4 p-3">
      <h4 className="text-center text-dark">حدث کلمه</h4>
      <input
        ref={ref}
        type="text"
        className="form-control"
        autoComplete="off"
      />
      <button className="btn btn-warning my-3" onClick={handleChangeName}>
        ثبت
      </button>
      <button
        className="btn btn-secondary my-3 mx-2"
        onClick={() => {
          ref.current.value = "";
        }}
      >
        مخفی
      </button>
      <br />
      <span>{Counter++}</span>
    </div>
  );
};
export default forwardRef(Fcomponent);
