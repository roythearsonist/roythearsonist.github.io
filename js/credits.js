var credits = {
  owner: "theblobscp",
  contribs: ["CharlieS1103"],
};
var libraries = {
  bootstrap: ["base", "icons"],
  devicons: true,
};
var owner = document.getElementById("owner");
var contrib = document.getElementById("contrib");
var libcontainer = document.getElementById("libcontainer");

owner.innerHTML = "<div>Owner:" + credits.owner + "</div>";
contrib.innerHTML = "<div>Contributor:" + credits.contribs[0] + "</div>";
libcontainer.innerHTML = "<div>Libraries used in this website:</div>";
