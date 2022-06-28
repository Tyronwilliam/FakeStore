import React from "react";

function form(props) {
  const classDefault =
    "max-w-[360px] p-1 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4";
  return (
    <div>
      <form
        action=""
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* Country */}
        <div className="flex">
          <label>Country</label>
          <span className="text-red-500">*</span>
        </div>

        <select name="country" id="country" className={`${classDefault}`}>
          <option value="">Please choose a country</option>
          <option value="dog">France</option>
          <option value="cat">USA </option>
          <option value="hamster">England</option>
          <option value="parrot">Italy</option>
        </select>
        {/* FirstName */}
        <div className="flex">
          <label>First Name</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          name="firstname"
          onChange={(e) => {}}
          className={`${classDefault}`}
        />
        {/* LastName */}
        <div className="flex">
          <label>Last Name</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          name="lastname"
          onChange={(e) => {}}
          className={`${classDefault}`}
        />
        {/* Company Name */}
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          onChange={(e) => {}}
          className={`${classDefault}`}
        />
        {/* Adress */}
        <div className="flex">
          <label>Adress</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          name="adress"
          onChange={(e) => {}}
          className={`${classDefault}`}
        />
        {/* City */}
        <div className="flex">
          <label>City</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          name="city"
          onChange={(e) => {}}
          className={`${classDefault}`}
        />
        {/* email */}
        <div className="flex">
          <label>Email</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          name="email"
          onChange={(e) => {}}
          className={`${classDefault}`}
        />
        {/* Phone */}
        <div className="flex">
          <label>Number</label>
          <span className="text-red-500">*</span>
        </div>
        <input type="number" name="phone" className={`${classDefault}`} />
      </form>
    </div>
  );
}

export default form;
