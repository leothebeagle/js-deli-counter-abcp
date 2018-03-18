let customers = [];

function takeANumber(customers, name) {
  customers.push(name);
  return `Welcome, ${name}. You are number ${customers.length} in line.`
}

function nowServing(customers) {
  if (customers.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${customers.shift()}.`
  }
}
