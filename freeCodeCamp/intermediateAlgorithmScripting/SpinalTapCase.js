// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  const REGEX = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(REGEX, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');
