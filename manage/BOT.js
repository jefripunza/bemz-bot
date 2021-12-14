const path = require("path");
const WhatsApp = require("../app/WhatsApp");

const {
  formatRupiah,
} = require("../helpers/indo")

const bot = new WhatsApp(path.join(__dirname, "session.json"));

const kop_judul = "===== *BEMZ COMPUTER* ====="
const poin_utama = "@"
const poin_list = "*" 
const space = "-----------------------------------------------------------"
const terimakasih = "\n\nTerima Kasih sudah berkunjung..."
const footer = "\n\n└─「 >> _*BEMZ BOT*_ << 」"

function tarifHarga(array) {
  let print = "\n" + space + "\n"
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (item.list) {
      print += poin_utama + " *" + item.judul + "* :\n"
      for (let j = 0; j < item.list.length; j++) {
        const list = item.list[j]
        const harga = typeof list.harga == "number" ? "_" + formatRupiah(list.harga, "Rp.") + "_" : "\n     _" + formatRupiah(list.harga[0], "Rp.") + " - " + formatRupiah(list.harga[1], "Rp.") + "_"
        print += "  " + poin_list + " *" + list.keterangan + "* : " + harga + "\n"
      }
    } else {
      const harga = typeof item.harga == "number" ? "_" + formatRupiah(item.harga, "Rp.") + "_" : "\n  _" +formatRupiah(item.harga[0], "Rp.") + " - " + formatRupiah(item.harga[1], "Rp.") + "_"
      print += poin_utama + " *" + item.judul + "* : " + harga + "\n"
    }
    print += space + "\n"
  }
  return print
}

// https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json

bot.listenMessage(async (receive) => {
  const { isGroup, chat, from, body, readMessage, reply } = receive;
  // console.log({ receive });
  if (!isGroup) { // khusus personal
    // personal chat
    if (String(body).toLowerCase() === "p") {
      await readMessage();
      await reply("budayakan mengucapkan salam ya...\n😁🙏" + footer);
    } else if ([
      "asala",
      "assala",
    ].some((v) => String(body).toLowerCase().startsWith(v))) {
      await readMessage();
      await bot.sendTTS(reply, from, chat, "ar", "wa'alaikumsalam warahmatullahi wabarakatu", () => {
        console.log("ucapkan salam...");
      });
      // =================================================================
    } else if ([
      "halo",
      "hallo",
      "helo",
      "hello",
      "hai",
      "hay",
    ].some((v) => String(body).toLowerCase().split(" ")[0] === v)) {
      await readMessage();
      const sapaan = String(body).split(" ")[0];
      await reply(`${sapaan} juga...` + footer);
    } else if ([
      "bang",
      "bemz",
      "bem",
      "bg",
    ].some((v) => String(body).toLowerCase().startsWith(v))) {
      await readMessage();
      await reply("iya, ada yang bisa dibantu?" + footer);
      // =================================================================
      // =================================================================
      // =================================================================


    } else if ([
      "tarif",
      "biaya",
      "harga",
      "rego",
    ].some(v => {
      return String(body).toLowerCase().includes(v)
    })) {
      
      // ketetapan tarif
      const harga_desain = 25000
      const persegi_spanduk = 35000 // idola agen

      const keuntungan_jual_laptop_baru = 300000
      const keuntungan_jual_laptop_seken = 400000








      await readMessage();
      await reply(kop_judul + tarifHarga([
        // Komputer
        {
          judul: "Service Laptop",
          list: [
            {
              keterangan: "Mati Total Mesin",
              harga: 850000,
            },
            {
              keterangan: "Ganti LCD",
              harga: [850000, 1700000],
            },
          ],
        },
        {
          judul: "Install Ulang",
          harga: 100000,
        },
        {
          judul: "Pasang SSD + Install",
          harga: 650000,
        },
        {
          judul: "Jasa Install Aplikasi",
          harga: [25000, 40000],
        },
        {
          judul: "Harga Laptop Baru",
          list: [
            {
              keterangan: "Core i3",
              harga: [
                keuntungan_jual_laptop_baru + 7000000, 
                keuntungan_jual_laptop_baru + 8500000,
              ],
            },
            {
              keterangan: "Core i5",
              harga: [
                keuntungan_jual_laptop_baru + 8000000,
                keuntungan_jual_laptop_baru + 9000000,
              ],
            },
            {
              keterangan: "Core i7",
              harga: [
                keuntungan_jual_laptop_baru + 10000000, 
                keuntungan_jual_laptop_baru + 15000000,
              ],
            },
            {
              keterangan: "AMD Ryzen Series",
              harga: [
                keuntungan_jual_laptop_baru + 3000000, 
                keuntungan_jual_laptop_baru + 10000000,
              ],
            },
          ],
        },
        {
          judul: "Harga Laptop Seken",
          list: [
            {
              keterangan: "Core i3",
              harga: [
                keuntungan_jual_laptop_seken + 5000000, 
                keuntungan_jual_laptop_seken + 6500000,
              ],
            },
            {
              keterangan: "Core i5",
              harga: [
                keuntungan_jual_laptop_seken + 6000000,
                keuntungan_jual_laptop_seken + 7500000,
              ],
            },
            {
              keterangan: "Core i7",
              harga: [
                keuntungan_jual_laptop_seken + 8000000, 
                keuntungan_jual_laptop_seken + 9000000,
              ],
            },
          ],
        },













        // Desain
        {
          judul: "Jasa Desain Spanduk + ukuran cetak",
          list: [
            {
              keterangan: "1x1",
              harga: harga_desain + (persegi_spanduk * 1 * 1),
            },
            {
              keterangan: "2x1",
              harga: harga_desain + (persegi_spanduk * 2 * 1),
            },
            {
              keterangan: "3x1",
              harga: harga_desain + (persegi_spanduk * 3 * 1),
            },
            {
              keterangan: "4x1",
              harga: harga_desain + (persegi_spanduk * 4 * 1),
            },
            {
              keterangan: "4x2",
              harga: harga_desain + (persegi_spanduk * 4 * 2),
            },
            {
              keterangan: "10x5",
              harga: harga_desain + (persegi_spanduk * 10 * 5),
            },
          ],
        },
        {
          judul: "CETAK KARTU VAKSIN",
          harga: 20000,
        },
        {
          judul: "Neon Box + ukuran cetak",
          list: [
            {
              keterangan: "2x1",
              harga: 2500000,
            },
          ],
        },
        {
          judul: "Undangan Digital (Video)",
          harga: 80000,
        },











      ]) + terimakasih + footer) // batas akhir
      // =================================================================
      // =================================================================
      // =================================================================
    }
  } else {
    // grup
  }
});
