// Queues 
const queue = []

// Insertion at queue
const insertElement = (val)=>{
    queue.push(val)
    console.log(`============================================================`);
    console.log(`Value inserrted in queue`);
    console.log(queue);
}

const removeElement = ()=>{
    queue.shift(0)
    console.log(`============================================================`);
    console.log(`Value removed from queue`);
    console.log(queue);
}

insertElement(1)
insertElement(2)
insertElement(3)
insertElement(4)
insertElement(5)
insertElement(6)
insertElement(7)
insertElement(8)
insertElement(9)
insertElement(10)
insertElement(11)

removeElement()