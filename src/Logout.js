import { useEffect } from "react";
import { useHistory } from "react-router";

export const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <h1>Logout</h1>;
};
