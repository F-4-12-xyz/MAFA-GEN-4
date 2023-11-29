   var Nama = prompt("Siapa namamu?");
    const target = "kambing/rusa/sapi/laba laba/apa kabar";
    const kata = /\b\w+\b/g;
    const kataSumber = Nama.match(kata);
      if (Nama == "" || Nama == null) {
         alert("Halo pengunjung.");
         Nama = "Pengunjung";
         alert ("Maaf " + Nama + ", web sedang diproses")
         console.log ("Data gagal didapatkan");
      }
      
      else if (kataSumber) {
        for (let i = 0; i < kataSumber.length; i++) {
          if (target.toLowerCase().includes(kataSumber[i])) {
            ToxicDetecteD();
          }
        }
      }
      
      else if (Nama == "F.to.access" || Nama == "MAFA.access") {
         alert("Harap masukkan nama dahula baru bisa mengakses fitur ini..");
         console.log ("Harap masukkan nama dahula baru bisa mengakses fitur ini..");
         alert("Oh satu lagi, fitur ini dapat diakses dengan cara mengetikkan : " + Nama + " di pencarian...");
         console.log ("Oh satu lagi, fitur ini dapat diakses dengan cara mengetikkan : " + Nama + " di pencarian...");
      }

      else {
         alert ("Halo " + Nama + ", sekarang namamu sudah tersimpan untuk sementara.");
         alert ("Maaf " + Nama + ", web sedang diproses")
         console.log ("Data telah didapatkan");
      }
      console.log ("Nama pengunjung : " + Nama);

function clearInput() {
    var input = document.getElementById("kotakPerintah");
   input.value = "";
}

/*function checkEnter(event) {
  if (event.key === "Enter") {
      cari(); // gagal
  }
}*/

function ToxicDetected() {
    var input = document.getElementById("kotakPerintah");
    var fact = " telah toxic"
     alert ("prit prit gaboleh toxic");
     
     alert ("gaboleh toxic");
     
     alert ("gaboleh toxic");
     
     audio = new Audio("" + linkmp3.src);
     
     audio.play();
     
     console.log (Nama + fact);
     
     input.value = "Dalarang toxic ya, " + Nama;
     return;
}

function ToxicDetecteD() {
    var input = document.getElementById("kotakPerintah");
    var fact = " telah toxic"
     alert ("prit prit gaboleh toxic");
     
     alert ("gaboleh toxic");
     
     alert ("gaboleh toxic");
     
     location.reload();
     
     console.log (Nama + fact);
     
     return;
}

