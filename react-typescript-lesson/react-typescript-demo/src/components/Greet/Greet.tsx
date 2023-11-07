import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const {messageCount = 0, name, isLoggedIn} = props;
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}. You have ${messageCount} unread messages.`
          : "Welcome guest"}
      </h2>
    </div>
  );
}
