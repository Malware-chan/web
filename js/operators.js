/* Logical operators with Non-booleans */
// Falsy  -> false, undefined, null, 0, '', NaN      ::: treated as false if used in a boolean expression
// Truthy -> anything that is not falsy

false || true // true
false || 'Flan' // not false ('Flan')
false || 495 // not false (495)

let bgColor = userBgColor || defaultBgColor;