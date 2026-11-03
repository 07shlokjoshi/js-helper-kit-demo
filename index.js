
import {
  debounce,
  throttle,
  deepClone,
  capitalize,
  isValidEmail,
  formatDate
} from "js-helper-kit";

console.log("===== JS HELPER KIT DEMO =====");

// 1. Capitalize
console.log("\n1. Capitalize:");
console.log(capitalize("hello world"));

// 2. Email validation
console.log("\n2. Email Validation:");
console.log(isValidEmail("test@gmail.com"));
console.log(isValidEmail("invalid-email"));

// 3. Deep Clone
console.log("\n3. Deep Clone:");

const original = {
  name: "Shlok",
  skills: ["JavaScript", "React"]
};

const cloned = deepClone(original);
cloned.name = "Updated Name";

console.log("Original:", original);
console.log("Cloned:", cloned);

// 4. Format Date
console.log("\n4. Date Formatting:");
console.log(formatDate(new Date()));

// 5. Debounce
console.log("\n5. Debounce:");

const search = debounce((text) => {
  console.log("Searching:", text);
}, 500);

search("JavaScript");
search("JavaScript Package");
search("NPM Package");

// 6. Throttle
console.log("\n6. Throttle:");

const buttonClick = throttle(() => {
  console.log("Button clicked!");
}, 1000);

buttonClick();
buttonClick();
buttonClick();
