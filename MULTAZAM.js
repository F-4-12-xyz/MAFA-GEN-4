 document.addEventListener("DOMContentLoaded", function() {
    const pemuat = document.querySelector(".pemuat");
    const logPeningkatan = document.createElement("div");
    logPeningkatan.style.position = "absolute";
    logPeningkatan.style.top = "50%";
    logPeningkatan.style.left = "50%";
    logPeningkatan.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(logPeningkatan);
    
    const halamanUtama = document.createElement("iframe");
  
    let progress = 0;
    const selangWaktu = setInterval(function() {
      const Peningkatanacak = Math.floor(Math.random() * 5) + 1;
      progress += Peningkatanacak;
      
      if (progress <= 100) {
        console.log(progress + "%");
        logPeningkatan.textContent = progress + "%";
      } else {
        console.log("Progress: complete");
        logPeningkatan.textContent = "Progress: complete";
        setTimeout(function() {
          complete();
        }, 700);
      }
      
      function complete() {
        halamanUtama.src = "主要-기본-رئيسي-main.html";
        halamanUtama.style.width = "100%";
        halamanUtama.style.height = "100vh";
        halamanUtama.style.border = "none";
        halamanUtama.style.display = "none";
        document.body.appendChild(halamanUtama);
        
        clearInterval(selangWaktu);
        pemuat.style.display = "none";
        logPeningkatan.style.display = "none";
        halamanUtama.style.display = "block";
      }
    }, 700);
  });