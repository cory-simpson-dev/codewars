// 7kyu - Don't give me five!

function dontGiveMeFive(start, end) {
  //   create array to push into
    let arr = []
  //   create initial variable
    let initial = start
  //   loop through start to end
    for (let i = 0; i <= (end - start); i++) {
      // convert initial into string
      let strArr = String(initial)
      // split value to search for 5's
      let split = strArr.split('')
      // check split for 5
      if (!split.includes('5')) {
          // join split
          let strInitial = split.join('')
          // convert back into number
          let initial = Number(strInitial)
          // push to array
          arr.push(initial)
    } else {
      // join split
      let strInitial = split.join('')
      // convert back into number
      let initial = Number(strInitial)
    }
      initial ++
    }
    return arr.length
  }