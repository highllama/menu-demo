// Handle the push event
self.addEventListener("push", (event) => {
  let data = { title: "New Notification", body: "You have a new message!" };
  console.log(event);
  if (event.data) {
    data = event.data.json();
  }

  const options = {
    body: data.body,
    icon: data.icon || "/512.png",
    badge: data.badge || "/512.png",
    data: {
      url: data.url || "/menu", // Custom data to open a specific link
    },
    requireInteraction: true,
  };

  console.log(data);
  console.log(options);

  event.waitUntil(self.registration.showNotification(data.title, options));
});

// Handle notification click (redirect user to the app)
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
