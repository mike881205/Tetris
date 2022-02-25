export const SHAPES = {
    0: {
      matrix: [[0]],
      color: '0, 0, 0'
    },
    I: {
      matrix: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
      color: '80, 227, 230',
    },
    J: {
      matrix: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]],
      color: '36, 95, 223'
    },
    L: {
      matrix: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
      color: '223, 173, 36',
    },
    O: {
      matrix: [['O', 'O'], ['O', 'O']],
      color: '223, 217, 36'
    },
    S: {
  
      matrix: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]],
      color: '48, 211, 56'
    },
    T: {
      matrix: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
      color: '132, 61, 198',
    },
    Z: {
      matrix: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]],
      color: '227, 78, 78'
    }
  };
  
  export const getRandomShape = () => {
    const shapes = 'IJLOSTZ';
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    return SHAPES[randomShape];
  };  