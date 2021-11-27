import "./styles/Dashboard.scss";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [userName, setUserName] = useState("");
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
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <section className="dashSection">
      <div className="contentBox">
        <h1>Welcome {userName}</h1>
        <table className="contentTable">
          <thead>
            <tr>
              <th>ORIGINAL LINK</th>
              <th>CONVERTED LINK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abcefghijk</td>
              <td>Casdasdasdas</td>
            </tr>
            <tr>
              <td>TAASFASFASF</td>
              <td>asdakmdoaknsdoanosd</td>
            </tr>
            <tr>
              <td>asodpasjdpoajdp</td>
              <td>asdkancxlkanlcnal</td>
            </tr>
            <tr>
              <td>popoaspdoapsodpa</td>
              <td>ASDAsdaskdpaskdpkas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
