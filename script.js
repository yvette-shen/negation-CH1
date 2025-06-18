// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {
        "green_apple.png": "embedded\u002Fc146c8e3d01860926a31043791de280f595f23858b8fe147fd9eb480457e16ee.png",
        "red_apple.png": "embedded\u002F5358fd5d4477f57856478293597907bfed3bfd923e91365f6178e62e507e98a4.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "本实验将在全屏模式下进行。",
          "hint": "请点击此处。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -14,
              "angle": 0,
              "width": 384,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "您好！\n非常感谢您参加本次实验。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Greetings",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -350,
              "top": 0,
              "angle": 0,
              "width": 2,
              "height": 19.21,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "17",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -25,
              "top": -275,
              "angle": 0,
              "width": 2,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": -13,
              "top": 250,
              "angle": 0,
              "width": 474.43,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "准备就绪后，请按下“空格键”进入练习环节。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": -350,
              "top": -13,
              "angle": 0,
              "width": 679.97,
              "height": 404.63,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "接下来将说明您即将进行的任务内容：\n1. 首先，屏幕中央会显示一个“＋”符号。\u2028\n   这是注视点，请注视屏幕中央。\n2. 接着，一句话会被分成三个部分，依次显示在屏幕上。\n3. 请认真阅读所显示的句子，并理解其含义。\u2028\n    每阅读完一个部分后，请按下【空格键】以进入下一个部分。\n4. 阅读完整句话后，会显示一张图片。\n5. 请判断该图片的内容是否与刚才所读句子的意思一致。\n6. 如果您认为一致，请按【F】键；\n    如果认为不一致，请按【J】键。\n7. 请尽可能快速且准确地作出判断。\n\n如果在实验开始前有任何问题，请随时提问。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -250,
              "angle": 0,
              "width": 192,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "实验方法说明",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": "start"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
