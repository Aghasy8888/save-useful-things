import React from "react";
import * as constants from "./costants";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export default function Status(props: StatusProps) {
  const { loading, success, error } = constants;

  function setMessage() {
    switch (props.status) {
      case loading:
        return "Loading...";

      case success:
        return "Data fetched successfully!";

      case error:
        return "Error fetching data";

      default:
        return;
    }
  }

  let message = setMessage();

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}
