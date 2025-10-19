function speedInfo(spped) {
  if (spped <= 10) {
    console.log("slow");
  } else if (spped <= 50) {
    console.log("average");
  } else if (spped <= 150) {
    console.log("fast");
  } else if (spped <= 1000) {
    console.log("ultra fast");
  } else {
    console.log("extremely fast");
  }
}

speedInfo(160);
