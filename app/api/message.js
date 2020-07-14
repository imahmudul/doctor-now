import client from "./client";

const sent = (message, listingId) =>
  client.post("/message", {
    message,
    listingId
  });

export default {
  send,
};