// Var
// 1. Function Scoped
// 2. Allows duplicate identifiers
// 3. Value can be updated
// 4. Hoisted and initialized with undefined.

// Let
// 1. Block Scoped
// 2. Does NOT allow duplicate identifiers
// 3. Value can be updated
// 4. Hoisted BUT error if we try to access before declaration

// Const
// 1. Block Scoped
// 2. Does NOT allow duplicate identifiers
// 3. Value cannot be updated
// 4. Hoisted BUT error if we try to access before declaration

//This is because of a Temporal Dead Zone (TDZ) for let and const declarations. 
//The Temporal Dead Zone is a time window where a variable exists but is still uninitialized. And because this variable is uninitialized , it is unaccessible.