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
      console.log(result.data);
      // setGetAllList(result)
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
      </div>
    </div>
  );
};

export default Cheklist;
