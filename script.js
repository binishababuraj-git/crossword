document.getElementById('puzzleForm').addEventListener('submit', async (e)=> {
    e.preventDefault();
    var complexity = document.getElementById('complexity').value;
    // var wordCount = document.getElementById('wordCount').value;
    // var gridSize = document.getElementById('gridSize').value;
    var wordCount = '15';
    var gridSize = '15x15';
    // generate table 
    const tableData = gridSize.split('x');
    const rows = tableData[0];
    const columns = tableData[1];
    // Implement the logic to call API and display the puzzle
    // let response = await fetch('https://ncau-data-nprod-puzzles-repo-1-i4hmlaox3a-uc.a.run.app/generate_crosswords', {
	      // method: 'POST',
              // headers: {
                  // 'Content-Type': 'application/json'
                  //'Authorization': `Bearer ${bearerToken}`
              // },
              // body: JSON.stringify({
              //   wordCount: wordCount,
              //   complexity: complexity,
              //   gridSize: gridSize
              // }),
 		    // timeout: 60000 // 60 seconds
        //   });

        // ...


    // const jsonResponse = await response.json();


    const puzzleJson = [
      [
          1,
          "#",
          2,
          "#",
          3,
          4,
          0,
          5,
          0,
          6,
          0,
          7,
          "#",
          8,
          "#"
      ],
      [
          9,
          0,
          0,
          0,
          0,
          0,
          "#",
          0,
          "#",
          0,
          "#",
          10,
          0,
          0,
          0
      ],
      [
          0,
          "#",
          0,
          "#",
          11,
          0,
          0,
          0,
          0,
          0,
          12,
          0,
          "#",
          0,
          "#"
      ],
      [
          13,
          14,
          0,
          15,
          0,
          0,
          "#",
          0,
          "#",
          16,
          0,
          0,
          17,
          0,
          18
      ],
      [
          19,
          0,
          0,
          0,
          "#",
          0,
          "#",
          "#",
          20,
          0,
          0,
          "#",
          21,
          0,
          0
      ],
      [
          "#",
          0,
          "#",
          22,
          23,
          0,
          0,
          24,
          "#",
          0,
          "#",
          "#",
          0,
          "#",
          0
      ],
      [
          25,
          0,
          26,
          0,
          0,
          "#",
          "#",
          0,
          "#",
          27,
          28,
          0,
          0,
          0,
          0
      ],
      [
          0,
          "#",
          0,
          "#",
          29,
          30,
          0,
          0,
          0,
          0,
          0,
          "#",
          0,
          "#",
          0
      ],
      [
          31,
          0,
          0,
          0,
          0,
          0,
          "#",
          0,
          "#",
          "#",
          32,
          33,
          0,
          34,
          0
      ],
      [
          0,
          "#",
          0,
          "#",
          "#",
          0,
          "#",
          35,
          0,
          36,
          0,
          0,
          "#",
          0,
          "#"
      ],
      [
          37,
          38,
          0,
          "#",
          39,
          0,
          0,
          "#",
          "#",
          0,
          "#",
          40,
          41,
          0,
          42
      ],
      [
          43,
          0,
          0,
          44,
          0,
          0,
          "#",
          45,
          "#",
          46,
          47,
          0,
          0,
          0,
          0
      ],
      [
          "#",
          0,
          "#",
          48,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          "#",
          0,
          "#",
          0
      ],
      [
          49,
          0,
          0,
          0,
          "#",
          0,
          "#",
          0,
          "#",
          50,
          0,
          0,
          0,
          0,
          0
      ],
      [
          "#",
          0,
          "#",
          51,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          "#",
          0,
          "#",
          0
      ]
  ];

    const solutionJson = [
    [
        "S",
        "#",
        "W",
        "#",
        "C",
        "A",
        "B",
        "A",
        "R",
        "E",
        "T",
        "S",
        "#",
        "S",
        "#"
    ],
    [
        "P",
        "E",
        "R",
        "I",
        "L",
        "S",
        "#",
        "M",
        "#",
        "M",
        "#",
        "E",
        "C",
        "H",
        "O"
    ],
    [
        "E",
        "#",
        "I",
        "#",
        "A",
        "S",
        "S",
        "E",
        "M",
        "B",
        "L",
        "E",
        "#",
        "R",
        "#"
    ],
    [
        "A",
        "T",
        "T",
        "U",
        "N",
        "E",
        "#",
        "N",
        "#",
        "R",
        "A",
        "P",
        "P",
        "E",
        "D"
    ],
    [
        "R",
        "U",
        "E",
        "S",
        "#",
        "R",
        "#",
        "#",
        "S",
        "A",
        "W",
        "#",
        "O",
        "W",
        "E"
    ],
    [
        "#",
        "N",
        "#",
        "E",
        "N",
        "T",
        "E",
        "R",
        "#",
        "C",
        "#",
        "#",
        "T",
        "#",
        "F"
    ],
    [
        "P",
        "A",
        "D",
        "R",
        "E",
        "#",
        "#",
        "E",
        "#",
        "E",
        "N",
        "G",
        "A",
        "G",
        "E"
    ],
    [
        "R",
        "#",
        "R",
        "#",
        "A",
        "D",
        "V",
        "E",
        "R",
        "S",
        "E",
        "#",
        "G",
        "#",
        "R"
    ],
    [
        "O",
        "P",
        "I",
        "A",
        "T",
        "E",
        "#",
        "L",
        "#",
        "#",
        "S",
        "T",
        "E",
        "M",
        "S"
    ],
    [
        "P",
        "#",
        "V",
        "#",
        "#",
        "S",
        "#",
        "S",
        "P",
        "A",
        "T",
        "E",
        "#",
        "O",
        "#"
    ],
    [
        "E",
        "V",
        "E",
        "#",
        "P",
        "E",
        "W",
        "#",
        "#",
        "D",
        "#",
        "E",
        "R",
        "O",
        "S"
    ],
    [
        "R",
        "O",
        "L",
        "L",
        "E",
        "R",
        "#",
        "F",
        "#",
        "A",
        "S",
        "S",
        "U",
        "R",
        "E"
    ],
    [
        "#",
        "C",
        "#",
        "E",
        "N",
        "V",
        "E",
        "L",
        "O",
        "P",
        "E",
        "#",
        "R",
        "#",
        "I"
    ],
    [
        "M",
        "A",
        "Z",
        "E",
        "#",
        "E",
        "#",
        "E",
        "#",
        "T",
        "R",
        "I",
        "A",
        "L",
        "S"
    ],
    [
        "#",
        "L",
        "#",
        "S",
        "U",
        "S",
        "P",
        "E",
        "N",
        "S",
        "E",
        "#",
        "L",
        "#",
        "M"
    ]
];

const acrossData = [
  '3. Clue 1(8)',
  '9. Clue 2(6)'
]

const downData = [
  '1. Clue 3(5)',
  '2. Clue 4(5)'
]


    // botResponse.innerHTML = jsonResponse.message;
    // words=jsonResponse.message.replace("**Crossword Puzzle Words and Clues**", '');
    // words=jsonResponse.message.replace(/\.\s(.*?):/g, ".");
    
    // image_url=jsonResponse.image_url
    // const newStr = words.replace(/\n/g, "</br>");
    let acrossClues = '';
    for (let a = 0; a < acrossData.length; a++) {
       acrossClues += '<br/>' + acrossData[a];
    }

    let downClues = '';
    for (let d = 0; d < downData.length; d++) {
      downClues += '<br/>' + downData[d];
    }

    const clues = ` <div id="across">
      <b> Across </b> 
      ${acrossClues}
    </div> 
      <div  id="down">
        <b> Down </b>
      ${downClues}
      </div> 
    </div> `;

    let puzzleTable = `<table id ="puzzleTable">`;

    for (let r = 0; r < puzzleJson.length; r++) {
      puzzleTable += `<tr>`;
      for (let c = 0; c < puzzleJson[r].length; c++) {
        const cellValue = (puzzleJson[r][c]);
        if(cellValue === 0) {
          puzzleTable += `<td> </td>`;
        } else if(cellValue === "#") {
          puzzleTable += `<td class="block"> </td>`;
        }else {
          puzzleTable += `<td> <span class="cellNum">${cellValue}.</span></td>`;
        }
      }
      puzzleTable += `</tr>`;
    }
    puzzleTable += `</table>`;


    let solutionTable = `<table id ="solutionTable">`;

    for (let r = 0; r < solutionJson.length; r++) {
      solutionTable += `<tr>`;
      for (let c = 0; c < solutionJson[r].length; c++) {
        const cellValue = (solutionJson[r][c]);
        let cellStart = null;

        if(puzzleJson[r][c] === 0) {
          cellStart = ``;
        } else if(puzzleJson[r][c] === "#") {
          cellStart = ``;
        }else {
          cellStart = ` <span class="cellNum">${puzzleJson[r][c]}.</span>`;
        }

        if(cellValue === 0) {
          solutionTable += `<td> </td>`;
        } else if(cellValue === "#") {
          solutionTable += `<td class="block"> </td>`;
        }else {
          solutionTable += `<td class="cellValue">${cellStart}${cellValue}</td>`;
        }
      }
      solutionTable += `</tr>`;
    }
    solutionTable += `</table>`;


    let table = `<div class= "result" >
    <div id="solutionDiv">
      `;
    table += puzzleTable + solutionTable + `
    <div class="action">
      <span onclick="window.print()"> PRINT </span>
      <span id="reveal"> REVEAL </span>
      <span id="hide"> HIDE </span>
      </div>
    </div>
    `;

    // <h4> Crossword Puzzles </h4>
    // `;

    puzzle = document.getElementById('puzzleOutput')
    puzzle.innerHTML = table + clues ;
    // puzzle.innerHTML = table + newStr;
    // console.log("Generating puzzle with " + wordCount + " words.");
            
    // console.log(`Generating puzzle : complexity: ${complexity}, word count: ${wordCount}, grid size: ${gridSize}`);/

      document.getElementById("hide").style.display = 'none';
        document.getElementById('solutionTable').style.display = 'none';
        const reveal = document.getElementById('reveal');
      reveal.onclick = function() {
        document.getElementById("hide").style.display = 'block';
        document.getElementById("reveal").style.display = 'none';
        // show result table
        document.getElementById('puzzleTable').style.display = 'none';
        document.getElementById('solutionTable').style.display = 'block';
      }
      document.getElementById('hide').onclick = function() {
        document.getElementById("hide").style.display = 'none';
        document.getElementById("reveal").style.display = 'block';
        // show puzzle table
        document.getElementById('puzzleTable').style.display = 'block';
        document.getElementById('solutionTable').style.display = 'none';
      }

 });
 

//  document.getElementById('showSolution').addEventListener('click', function() {
    // Implement the logic to show the puzzle solution
//     document.getElementById('solution').src = image_url;
//     document.getElementById('solution').removeAttribute('hidden')
//     console.log("Showing puzzle solution.");
// });
