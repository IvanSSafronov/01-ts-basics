let status: { status: "loading" | "success" | "error" }
function logStatus(status: { status: "loading" | "success" | "error" }) {
  if (status.status === "loading") {
    console.log("Loading...");
  } else if (status.status === "success") {
    console.log("Success!");
  } else if (status.status === "error") {
    console.log("Something went wrong");
  }
}

logStatus({ status: "loading" });
logStatus({ status: "success" });
logStatus({ status: "error" });
