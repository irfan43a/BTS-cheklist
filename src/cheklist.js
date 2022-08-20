import React, { useEffect, useState } from "react";
import axios from "axios";

const Cheklist = () => {
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
      //   console.log("data ckelist", result.data.data);
      setGetAllList(result.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  // create list
  const [createList, setCreateList] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setCreateList({
      ...createList,
      [e.target.name]: e.target.value,
    });
  };

  const handleTambah = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://94.74.86.174:8080/api/checklist`,
      data: createList,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        alert("berhasil tambah list");
        console.log(res);
      })
      .catch((e) => {
        alert(e.response.data.message);
        alert("gagal tambah data");
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, handleTambah]);
  console.log("darigetall", getAllList);
  return (
    <div>
      <div>
        <h1>cheklist</h1>
        <div>
          <input type="text" name="name" onChange={handleChange} />
          <button onClick={handleTambah}>tambah</button>
        </div>
      </div>
      <div>
        <h4>Data list</h4>
        <div>
          {getAllList?.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cheklist;
