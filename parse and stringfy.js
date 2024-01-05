

var k=['hi','hell']


var task=JSON.stringify(k)

console.log(task)

for(var i=0;i<task.length;i++)
{
console.log(task[i])
    
}

console.log(task.length)

var j=JSON.parse(task)

for(var i=0;i<j.length;i++)
{
console.log(j[i])
    
}

// var parse= JSON.parse(j)

// for(key in parse)
// {
//     console.log(parse[key])
// }
