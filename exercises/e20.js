
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  var part1 = [];
  var part2 = [];
  for (let name of array) {
    let hit = false
    for (let letter of name) {
      if ((letter === "A" || letter === "a") && hit === false) {
        hit = true;
      }
    }
    if (hit === true) {
      part1.push(name);
    }
    else {
      part2.push(name);
    }
  }
  return [part1, part2];
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
