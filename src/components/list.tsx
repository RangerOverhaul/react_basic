import React, { FC, ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions"
import Main from '../Layouts/main'


interface OwnProps {
    list: any[];
    listUsers: Function;
    list_is_loading: boolean;
    page: number;
  }
  
  interface User {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }
  
  export interface Action {
    type: string;
    payload: any;
    error?: any;
  }
  
  const action = {
    type: "depositar",
    payload: 10,
  };
  
  const List: FC<OwnProps> = (props) => {
    const { list, listUsers, list_is_loading, page } = props;
  
    console.log({ list, listUsers, list_is_loading });
  
    useEffect(() => {
      // listUsers(1);
    }, []);
  
    return (
        <Main>
      <div>
        <div className="container">
          <div className="row">
            <button
              onClick={function (e) {
                listUsers(page === 1 ? 2 : 1);
              }}
            >
              cargar pagina
            </button>
            {list_is_loading && <span>Loading ...</span>}
            {!list_is_loading && (
              <div className="col-md-8">
                {list?.length > 0 && (
                  <div className="people-nearby">
                    {list.map((user, index) => {
                      return (
                        
                        <div className="nearby-user" key={`user_${index}`} >
                          <div className="row">
                            <div className="col-md-2 col-sm-2">
                              <p> HEX: {user.color}</p>
                            </div>
                            <div className="col-md-7 col-sm-7">
                              <h5>
                                <span className="profile-link">
                                 color: {user.name} , year: {user.year}
                                </span>
                              </h5>
                              <p>{user.pantone_value}</p>
                              
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {list?.length === 0 && <span>Users no found</span>}
              </div>
            )}
          </div>
        </div>
      </div>
      </Main>
    );
  };
  
  const mapStateToProps = (store: any) => ({
    list: store.users.list,
    list_is_loading: store.users.list_is_loading,
    page: store.users.page,
  });
  const mapDispatchToProps = (dispatch: Function) => ({
    listUsers: (page: number) => dispatch(actions.ListUsers(page)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(List);