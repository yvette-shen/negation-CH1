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
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -14,
          "angle": 0,
          "width": 348.8,
          "height": 120.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "こんにちは！\n実験にご参加いただき\nありがとうございます。",
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
      "timeout": "2000",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験ではフルスクリーンモードで行われます。",
          "hint": "ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -350,
          "top": 0,
          "angle": 0,
          "width": 634.78,
          "height": 464.88,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "これから行う課題について説明します。\n\n1. まず、画面中央に「＋」マークが表示されます。\n    これは注視点を示すもので、画面中央を見てください。\n\n2. その後、1つの文が3つの部分に分けられ、順番に画面上に提示されます。\n\n3. 表示される文をよく読み、その意味を理解するようにしてください。\n　一つの部分を読み終わったら、「Spaceキー」を押して次の部分に進みます。\n\n4. 文を読み終わった後、1枚の画像が表示されます。\n\n5. 表示された画像の内容が、先ほど読んだ文の意味と一致しているかどうかを\n   判断してください。\n\n6. 一致していると思った場合は「F」キーを、不一致だと思った場合は「J」キーを\n   押してください。\n\n7.できるだけ正確かつ素早く判断するようにしてください。\n\n何か質問がある場合は、実験を始める前にお知らせください。",
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
          "width": 64,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "教示",
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
          "top": 275,
          "angle": 0,
          "width": 673.37,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "準備ができたら「Spaceキー」を押して練習試行を開始します",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
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
//参加者IDをランダム生成
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
      },
      "title": "Instruction"
    },
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
      "content": [
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "sentence1": "彼は",
              "sentence2": "ゲームを",
              "sentence3": "していない",
              "image": "game.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "ゲームを",
              "sentence3": "していない",
              "image": "book.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "ゲームを",
              "sentence3": "している",
              "image": "game.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "ゲームを",
              "sentence3": "している",
              "image": "book.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "本を",
              "sentence3": "読んでいない",
              "image": "game.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "本を",
              "sentence3": "読んでいない",
              "image": "book.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "本を",
              "sentence3": "読んでいる",
              "image": "game.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "彼は",
              "sentence2": "本を",
              "sentence3": "読んでいる",
              "image": "book.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "雨が",
              "sentence3": "降らない",
              "image": "rain.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "雨が",
              "sentence3": "降らない",
              "image": "sun.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "雨が",
              "sentence3": "降る",
              "image": "rain.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "雨が",
              "sentence3": "降る",
              "image": "sun.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "晴れ",
              "sentence3": "ではない",
              "image": "rain.png",
              "correct": "j",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "晴れ",
              "sentence3": "ではない",
              "image": "sun.png",
              "correct": "f",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "晴れ",
              "sentence3": "である",
              "image": "rain.png",
              "correct": "f",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "今日は",
              "sentence2": "晴れ",
              "sentence3": "である",
              "image": "sun.png",
              "correct": "j",
              "AorN": "A",
              "cond": "真肯定"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "1"
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
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 672.54,
              "height": 162,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "練習試行は以上となります。\n\n準備ができましたら「Spaceキー」を押して、\n本実験にお進みください。",
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
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "ではない",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "ではない",
              "image": "circle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "である",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "である",
              "image": "circle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "ではない",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "ではない",
              "image": "circle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "である",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "である",
              "image": "circle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いない",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いない",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いる",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いる",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いない",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いない",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いる",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いる",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "ではない",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "ではない",
              "image": "blue.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "である",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "である",
              "image": "blue.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "ではない",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "ではない",
              "image": "blue.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "である",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "である",
              "image": "blue.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ない",
              "image": "starup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ない",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ある",
              "image": "starup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ある",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ない",
              "image": "starup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ない",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ある",
              "image": "starup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ある",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "1"
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
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "ではない",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "ではない",
              "image": "circle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "である",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "これは",
              "sentence2": "三角形",
              "sentence3": "である",
              "image": "circle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "ではない",
              "image": "triangle.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "ではない",
              "image": "circle.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "である",
              "image": "triangle.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "これは",
              "sentence2": "円形",
              "sentence3": "である",
              "image": "circle.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いない",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いない",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いる",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "開いて",
              "sentence3": "いる",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いない",
              "image": "open_door.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いない",
              "image": "closed_door.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いる",
              "image": "open_door.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "ドアは",
              "sentence2": "閉じて",
              "sentence3": "いる",
              "image": "closed_door.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "ではない",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "ではない",
              "image": "blue.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "である",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "黄色",
              "sentence3": "である",
              "image": "blue.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "ではない",
              "image": "yellow.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "ではない",
              "image": "blue.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "である",
              "image": "yellow.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "点は",
              "sentence2": "青色",
              "sentence3": "である",
              "image": "blue.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ない",
              "image": "starup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ない",
              "image": "crossup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ある",
              "image": "starup.png",
              "correct": "F",
              "AorN": "A",
              "cond": "真肯定"
            },
            {
              "sentence1": "星は",
              "sentence2": "プラスの上に",
              "sentence3": "ある",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ない",
              "image": "starup.png",
              "correct": "F",
              "AorN": "N",
              "cond": "真否定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ない",
              "image": "crossup.png",
              "correct": "J",
              "AorN": "N",
              "cond": "偽否定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ある",
              "image": "starup.png",
              "correct": "J",
              "AorN": "A",
              "cond": "偽肯定"
            },
            {
              "sentence1": "プラスは",
              "sentence2": "星の上に",
              "sentence3": "ある",
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
          "width": 640,
          "height": 203.94,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "ご協力いただき、ありがとうございました。\n\nこの実験はこれで終了です。\n\nスペースキーを押すと終了します。",
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
//ファイル名をユーザーIDにする
const participantID = this.state.participantID

//csvファイルで保存する場合
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