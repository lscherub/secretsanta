let names = [];

// Add name to the list
function addName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name && !names.includes(name)) {
    names.push(name);
    displayNames();
    nameInput.value = "";
  }
}

// Display list of added names
function displayNames() {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "Participants: " + names.join(", ");
}

// Assign Secret Santas randomly
function assignSecretSantas() {
  if (names.length < 2) {
    alert("Please add at least 2 participants.");
    return;
  }

  const shuffledNames = [...names].sort(() => 0.5 - Math.random());
  const results = {};

  shuffledNames.forEach((name, index) => {
    const santaFor = shuffledNames[(index + 1) % shuffledNames.length];
    results[name] = santaFor;
  });

  displayResults(results);
}

// Display results
function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h3>Secret Santa Assignments</h3>";

  Object.entries(results).forEach(([santa, recipient]) => {
    const resultLine = document.createElement("p");
    resultLine.textContent = `${santa} ➔ ${recipient}`;
    resultsDiv.appendChild(resultLine);
  });
}
