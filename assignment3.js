var Employee = {
    Name: "Aru",
    Age: 25,
    salary: 20000,
    address: {
        city: "chennai",
        state: "Tamilnadu",
        Pincode: 600001
    }
};
console.log("The Employee name is : " + Employee['Name'] + " and age is : " + Employee['Age'] +
    " and salary is " + Employee.salary+ " and employee address:-> city : " +Employee.address.city+
    ", state : "+Employee.address.state+", pincode : "+Employee.address.Pincode+".");