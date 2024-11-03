// Preassigned names to emojis
const participants = [
  { name: "Navin 🎄", assigned: false },
  { name: "Jason 🎅", assigned: false },
  { name: "Carline ❄️", assigned: false },
  { name: "Kat 🎁", assigned: false },
  { name: "Elliott 🍪", assigned: false },
  { name: "Loveleen 🌟", assigned: false },
  { name: "Kami 🎉", assigned: false },
  { name: "Mark 🧦", assigned: false },
  { name: "Chris 🔔", assigned: false },
];

function assignSecretSanta() {
  // Filter out already assigned participants
  const availableParticipants = participants.filter(person => !person.assigned);

  // Check if there are still names left to assign
  if (availableParticipants.length === 0) {
    document.getElementById("result").innerText = "All names have been assigned!";
    return;
  }

  // Randomly select a name from the available participants
  const randomIndex = Math.floor(Math.random() * availableParticipants.length);
  const selectedPerson = availableParticipants[randomIndex];

  // Mark the selected person as assigned
  selectedPerson.assigned = true;

  // Display the assigned Secret Santa in the result div
  document.getElementById("result").innerText = `Your Secret Santa is: ${selectedPerson.name}`;

  // Show the Santa GIF with fade-in effect
  const santaGif = document.getElementById("santa");
  santaGif.style.display = "block";

  // Hide the button after it's clicked
  const button = document.querySelector(".draw-button");
  button.style.display = "none";

  // Save the assigned state in local storage to prevent re-draw
  localStorage.setItem("secretSantaAssigned", true);
  localStorage.setItem("assignedName", selectedPerson.name); // Save the assigned name as well
}

// Function to check if a name was already assigned
function checkAssignmentStatus() {
  const isAssigned = localStorage.getItem("secretSantaAssigned");
  const assignedName = localStorage.getItem("assignedName");

  if (isAssigned) {
    // If already assigned, display the assigned name and hide the button
    document.getElementById("result").innerText = `Your Secret Santa is: ${assignedName}`;
    document.querySelector(".draw-button").style.display = "none";
    document.getElementById("santa").style.display = "block"; // Show Santa if already assigned
  }
}

// Run the check on page load
window.onload = checkAssignmentStatus;

