async function test() {
  const a = await fetch("./json/qb.json");
  const qbDetailsJson = await a.json();
  const qbSelect = document.getElementById("qb-select");
  const qbDetails = document.getElementById("qb-details");
  const winningTeam = document.getElementById("winning-team");
  const previousWinningTeam = document.getElementById("previous-winning-team");

  qbDetailsJson.forEach((qb, i) => {
    const qbOption = document.createElement("option");
    qbOption.setAttribute("value", i);
    qbOption.innerText = "SuperBowl: " + qb["SuperBowl#"];
    qbSelect.appendChild(qbOption);
  });

  qbSelect.onchange = changeEventHandler;

  function changeEventHandler(event) {
    const index = event.target.value;

    const winningQBData = qbDetailsJson[index]["Winning QB"];
    const winningTeamData = qbDetailsJson[index]["Team"];
    const previousWinningTeamData = qbDetailsJson[index - 1]["Team"];

    qbDetails.innerText = winningQBData;
    winningTeam.innerHTML = "<h1>Winning Team</h1>: " + winningTeamData;
    previousWinningTeam.innerHTML =
      "<h1>Previous Winning Team</h1>: " + previousWinningTeamData;
  }
}
test();









// let windowWidth = document.documentElement["clientWidth"];

// window.onresize = function() {
//     location.reload();
// }

// queue()
//     .defer(d3.csv, "QB_history.csv")
//     .await(makeGraph);
    
//     console.log('hello')

// function makeGraph(error, transactionsData) {
//     let ndx = crossfilter(transactionsData);

//     let chartWidth = 300;

//     if (windowWidth < 768) {
//         chartWidth = windowWidth;
//     }
//     else {
//         chartWidth = windowWidth / 5;
//     }
    
//     let WinningTeamDim = ndx.dimension(dc.pluck("Winning "));
// }

