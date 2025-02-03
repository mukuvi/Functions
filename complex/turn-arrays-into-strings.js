let myLeads = `["www.awesomelead.com"]`;

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
// 2. Push a new value to the array

myLeads.push("www.lead2.com");
// 3. Turn the array into a string again

myLeads = JSON.stringify(myLeads);
