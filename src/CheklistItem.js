import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1>cheklist</h1>
        <div>
          {/* <input type="text" name="name" onChange={handleChange} /> */}
          {/* <button onClick={handleTambah}>tambah</button> */}
        </div>
      </div>
      <div>
        <h4>Data list</h4>
        <div>
          {getAllItemList?.map((item) => (
            <div key={item.id} id={item.id}>
              {item.name}
              {/* <button onClick={() => deletelist(item.id)}>Delete</button>
              <button>Edit</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheklistItem;
