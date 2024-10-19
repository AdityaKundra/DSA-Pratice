// // BFS

// const graph = {
//     A: ['B', 'D'],
//     B: ['A', 'C', 'E'],
//     C: ['B'],
//     D: ['A', 'E'],
//     E: ['B', 'D', 'F'],
//     F: ['E'],
// };

// const bfs = (graph,start)=>{
//     const queue = [start]
//     const visited = []
//     const result = []

//     while (queue.length) {
//         const graphNode = queue.shift();
        
//         if (!visited.includes(graphNode)) {
//         //   console.log(`BFS Vertex: ${graphNode}`);

//           visited.push(graphNode);
//           result.push(graphNode);
    
//           for (const next of graph[graphNode]) {
//             queue.push(next);
//           }
//         //   console.log(`BFS Queue: ${queue}`);
//           // console.log(`BFS Result: ${result}`); 
//         //   console.log(`-------------------------`);
//         }
//       }
//       return result
// }

// const dfs = (graph,start)=>{
//     const stack = [start]
//     const visited = []
//     const result = []

//     while (stack.length) {
//         const graphNode = stack.pop();

        
//         if (!visited.includes(graphNode)) {
//         //   console.log(`DFS Vertex: ${graphNode}`);
//           visited.push(graphNode);
//           result.push(graphNode);
          
//           for (const next of graph[graphNode]) {
//             stack.push(next);
//           }
//         //   console.log(`DFS Stack: ${stack}`);
//         //   console.log(`DFS Result: ${result}`);
//         //   console.log(`-------------------------`);
//         }
//       }
//       return result
// }

// const b = bfs(graph,'A')
// const d = dfs(graph,'A')

// console.log(`BFS: ${b}`);
// console.log(`DFS: ${d}`);


// // function alphaBeticOrder(str) {
// //   // Long Method
// //   for (let i = 0; i < str.length; i++) {
// //       let index = i;
// //       // Loop To Find Sorted array
// //       for (let j = i + 1; j < str.length; j++) {
// //           if(str[j] < str[index]) {
// //              index = j
// //           }

// //       }

// // let temp = str[i];
// //           str[i] = str[j];
// //           str[j] = temp;
// //   }
// //   console.log(str);
// // }
// // alphaBeticOrder(['z','x','y','w','a','d']);


// function bubbleSort(arr){

//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<(arr.length-i);j++){
//       if(arr[j] > arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         console.log("Loda lele  aman ka")
//       }
//     }
//   }
// console.log(arr);
// }

// // bubbleSort([20,3,1,90,3,66,77])


// function insertionSort(arr){
//     let j,key
//     for(let i=1;i<arr.length;i++){
//         key = arr[i]
//         j = i-1
//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = key
//     }
//     console.log(arr);
// }

// // insertionSort([20,3,1,90,3,66,77])

// // const arr = [1,2,3,3,3,4,1,6,7,8,6,4,1,3,5,4,5,6];
// // const arr2 ={}

// // for(let i=0; i < arr.length; i++){
// //     console.log(arr[i])
// //     if(arr2[arr[i]]){
// //         arr2[arr[i]]++
// //     }else{
// //         arr2[arr[i]] = 1
// //     }
// // }
// // console.log(arr2)




// Function to find the highest number of days that any two friends have ignored Maya together
// function findMaxCommonIgnoredDays(input) {
//   // Split the input into an array of lines
//   const lines = input.trim().split('\n');
//   const N = parseInt(lines[0], 10);  // Number of friends
//   const friends = [];
  
//   // Parse the ignored days for each friend
//   let lineIndex = 1;
//   for (let i = 0; i < N; i++) {
//       const L = parseInt(lines[lineIndex], 10);
//       const daysIgnored = new Set(lines[lineIndex + 1].split(' ').map(Number));
//       friends.push(daysIgnored);
//       lineIndex += 2;
//   }
  
//   // Function to find common elements between two sets
//   function commonElements(set1, set2) {
//       let count = 0;
//       for (let elem of set1) {
//           if (set2.has(elem)) {
//               count++;
//           }
//       }
//       return count;
//   }
  
//   let maxCommonDays = 0;
  
//   // Compare each pair of friends
//   for (let i = 0; i < N; i++) {
//       for (let j = i + 1; j < N; j++) {
//           const commonDays = commonElements(friends[i], friends[j]);
//           if (commonDays > maxCommonDays) {
//               maxCommonDays = commonDays;
//           }
//       }
//   }
  
//   return maxCommonDays;
// }

// // Example input
// const input = `3
// 2
// 1 3
// 3
// 1 2 3
// 2
// 2 3`;

// console.log(findMaxCommonIgnoredDays(input)); // Output: 2



// Binary Search


// const binarySearch = (arr, target) => {
//     let low = 0;
//     let high = arr.length     
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
      
//       if (arr[mid] === target) {
//         return 'found';
//       }
      
//       if (target > arr[mid]) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }
    
//     return 'not found';
//   }
  
//   let rrrrr = [1, 2, 3, 4, 5, 67, 8, 99, 69];
//   console.log(binarySearch(rrrrr, 69));