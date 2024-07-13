const webpush = require("web-push");
const vapidKeys = {
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dx2LkhzlAU8:APA91bGa3nxx3F1kLKINcJHvNug4RpdzOm5wbCjUphS_30pw-TbjW7jwYrv68iaq4vBjYUjqbAVZNlGxWTQIM0CopSIEIpb00t3MdqqKeS459ElO3uSPaMZn4foM7lIRyl7vm74c7sXw",
  expirationTime: null,
  keys: {
    p256dh:
      "BFG9QGLvHbF26S6RBlL85WxxjCgJy-a4rC7rBf1brK4XkDNcoWN1NLQEIXKqIwq9ZpHyyvBAdZoQlJZakPESAI4",
    auth: "hFAyYx_5qtRzDIcCqUUcqw",
  },
};
const payload = {
  notification: {
    data: { url: "http://localhost:8080/" },
    title: "hello rahul",
    vibrate: [100, 50, 100],
  },
};
webpush.sendNotification(sub, JSON.stringify(payload)).then().catch();
