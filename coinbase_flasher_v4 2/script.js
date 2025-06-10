document.getElementById("flashForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;
  const txid = "0x" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);

  document.getElementById("toAddress").textContent = recipient;
  document.getElementById("btcAmount").textContent = amount;
  document.getElementById("txid").textContent = txid;

  document.getElementById("result").classList.remove("hidden");
});
