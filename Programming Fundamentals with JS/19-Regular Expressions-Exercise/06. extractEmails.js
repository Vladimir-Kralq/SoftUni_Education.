function extractEmails(text) {
  const pattern =
    /(^|(?<=\s))(([a-zA-Z0-9]+[\.\-_]?)*[a-zA-Z0-9]+)@(([a-zA-Z]+-?)*[a-zA-Z]+\.)+([a-zA-Z]+-?)*[a-zA-Z]+/g;

  const matches = text.match(pattern);

  if (matches) {
    console.log(matches.join("\n"));
  }
}

extractEmails("Please contact us at: support@github.com.");
extractEmails(
  "Just send email to s.johnson@softuni-bulgaria.org or mike@softuni.bg.",
);