//随机生成参加者编号
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
          },
          "title": "Instruction"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "sentence1": "他",
              "sentence2": "不在",
              "sentence3": "打游戏",
              "image": "game.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "他",
              "sentence2": "不在",
              "sentence3": "打游戏",
              "image": "book.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "他",
              "sentence2": "在",
              "sentence3": "打游戏",
              "image": "game.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "他",
              "sentence2": "在",
              "sentence3": "打游戏",
              "image": "book.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "他",
              "sentence2": "不在",
              "sentence3": "读书",
              "image": "game.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "他",
              "sentence2": "不在",
              "sentence3": "读书",
              "image": "book.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "他",
              "sentence2": "在",
              "sentence3": "读书",
              "image": "game.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "他",
              "sentence2": "在",
              "sentence3": "读书",
              "image": "book.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "今天",
              "sentence2": "不是",
              "sentence3": "雨天",
              "image": "rain.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "今天",
              "sentence2": "不是",
              "sentence3": "雨天",
              "image": "sun.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "今天",
              "sentence2": "是",
              "sentence3": "雨天",
              "image": "rain.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "今天",
              "sentence2": "是",
              "sentence3": "雨天",
              "image": "sun.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "今天",
              "sentence2": "不是",
              "sentence3": "晴天",
              "image": "rain.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "今天",
              "sentence2": "不是",
              "sentence3": "晴天",
              "image": "sun.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "今天",
              "sentence2": "是",
              "sentence3": "晴天",
              "image": "rain.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "今天",
              "sentence2": "是",
              "sentence3": "晴天",
              "image": "sun.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {
            "circle.png": "embedded\u002F4ed3c0823b24a69f448d16b1902d95620172e0df965134798628f6fcb963b767.png",
            "closed_door.png": "embedded\u002F108994142e9b7a7098b322872d604478eb659c6ab5646b43435c19c813b6a8be.png",
            "open_door.png": "embedded\u002F4496cbe4132e598b4c046d6e577123f5fbba6fbdff6e582aff42f9e1c84a1b8b.png",
            "triangle.png": "embedded\u002F407df088be476ebafe8b5447d633931e39084f0b7c1d0550453c39b08de73b2f.png",
            "blue.png": "embedded\u002Feca85a19979e0c460e2dcbc65eeea4ce46cc9ea3ae706daaa2b07dea5a16fc07.png",
            "crossup.png": "embedded\u002F48343b3c218f0e0f573be59fa282545bf5a4acd80d2770a19ddf204f0b7c4fd3.png",
            "starup.png": "embedded\u002F0fb7909cb0155aa166b2c8e7cb580d5524123509635f4b27064f1d8da14d6aee.png",
            "yellow.png": "embedded\u002Fff70997062e81b9a492f229907933a637870b20a06e6a0bfe3926b6304823200.png",
            "book.png": "embedded\u002F96afa1aaab5bf41dabe17513b8cc32ed7f42eb508767de851c71d23757be422e.png",
            "game.png": "embedded\u002F7ff447a7c13093b10be52a20634535037006153b7767e52f85b6cd652e280181.png",
            "sun.png": "embedded\u002F5b556c1937f0e3ad9390d8fde334bd67206bfaeb23a57262b91925536c6eca65.png",
            "rain.png": "embedded\u002Ff7d691bbe6ade9010ee80c762acfd6b07e0237ef5b69a4b34045d3d4d0938140.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop_training",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 20.99,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ITI",
                "timeout": "1500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence1}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 250,
                    "angle": 0,
                    "width": 192,
                    "height": 18.08,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "阅读完毕后请按【空格键】",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "16",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part1"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 11,
                    "top": 250,
                    "angle": 0,
                    "width": 192,
                    "height": 18.08,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "阅读完毕后请按【空格键】",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "16",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part2"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 2,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 2,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence3}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 250,
                    "angle": 0,
                    "width": 192,
                    "height": 18.08,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "阅读完毕后请按【空格键】",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "16",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part3"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Blank_750",
                "timeout": "750"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "300",
                    "height": "300",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${this.files[this.parameters.image]}",
                    "autoScale": false
                  },
                  {
                    "type": "i-text",
                    "left": -25,
                    "top": 250,
                    "angle": 0,
                    "width": 432,
                    "height": 67.53,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "请判断该图片的内容是否与刚才所读句子的意思一致。\n如果您认为一致，请按【F】键；\n如果认为不一致，请按【J】键。",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(f)": "F",
                  "keypress(j)": "J"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Image",
                "correctResponse": "${this.parameters.correct}",
                "timeout": "10000"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -62,
              "angle": 0,
              "width": 576,
              "height": 162,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "练习环节就此结束。\n以下实验环节将不再显示对按键的提示。\n\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 150,
              "angle": 0,
              "width": 664.58,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "准备就绪后请按下“空格键”进入正式实验环节！",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": "Space"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "三角形",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "三角形",
              "image": "circle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "三角形",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "三角形",
              "image": "circle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "圆形",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "圆形",
              "image": "circle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "圆形",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "圆形",
              "image": "circle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "开着的",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "开着的",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "开着的",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "开着的",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "关着的",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "关着的",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "关着的",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "关着的",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "黄色的",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "黄色的",
              "image": "blue.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "黄色的",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "黄色的",
              "image": "blue.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "蓝色的",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "蓝色的",
              "image": "blue.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "蓝色的",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "蓝色的",
              "image": "blue.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星星",
              "sentence2": "不在",
              "sentence3": "加号的上面",
              "image": "starup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "星星",
              "sentence2": "不在",
              "sentence3": "加号的上面",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "星星",
              "sentence2": "在",
              "sentence3": "加号的上面",
              "image": "starup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星星",
              "sentence2": "在",
              "sentence3": "加号的上面",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "加号",
              "sentence2": "不在",
              "sentence3": "星星的上面",
              "image": "starup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "加号",
              "sentence2": "不在",
              "sentence3": "星星的上面",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "加号",
              "sentence2": "在",
              "sentence3": "星星的上面",
              "image": "starup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "加号",
              "sentence2": "在",
              "sentence3": "星星的上面",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {
            "circle.png": "embedded\u002F4ed3c0823b24a69f448d16b1902d95620172e0df965134798628f6fcb963b767.png",
            "closed_door.png": "embedded\u002F108994142e9b7a7098b322872d604478eb659c6ab5646b43435c19c813b6a8be.png",
            "open_door.png": "embedded\u002F4496cbe4132e598b4c046d6e577123f5fbba6fbdff6e582aff42f9e1c84a1b8b.png",
            "triangle.png": "embedded\u002F407df088be476ebafe8b5447d633931e39084f0b7c1d0550453c39b08de73b2f.png",
            "blue.png": "embedded\u002Feca85a19979e0c460e2dcbc65eeea4ce46cc9ea3ae706daaa2b07dea5a16fc07.png",
            "crossup.png": "embedded\u002F48343b3c218f0e0f573be59fa282545bf5a4acd80d2770a19ddf204f0b7c4fd3.png",
            "starup.png": "embedded\u002F0fb7909cb0155aa166b2c8e7cb580d5524123509635f4b27064f1d8da14d6aee.png",
            "yellow.png": "embedded\u002Fff70997062e81b9a492f229907933a637870b20a06e6a0bfe3926b6304823200.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop_750",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 20.99,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ITI",
                "timeout": "1500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence1}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part1"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part2"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 2,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 2,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence3}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part3"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Blank_750",
                "timeout": "750"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "300",
                    "height": "300",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${this.files[this.parameters.image]}",
                    "autoScale": false
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(f)": "F",
                  "keypress(j)": "J"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Image",
                "correctResponse": "${this.parameters.correct}",
                "timeout": "5000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "三角形",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "三角形",
              "image": "circle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "三角形",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "三角形",
              "image": "circle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "圆形",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "这",
              "sentence2": "不是",
              "sentence3": "圆形",
              "image": "circle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "圆形",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "这",
              "sentence2": "是",
              "sentence3": "圆形",
              "image": "circle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "开着的",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "开着的",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "开着的",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "开着的",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "关着的",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "门",
              "sentence2": "不是",
              "sentence3": "关着的",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "关着的",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "门",
              "sentence2": "是",
              "sentence3": "关着的",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "黄色的",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "黄色的",
              "image": "blue.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "黄色的",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "黄色的",
              "image": "blue.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "蓝色的",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点",
              "sentence2": "不是",
              "sentence3": "蓝色的",
              "image": "blue.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "蓝色的",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点",
              "sentence2": "是",
              "sentence3": "蓝色的",
              "image": "blue.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星星",
              "sentence2": "不在",
              "sentence3": "加号的上面",
              "image": "starup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "星星",
              "sentence2": "不在",
              "sentence3": "加号的上面",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "星星",
              "sentence2": "在",
              "sentence3": "加号的上面",
              "image": "starup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星星",
              "sentence2": "在",
              "sentence3": "加号的上面",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "加号",
              "sentence2": "不在",
              "sentence3": "星星的上面",
              "image": "starup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "加号",
              "sentence2": "不在",
              "sentence3": "星星的上面",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "加号",
              "sentence2": "在",
              "sentence3": "星星的上面",
              "image": "starup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "加号",
              "sentence2": "在",
              "sentence3": "星星的上面",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {
            "circle.png": "embedded\u002F4ed3c0823b24a69f448d16b1902d95620172e0df965134798628f6fcb963b767.png",
            "closed_door.png": "embedded\u002F108994142e9b7a7098b322872d604478eb659c6ab5646b43435c19c813b6a8be.png",
            "open_door.png": "embedded\u002F4496cbe4132e598b4c046d6e577123f5fbba6fbdff6e582aff42f9e1c84a1b8b.png",
            "triangle.png": "embedded\u002F407df088be476ebafe8b5447d633931e39084f0b7c1d0550453c39b08de73b2f.png",
            "blue.png": "embedded\u002Feca85a19979e0c460e2dcbc65eeea4ce46cc9ea3ae706daaa2b07dea5a16fc07.png",
            "crossup.png": "embedded\u002F48343b3c218f0e0f573be59fa282545bf5a4acd80d2770a19ddf204f0b7c4fd3.png",
            "starup.png": "embedded\u002F0fb7909cb0155aa166b2c8e7cb580d5524123509635f4b27064f1d8da14d6aee.png",
            "yellow.png": "embedded\u002Fff70997062e81b9a492f229907933a637870b20a06e6a0bfe3926b6304823200.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop1500",
          "skip": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 20.99,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ITI",
                "timeout": "1500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence1}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part1"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence2}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part2"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 2,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 2,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 398.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.sentence3}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sentence_part3"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Blank_1500",
                "timeout": "1500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "300",
                    "height": "300",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${this.files[this.parameters.image]}",
                    "autoScale": false
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(f)": "F",
                  "keypress(j)": "J"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Image",
                "correctResponse": "${this.parameters.correct}",
                "timeout": "5000"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 480,
          "height": 203.94,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "本次实验到此为止。\n请按下“空格键”结束该程序。\n\n再次向您的参与表示衷心的感谢。\n祝您生活愉快。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress(Space)": "end"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//文件名为参加者编号
const participantID = this.state.participantID

//csv格式下保存
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "ZgbP88npaDyb",
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "Screen",
      "timeout": "10000",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()