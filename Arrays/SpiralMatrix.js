/*
 Question: Write nxm two-dimensional array returning all elements of the array in spiral order.
*/

//solution 1:

function spiralTraverse(array) {
    let row = 0;
    let col = 0;
    let lastRow = array.length - 1;
    let lastCol = array[0].length - 1;
    let newArr = [];
      
      while(row <= lastRow && col <= lastCol){
          if(array.length == 0){
              return newArr;
          }
          
          //top
          for(let i = col; i <= lastCol; i++){
              newArr.push(array[row][i])
          }
          row++;
          
          //right
          for(let i = row; i <= lastRow; i++){
              newArr.push(array[i][lastCol])
          }
          lastCol--;
          
          //bottom
          if(row <= lastRow){
              for(let i = lastCol; i >= col; i--){
                  newArr.push(array[lastRow][i])
              }
              lastRow--;
          }
          
          //left
          if(col <= lastCol){
              for(let i = lastRow; i >= row; i--){
                 newArr.push(array[i][col]) 
              }
              col++;
          }
      }
    return newArr;
  }