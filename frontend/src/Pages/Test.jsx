import React, { useEffect, useState } from "react";

export const Test = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true);
    try {
      const API = "https://randomuser.me/api/";
      const response = await fetch(API);
      const data = await response.json();
      setUserData(data?.results[0]);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      <button onClick={fetchData}>FetchData</button>
      {loading ? <p>loading</p> : (
        <div>
        <div>{userData?.gender}</div>
        <div>{userData?.phone}</div>
        <div>{userData?.email}</div>
        <div>
            <img src={userData?.picture.large} alt="" />
        </div>
        </div>
      )}
    </div>
  );
};
