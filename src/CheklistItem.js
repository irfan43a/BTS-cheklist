import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CheklistItem = () => {
  const { id } = useParams();
  // getlist
  const [getAllItemList, setGetAllItemList] = useState();
  const token = localStorage.getItem("token");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: `http://94.74.86.174:8080/api`,
        url: `/checklist/${id}/item`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log("data ckelist", result.data.data);
      setGetAllItemList(result.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  // create list
  const [createList, setCreateList] = useState({
    itemName: "",
  });
  const handleChange = (e) => {
    setCreateList({
      ...createList,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleTambah = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://94.74.86.174:8080/api/checklist/${id}/item`,
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

  // deletelist
  const deletelist = (idItem) => {
    axios({
      method: "DELETE",
      url: `http://94.74.86.174:8080/api/checklist/${id}/item/${idItem}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        alert("data list dihapus");
      })
      .catch((error) => {
        alert("data gagal dihapus");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1>cheklist</h1>
        <div>
          <input type="text" name="itemName" onChange={handleChange} />
          <button onClick={handleTambah}>tambah</button>
        </div>
      </div>
      <div>
        <h4>Data list</h4>
        <div>
          {getAllItemList?.map((item) => (
            <div key={item.id} id={item.id}>
              <Link to={`/cheklisitem/${item.id}`}>{item.name}</Link>
              <button onClick={() => deletelist(item.id)}>Delete</button>
              <button>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheklistItem;
