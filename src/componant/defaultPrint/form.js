import React, { useEffect, useState } from "react";

function Form(props) {
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState();
  const [company, setCompany] = useState("");
  useEffect(() => {
    console.log(country);
  }, [country]);
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

        <select
          name="country"
          id="country"
          className={`${classDefault}`}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option value="">Please choose a country</option>
          <option value="france">France</option>
          <option value="usa">USA </option>
          <option value="england">England</option>
          <option value="italy">Italy</option>
        </select>
        {/* FirstName */}
        <div className="flex">
          <label>First Name</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          name="firstname"
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
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
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
          className={`${classDefault}`}
        />
        {/* Company Name */}
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          onChange={(e) => {
            setCompany(e.currentTarget.value);
          }}
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
          onChange={(e) => {
            setAdress(e.currentTarget.value);
          }}
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
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
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
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          className={`${classDefault}`}
        />
        {/* Phone */}
        <div className="flex">
          <label>Number</label>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="number"
          name="phone"
          className={`${classDefault}`}
          onChange={(e) => {
            setNumber(e.currentTarget.value);
          }}
        />
      </form>
    </div>
  );
}

export default Form;
