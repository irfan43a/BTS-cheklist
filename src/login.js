import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  // login
  const [form, setform] = useState({
    username: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://94.74.86.174:8080/api/login`, form)
      .then((result) => {
        const token = result.data.data.token;
        localStorage.setItem("token", token);
        console.log(token);
        // localStorage.setItem("token", token);
        alert("login succes");
      })
      .catch((e) => {
        alert("gagal login");
      });
  };

  // register
  const [formRegister, setformRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`http://94.74.86.174:8080/api/register`, formRegister)
      .then(() => {
        alert("berhasil login");
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };

  // getlist
  const [getAllList, setGetAllList] = useState();
  const token = localStorage.getItem("token");
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: "http://94.74.86.174:8080/api",
        url: "/checklist",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data);
      // setGetAllList(result)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, [handleLogin]);

  return (
    <div className="page">
      <div>
        <h1>register</h1>
        <div>
          <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="username" onChange={handleChangeLogin} />
            <input type="password" name="password" placeholder="password" onChange={handleChangeLogin} />
            <button>login</button>
          </form>
        </div>
      </div>
      <div>
        <h1>login</h1>
        <div>
          <form onsubmit={handleRegister}>
            <input type="email" name="email" placeholder="email" onChange={handleChange} />
            <input type="password" name="password" placeholder="password" onChange={handleChange} />
            <input type="text" name="username" placeholder="username" onChange={handleChange} />
            <button>register</button>
          </form>
        </div>
      </div>
      {/* <div>
        <h1>cheklist</h1>
        <div>
          <label>
            <input type="text" />
            <button>tambah</button>
          </label>
        </div>
      </div>
      <div>
        <h4>Data list</h4>
        <div>
          {getAllList?.map((item) => (
            <div>
              name:{item.name}
              items:{item.items}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Login;
