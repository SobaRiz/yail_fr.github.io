console.log("index.js démarre");

// On vérifie que les service fonctionnent
// Lequels ????
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration => {
    console.log("SW Registered .js!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed .js");
    console.log(error);
  });
} else {
  console.error("Pas de services workers ici... SORRYYYYYYY !!!");
};
