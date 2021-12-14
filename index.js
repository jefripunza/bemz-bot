require("./app/WhatsApp");
require("./app/Express");

require("./manage/BOT");
require("./manage/Server");

const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args))

setInterval(async () => {
  const res = await fetch("https://bot.bambang-e-saputra.repl.co/", {
    headers: { "User-Agent": "okhttp/4.5.0" },
    method: "GET",
  });
  // console.log("masih hidup...", { status: res.status });
}, 1000);
