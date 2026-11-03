
import {
  capitalize,
  isValidEmail,
  deepClone,
  uniqueArray,
  formatDate,
  reverseString
} from "js-kit-helper";

document.getElementById("capitalizeBtn").onclick = () => {
  const value = document.getElementById("capitalizeInput").value;
  document.getElementById("capitalizeResult").textContent = capitalize(value);
};

document.getElementById("emailBtn").onclick = () => {
  const value = document.getElementById("emailInput").value;
  document.getElementById("emailResult").textContent =
    isValidEmail(value) ? "Valid email ✓" : "Invalid email ✗";
};

document.getElementById("cloneBtn").onclick = () => {
  const original = { name: "Shlok", skills: ["JavaScript", "React"] };
  const cloned = deepClone(original);
  cloned.name = "Updated Name";

  document.getElementById("cloneResult").textContent =
    JSON.stringify({ original, cloned }, null, 2);
};

document.getElementById("arrayBtn").onclick = () => {
  const result = uniqueArray([1, 2, 2, 3, 4, 4, 5]);
  document.getElementById("arrayResult").textContent =
    JSON.stringify(result);
};

document.getElementById("dateBtn").onclick = () => {
  document.getElementById("dateResult").textContent =
    formatDate(new Date(), "DD/MM/YYYY");
};

document.getElementById("reverseBtn").onclick = () => {
  const value = document.getElementById("reverseInput").value;
  document.getElementById("reverseResult").textContent = reverseString(value);
};
