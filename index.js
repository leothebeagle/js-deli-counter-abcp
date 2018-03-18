let customers = [];

function takeANumber(customers, name) {
  customers.push(name);
  return `Welcome, ${name}. You are number ${customers.length} in line.`
}
