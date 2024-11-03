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
}