function cari() {
  var input = document.getElementById("kotakPerintah").value.toLowerCase();
  const kartuPelajar = document.querySelectorAll(".kartu-murid");
  const target = "anjing fuck tolol sial pantek pantak bacot bacod ngaceng persetan";
  const kata = /\b\w+\b/g;

  const kataSumber = input.match(kata);

  if (input === "hidden") {
    // window.open("https://hell");
    clearInput();
    return;
  }
  else if (input === "F.to.access" || input == "MAFA.access") {
    startscrtprgrm();
    clearInput();
    return;
  }
  else if (input === "Soleha" || input === "Soleha" || input === "soleha?" || input === "soleha") {
    alert("Heyyo bro 🖐️🤨📸");
    
    clearInput();
    return;
  }
    
  else if (input === "Test" || input === "Tes" || input === "test" || input === "tes"  || input === "Test " || input === "Tes " || input === "test " || input === "tes ") {
  var c = 0;
    alert ("Fungsi " + input + " akan segera dijalankan dalam :");
    alert ("3");
    alert ("2");
    alert ("1");
    alert ("Running..");
    console.log ("The demons function is running");
    
    while (true) {
    alert("Fungsi " + input + " telah dijalankan, fungsi ini akan mengulang terus menerus.");
    console.log (Nama + " sudah mengulangi sebanyak : " +c);
    c++;
    }
    return;
  }
  
  else if (input === "Berhitung" || input === "Hitung" || input === "Gabut" || input === "Gabut Mode" || input === "Gabut Mode On" || input === "Mode Gabut" || input === "Mode Gabut On" || input === "mode gabut" || input === "mode gabut on" || input === "berhitung" || input === "hitung" || input === "gabut" || input === "gabut mode" || input === "gabut mode on") {
    alert ("Fungsi " + input + " akan segera dijalankan dalam :");
    alert ("3");
    alert ("2");
    alert ("1");
    alert ("Running..");
    console.log ("The demons function is running");
    var c = 0;
    while (true) {
      alert (+c);
      console.log (Nama + " sudah mengulangi sebanyak : " +c);
      c++;
    }
    clearInput();
    return;
  }
  //template else if ☝️😅
  /*else if (input === "") {
    alert ("0");
    clearInput();
    return;
  }
  else if (input === "" || input === "") {
    alert ("0");
    clearInput();
    return;
  }*/

  //ok serius
 //Toxic detector
 else if (input === "69") {
   
   ToxicDetected();
   return;
 }
 
  //bantuan / helper
  else if (input === "Help" || input === "help" || input === "Bantuan" || input === "bantuan" || input === "Tolong" || input === "tolong" || input === "?") {
    alert ("Halo " + Nama +", apakah ada yang bisa kami bantu?");

    //list ccommand
    alert ("Daftar perintah yang mungkin membantu 📃 :");

    alert ("1. Sosial media (VIII MULTAZAM Hanya memiliki akun Instagram)");

    alert ("Instagram (YMPI / SMPIT / VIII MULTAZAM)");

    alert ("Youtube (YMPI / SMPIT)");

    alert ("Facebook (YMPI / SMPIT)");

   clearInput();
    //alert ("2.")
    return;
  }

  //medsos
  else if (input === "Instagram" || input === "instagram" || input === "Ig" || input === "ig" || input === "Youtube" || input === "youtube" || input === "yt" || input === "Facebook" || input === "facebook" || input === "fb") {
    alert ("Maaf mohon tambahkan perintah yang lebih spesifik");

    alert ("contoh : " + input + " SMPIT");
   clearInput();
    return;
  }

  //ig
  //YMPI
  else if (input === "Instagram Ympi" || input === "instagram ympi" || input === "Instagram Ymp" || input === "instagram ymp" || input === "Ig Ympi" || input === "ig ympi" || input === "Ig Ymp" || input === "ig ymp") {
    window.open("https://instagram.com/ympi.padangpariaman?igshid=MzRlODBiNWFlZA==");
   clearInput();
    return;
  }

  //SMPIT
  else if (input === "Instagram Smpit" || input === "instagram smpit" || input === "Instagram Smp" || input === "instagram smp" || input === "Ig Smpit" || input === "ig smpit" || input === "Ig Smp" || input === "ig smp") {
    window.open("https://instagram.com/smpitmafa?igshid=MzRlODBiNWFlZA==");
   clearInput();
    return;
  }

  //VIII MULTAZAM
  else if (input === "Instagram Viii Multazam" || input === "instagram viii multazam" || input === "Instagram Multazam" || input === "instagram multazam" || input === "Ig Viii Multazam" || input === "ig viii multazam" || input === "Ig Multazam" || input === "ig multazam") {
    window.open("https://instagram.com/gen4mfsh_?igshid=MzRlODBiNWFlZA==");
   clearInput();
    return;
  }

  //Facebook
  //SMPIT
  else if (input === "Facebook Smpit" || input === "facebook smpit" || input === "Facebook Smp" || input === "facebook smp" || input === "Fb Smpit" || input === "fb smpit" || input === "Fb Smp" || input === "fb smp") {
    window.open("https://www.facebook.com/smpit.madinahalfatih.7");
   clearInput();
    return;
  }

  //Youtube
  //YMPI
  else if (input === "Youtube Ympi" || input === "youtube ympi" || input === "Youtube Ymp" || input === "youtube ymp" || input === "Yt Ympi" || input === "yt ympi" || input === "Yt Ymp" || input === "yt ymp") {
    window.open("https://youtube.com/@ympiofficial8375?si=mb_fgdLFatg8EPx_");
   clearInput();
    return;
  }

  //SMPIT
  else if (input === "Youtube Smpit" || input === "youtube smpit" || input === "Youtube Smp" || input === "youtube smp" || input === "Yt Smpit" || input === "yt smpit" || input === "Yt Smp" || input === "yt smp") {
    window.open("https://youtube.com/@smpitmadinahalfatih473?si=RlzQGNVbQ_xiws_h");
   clearInput();
    return;
  }

  for (var i = 0; i < kartuPelajar.length; i++) {
    var namaPelajar = kartuPelajar[i].querySelector("h2").textContent.toLowerCase();

    if (namaPelajar.includes(input)) {
      kartuPelajar[i].scrollIntoView({
        behavior: "smooth", block: "start"
      });
      return;
    }
    
    else if (kataSumber) {
    for (let i = 0; i < kataSumber.length; i++) {
      if (target.toLowerCase().includes(kataSumber[i])) {
        ToxicDetected();
        return;
      }
    }
  }
 }

  alert("Tidak dapat menemukan : " + input);
  }