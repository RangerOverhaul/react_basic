import React, { FC, useEffect, useState } from "react";
import { list } from "../context/axiosContext";
import Main from '../Layouts/main'


interface OwnProps {}

const List: FC<OwnProps> = (props) => {
  const [user_list, set_user_list] = useState<any[]>([]);
  useEffect(() => {
    list(1)
      .then((response) => {
        set_user_list(response?.data?.data);
      })
      .catch((e) => {
        console.log("Error", { ...e });
      });
  }, []);
  return (
      <Main>
          <h1> Axios api consumer </h1>
    <div className="card-group">
        <div className="card">
      {user_list.length > 0 && (
        <ul className="list-group list-group-flush" >
            {user_list.map((user, index) => {
                return <li key={`user_${index}`} className="list-group-item">
                    <span className="card-title" >{user.first_name} {user.last_name}</span> <br></br>
                    <img src={user.avatar} alt="User" width={100}/>
                </li>
            })}
        </ul>
      )}
      {user_list.length === 0 && <span>Users no found</span>}
      </div>
    </div>
    </Main>
  );
};

export default List;