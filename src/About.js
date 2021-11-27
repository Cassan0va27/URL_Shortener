import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./styles/About.scss";

export const About = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const fetchUserInfo = async () => {
    try {
      const serverResponse = await fetch("/user/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const serverData = await serverResponse.json();
      setUserName(serverData.name);
      setUserEmail(serverData.email);
    } catch (error) {
      console.log(error);
      history.push("/loading");
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <section>
      <div className="contentBox">
        <h1>{userName !== "" && userName}</h1>
        <h1>{userEmail !== "" && userEmail}</h1>
      </div>
      <hr />
      <div className="contentBox">
        <h1>Jai Shree ram</h1>
      </div>
    </section>
  );
};
