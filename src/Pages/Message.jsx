import React, { memo, useMemo } from "react";
import { ListGroup, Image } from "react-bootstrap";

const messages = [
  { user: "@Alice.grace", text: "Hey! How are you?", time: "2m ago", avatar: "https://i.pravatar.cc/40?img=1" },
  { user: "@Bob.marley", text: "Did you check the latest update?", time: "10m ago", avatar: "https://i.pravatar.cc/40?img=2" },
  { user: "@Charlie._.puth", text: "Let's meet at 5 PM.", time: "30m ago", avatar: "https://i.pravatar.cc/40?img=3" },
  { user: "@David.dcosta", text: "Can you send me the report?", time: "1h ago", avatar: "https://i.pravatar.cc/40?img=4" },
  { user: "@Evelyn.reeya", text: "Great job on the project!", time: "3h ago", avatar: "https://i.pravatar.cc/40?img=5" },
];


const MessageItem = memo(({ msg }) => (
  <ListGroup.Item className="d-flex align-items-center">
    <Image src={msg.avatar} roundedCircle className="me-3" width={40} height={40} loading="lazy" />
    <div className="flex-grow-1">
      <div className="d-flex justify-content-between">
        <strong>{msg.user}</strong>
        <small className="text-muted">{msg.time}</small>
      </div>
      <p className="mb-0 text-truncate">{msg.text}</p>
    </div>
  </ListGroup.Item>
));

export default function MessageNotifications() {
  const memoizedMessages = useMemo(() => messages, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center">Messages</h1>
      <ListGroup>
        {memoizedMessages.map((msg) => (
          <MessageItem key={msg.user} msg={msg} />
        ))}
      </ListGroup>
    </div>
  );
}
