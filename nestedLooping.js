//counting summer months (June, July and August) in 2023 and 2024 in Northern Hemisphere;
var count = 0;
for(var year = 2023; year <= 2024; year++) {
    for(var month = 6; month<=8; month++) {
        count++;
    }
}
console.log("Number of summer months in 2023 and 2024 are "+count+".");
//output = 6