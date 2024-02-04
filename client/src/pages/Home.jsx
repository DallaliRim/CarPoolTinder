import { NavLink } from "react-router-dom";
import "./home.css";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContexteProvider";
import { ACTIONS } from "../reducers/reducer";
import * as FetchModule from "../assets/js/FetchModule"

function Home() {
  const { state, dispatch } = useContext(ProfileContext);
  const [users, setUsers] = useState([{
    username: "empty",
    firstname: "empty",
    lastname: "empty",
    email: "empty"
  }])

  const testfunc = () => {
    dispatch({
      type: ACTIONS.UPDATE_USER,
      payload: {
        user: {
          email: "newemail@example.com",
          location: {
            country: "New Country",
          },
        },
      },
    });
  };

  useEffect(() => {
    (async () => {
      const url = "/api/test";
      const data = await FetchModule.postData(url, undefined, "POST");
      console.log(data)
      if (data) {
        setUsers([...data])
      }
    })();
  }, []);

  return (
    <div className="home">
      <p>
        {console.log(state)}
        <li>
          <NavLink className="navlink" to="/create-account">
            Create Accounts
          </NavLink>
        </li>{" "}
      </p>
      <div>
        test email : {state.user.email} & country :{state.user.location.country}{" "}
        & province: {state.user.location.province}
      </div>
      <div onClick={testfunc} style={{ backgroundColor: "red" }}>
        button
      </div>
      {
        users.map((user, i) => {
          return (<div key={i}>
            <p>firstname: {user.firstname}</p>
          </div>)
        })
      }
    </div>
  );
}

export default Home;
