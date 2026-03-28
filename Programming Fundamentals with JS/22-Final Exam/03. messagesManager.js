function messagesManager(input) {
  let capacity = Number(input.shift());
  let users = {};

  let line = input.shift();

  while (line !== "Statistics") {
    let tokens = line.split("=");
    let command = tokens[0];

    if (command === "Add") {
      let username = tokens[1];
      let sent = Number(tokens[2]);
      let received = Number(tokens[3]);

      if (!users.hasOwnProperty(username)) {
        users[username] = { sent: sent, received: received };
      }
    } else if (command === "Message") {
      let sender = tokens[1];
      let receiver = tokens[2];

      if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
        users[sender].sent++;
        users[receiver].received++;

        if (users[sender].sent + users[sender].received >= capacity) {
          console.log(`${sender} reached the capacity!`);
          delete users[sender];
        }

        if (
          users[receiver] &&
          users[receiver].sent + users[receiver].received >= capacity
        ) {
          console.log(`${receiver} reached the capacity!`);
          delete users[receiver];
        }
      }
    } else if (command === "Empty") {
      let username = tokens[1];
      if (username === "All") {
        users = {};
      } else if (users.hasOwnProperty(username)) {
        delete users[username];
      }
    }

    line = input.shift();
  }

  let usernames = Object.keys(users);
  console.log(`Users count: ${usernames.length}`);

  for (let user of usernames) {
    let totalMessages = users[user].sent + users[user].received;
    console.log(`${user} - ${totalMessages}`);
  }
}

messagesManager([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);
