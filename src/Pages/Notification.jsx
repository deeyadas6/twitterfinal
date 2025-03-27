import React, { useState, useMemo, memo } from "react";
import { Card, Button } from "react-bootstrap";

const notifications = [
  { user: "@raj._.hey", message: "New comment on your post", time: "2m ago" },
  { user: "@one._.style", message: "You have a new follower", time: "5m ago" },
  { user: "@front._.garden", message: "Your tweet got likes", time: "10m ago" },
  { user: "@David_dcosta", message: "New message from John", time: "15m ago" },
  { user: "@Evelyn.marie", message: "You have a new follower", time: "30m ago" },
  { user: "@Franklin.mrs", message: "Your tweet got likes", time: "1h ago" },
  { user: "@Grace.reeya", message: "Your tweet got likes", time: "2h ago" },
  { user: "@Hannah.Montana", message: "You have a new follower", time: "3h ago" },
];

const NotificationItem = memo(({ notification }) => (
  <Card className="mb-2 shadow-sm">
    <Card.Body>
      <div className="d-flex justify-content-between">
        <strong>{notification.user}</strong>
        <small className="text-muted">{notification.time}</small>
      </div>
      <p className="mb-0">{notification.message}</p>
    </Card.Body>
  </Card>
));

export default function Notifications() {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleNotifications = useMemo(
    () => notifications.slice(0, visibleCount),
    [visibleCount]
  );

  return (
    <div className="container mt-3">
      {visibleNotifications.map((notification, index) => (
        <NotificationItem key={notification.user} notification={notification} />
      ))}

      {visibleCount < notifications.length && (
        <Button
          variant="primary"
          className="w-100 mt-2"
          onClick={() => setVisibleCount(notifications.length)}
        >
          Show All
        </Button>
      )}
    </div>
  );
}
