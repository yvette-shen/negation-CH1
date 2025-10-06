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
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "该实验将在全屏模式下进行。",
          "hint": "请点击此处。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "1.\t研究背景与目的",
              "content": "\u003Cp\u003E否定句是我们日常生活中经常使用的一种表达方式。以往的研究表明，与肯定句相比，否定句更难理解，处理所需时间更长，错误率也更高。\n\u003Cp\u003E此前的研究大多以英语等否定词出现在句首的语言为对象，而像日语这样否定词通常出现在句末的语言，则仍有许多未知之处。此外，关于不同语言之间的对比研究也相对较少。\n\u003Cp\u003E本研究的目的，是通过让母语为日语或中文（普通话）的参与者完成句子和图像是否一致的判断任务，探讨否定句理解的认知机制。我们期望通过本研究，为语言结构差异如何影响语言理解提供新的见解。"
            },
            {
              "required": true,
              "type": "text",
              "title": "2.\t研究方法",
              "content": "\u003Cp\u003E参与者将受邀参加一项基于网络的句子–图像匹配实验。\n\u003Cp\u003E实验中，您需要阅读屏幕上显示的中文句子，并判断随后呈现的图像是否与句意相符，然后通过按键作答。\n\u003Cp\u003E实验将在网络上进行，参与者可在任意时间与地点，通过个人电脑或具备网络功能的设备自由参与。\n\u003Cp\u003E实验时间约为10–15分钟，您可在任何时候中止实验。\n\u003Cp\u003E本实验为匿名方式进行，我们不会收集任何可以识别您个人身份的信息。所有数据将以统计形式进行处理，仅用于本研究目的。\n\u003Cp\u003E本研究已通过明治学院大学心理学部伦理委员会的审查，并计划于2028年3月31日前完成(2025029)。"
            },
            {
              "required": true,
              "type": "text",
              "title": "3.\t研究执行人员",
              "content": "\u003Cp\u003E研究负责人：金城 光（明治学院大学 心理学部心理学科 教授）\n\u003Cp\u003E研究分担人：SHEN MURONG（明治学院大学 心理学部心理学科 四年级学生）、上田　卓司（早稲田大学　非常勤讲师）\n"
            },
            {
              "required": true,
              "type": "text",
              "title": "4.\t关于参与研究的自愿性",
              "content": "\u003Cp\u003E本研究为完全自愿参加。不参与本研究不会对您今后的学习或生活造成任何不利影响。\n\u003Cp\u003E如果您在实验过程中感觉不适，也可以随时中止或退出实验。\n\u003Cp\u003E此外，是否参与本研究以及实验中的回答内容，不会影响您的学业成绩或学分获取。\n\u003Cp\u003E由于本实验采用匿名方式进行，我们无法从数据中识别出参与者的个人身份。因此，实验结束后若提出撤回参与（删除数据）的要求，我们将无法满足，还请您谅解。"
            },
            {
              "required": true,
              "type": "text",
              "title": "5.\t邀请您参与研究的原因",
              "content": "本研究旨在探讨中文和日文中否定句的理解差异，因此我们邀请母语为日语或中文（普通话），年龄在18至30岁之间的青年人群参与。我们诚挚地邀请符合上述条件的您参与本研究。"
            },
            {
              "required": true,
              "type": "text",
              "title": "6.\t潜在风险与不利影响",
              "content": "参与本研究不会对您的身体健康造成任何风险，也不会引起疼痛或其他不适感，也不会带来其他不利影响。"
            },
            {
              "required": true,
              "type": "text",
              "title": "7.\t研究数据的用途与管理",
              "content": "\u003Cp\u003E您提供的数据将仅用于本研究的实施与分析，不会提供给研究人员以外的任何人或其他机构。\n\u003Cp\u003E数据将保存在采取充分信息安全措施的计算机和外部存储设备中，并通过加密和实体锁定进行严格管理，以防止信息泄露、遗失或盗用。\n\u003Cp\u003E提供的数据将保存至2038年3月31日。期限届满后，将通过对存储数据的外部存储介质进行物理销毁的方式，彻底删除相关数据。\n"
            },
            {
              "required": true,
              "type": "text",
              "title": "8.\t本研究的意义",
              "content": "虽然您本人不会因参与本研究而获得直接利益，但本研究有望为心理语言学及语言处理的认知心理学研究做出贡献，并可能在第二语言学习的教育与实际应用方面带来启发。"
            },
            {
              "required": true,
              "type": "text",
              "title": "9.\t关于研究相关资料的公开",
              "content": "如果您有需要，我们将在不泄露他人个人信息、且不影响研究原创性的前提下，向您提供有关研究计划、研究方法及成果的资料。若您对本研究有任何疑问，也欢迎随时与我们联系。"
            },
            {
              "required": true,
              "type": "text",
              "title": "10.\t研究费用",
              "content": "本研究无需任何经费，也不涉及研究经费的支出。"
            },
            {
              "required": true,
              "type": "text",
              "title": "11.\t利益冲突",
              "content": "本研究的研究人员不存在任何利益冲突。"
            },
            {
              "required": true,
              "type": "text",
              "title": "12.\t 参与研究的酬谢",
              "content": "参与本研究不提供任何酬金或礼品，敬请理解。"
            },
            {
              "required": true,
              "type": "text",
              "title": "13.\t 知识产权归属",
              "content": "本研究如产生专利权等知识产权，其归属权将属于研究主办单位明治学院大学，不属于参与者个人。"
            },
            {
              "required": true,
              "type": "text",
              "title": "14.\t 联系方式",
              "content": "\u003Cp\u003E负责人：SHEN MURONG\n\u003Cp\u003E所属：明治学院大学 心理学部 心理学科 四年级\n\u003Cp\u003E地址：〒108-8636 东京都港区白金台1-2-37\n\u003Cp\u003E电话：03-5421-5364（金城研究室）\n\u003Cp\u003E电子邮件：22ps1012@meijigakuin.ac.jp"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "若您同意参与，请点击以下选项中的「同意」，然后点击「下一步」按钮。若您不同意，请按下ESC键之后将窗口关闭。",
              "options": [
                {
                  "label": "同意",
                  "coding": "informedConsent"
                }
              ],
              "name": "esc"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "下一步",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        },
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
              "text": "您好！\n非常感谢您参与本次实验。",
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
          "plugins": []
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003E因研究需要，请告诉我一些关于您的情况。\n\n\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-center\"\u003E您填写的信息仅用于实验结果分析，不会用于其他目的，\n且不会涉及任何个人身份识别信息。\u003C\u002Fp\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            请告诉我您的年龄。\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            请选择您的性别所对应的选项。\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"Female\"\u003E女性\u003C\u002Foption\u003E\n              \u003Coption value=\"Male\"\u003E男性\u003C\u002Foption\u003E\n              \u003Coption value=\"Other\"\u003E其他\u003C\u002Foption\u003E\n              \u003Coption value=\"no answer\"\u003E不予回答\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Language identity --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            请告诉我您的母语。\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"Language\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"JA\"\u003E日语\u003C\u002Foption\u003E\n              \u003Coption value=\"CH\"\u003E中文（普通话）\u003C\u002Foption\u003E\n              \u003Coption value=\"OT\"\"\u003E其他\n              \u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Birth-assigned gender category, following Tate et al.\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              Which gender were you assigned at birth?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"gender-birth\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n                \u003Coption value=\"intersex\"\u003EIntersex\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Education\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Please specify your highest degree:\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003Eno degree\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EHigh school diploma\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor's\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EMaster's\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EPhD\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Occupation\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is your occupation, or if you still study, your field?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Demography form",
          "files": {}
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -25,
              "top": -275,
              "angle": 0,
              "width": 128,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "实验说明",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": -250,
              "top": 0,
              "angle": 0,
              "width": 498.37,
              "height": 494.67,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "接下来将说明即将进行的任务。\n\n1. 首先，屏幕中央会显示「＋」标记。\n    该标记用于指示注视点，请注视屏幕中央。\n\n2. 随后，一个句子将被分为三个部分，依次在屏幕上呈现。\n\n3. 请仔细阅读显示的句子，理解其含义。\n    阅读完一个部分后，按下「空格键」进入下一部分。\n\n4. 读完句子后将显示一张图片。\n　图片出现前的间隔时间可能“较短”或“较长”。\n\n5. 请判断显示的图片内容是否与刚才阅读的句子含义相符。\n\n6. 若认为匹配请按“F”键，若认为不匹配请按“J”键。\n\n7. 请力求准确且快速地做出判断。\n\n若有任何疑问，请在实验开始前告知。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "19",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -13,
              "top": 275,
              "angle": 0,
              "width": 432,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "准备就绪后，请按「空格键」开始练习。",
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
          "title": "Instruction",
          "plugins": []
        },
        {
          "type": "lab.flow.Sequence",
          "files": {
            "girl_sitting.png": "embedded\u002F76a6fde5b9db55d8cc4c977a8001529b8e7751c9ed8be0d5782d83e93e8660a3.png",
            "girl_standing.png": "embedded\u002Fe86bd5f02f20965928972ef994b770e3fcafdb139a6b8747974d60a3314bae68.png",
            "box_closed.png": "embedded\u002Fc32ccc2d5270b90f08a07bcb666b454408274818cc036347c61dd78c1c40f433.png",
            "box_open.png": "embedded\u002F6f61a711f39c87844bd34b5d1cecb2a6b7fe58f19cb077e607f00e05673a8cf9.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "TrainingSequence",
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_training1500",
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
                        "width": 176,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "阅读完毕后请按下空格键",
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
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 176,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "阅读完毕后请按下空格键",
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
                        "width": 176,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "阅读完毕后请按下空格键",
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
                        "width": 399.36,
                        "height": 399.36,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${this.files[this.parameters.image]}",
                        "autoScale": false
                      },
                      {
                        "type": "i-text",
                        "left": -175,
                        "top": 250,
                        "angle": 0,
                        "width": 441.63,
                        "height": 39.05,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "若显示的图像内容与刚才阅读的文字含义一致，请按「F」键；\n若认为不一致，请按「J」键。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "left"
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
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "站着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "正",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女孩",
                  "sentence2": "没有",
                  "sentence3": "坐着",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱子",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_training250",
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
                        "width": 176,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "阅读完毕后请按下空格键",
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
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 176,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "阅读完毕后请按下空格键",
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
                        "width": 176,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "阅读完毕后请按下空格键",
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
                    "title": "Blank_250",
                    "timeout": "250"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 399.36,
                        "height": 399.36,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${this.files[this.parameters.image]}",
                        "autoScale": false
                      },
                      {
                        "type": "i-text",
                        "left": -175,
                        "top": 250,
                        "angle": 0,
                        "width": 441.63,
                        "height": 39.05,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "若显示的图像内容与刚才阅读的文字含义一致，请按「F」键；\n若认为不一致，请按「J」键。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "left"
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
            }
          ]
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 15,
              "top": -75,
              "angle": 0,
              "width": 630,
              "height": 151.87,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "练习到此结束。\n\n从下一轮试行开始，将不会显示按键提示说明，\n请注意按下相应按键。",
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
              "top": 125,
              "angle": 0,
              "width": 432,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "准备就绪后请按下「空格键」，\n进入正式实验。",
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
          "type": "lab.flow.Sequence",
          "files": {
            "man_running.png": "embedded\u002F47464c417b0e4cae721a939679157d94c0cb4f74f83a4b6df8b1ceb2cf2d4bd4.png",
            "man_swimming.png": "embedded\u002F8e16e57d0414c21f5faef3ba3a1b5ec412850b833c8c08871a1f46b003c3f80d.png",
            "book_closed.png": "embedded\u002F8cda40f5087030ef8f3eea8dfdc4c604bed73f88f48f4f0206cecf5cddfe926e.png",
            "book_open.png": "embedded\u002F8fc5f60561910d03dc348de985f4ad9e0775158661f63b471c4394d3b3d27e4e.png",
            "woman_cleaning.png": "embedded\u002F6808ea150cb40c315658fedcfa6a755268ce0dfd41b159432354e6fd7c8f7a9f.png",
            "woman_cooking.png": "embedded\u002Fd0b1953fca9f39cfe8c8264ead0fe8e6db3dda9587a731255e95b6e880a650e7.png",
            "man_calling.png": "embedded\u002Fbe12e13235b7562dc5494bc437efc9e6b04321535fed6be555b117014fb73198.png",
            "man_driving.png": "embedded\u002Fd9fcaa4d5c13d0dedb6ef383085d3d3fbbe09a2be0a4c4e71e204fdf249852d0.png",
            "woman_singing.png": "embedded\u002F663abd7fd95a94c827ac34e11a08deae40a1b303d925e801ef62819d820cf771.png",
            "woman_dancing.png": "embedded\u002F22a6d23689f647c1a7256d9691cc1d426625698d8b204017dd313b5d48d1c1f0.png",
            "cat_playing.png": "embedded\u002F615ada0df67f9b362f5fa1ba7063ae4639c4617496e783f6f05ca1d9d56abf00.png",
            "cat_sleeping.png": "embedded\u002Ff58b0e9354939d8fd90bc2dcd10159845f85ad70e8885a5251f1652aee17e779.png",
            "dog_barking.png": "embedded\u002Fb85fa15c9b787ba3fe36d8e4c9576c92e395431ca4f3cdb1b9566e13d6fb5210.png",
            "open_window.png": "embedded\u002F7c3895e516484ddd2b36fbbb441d937feb367f991e6168e5dc6d5c5349c1e39e.png",
            "closed_window.png": "embedded\u002Fc2172749bd995857ab57260fb8e69d91ffb3931a1d9f634bf06c79d0f00032b0.png",
            "open_door.png": "embedded\u002Fa1f3004ec567700aa9385f5656402d7441ca220c85bf78ff87f03da68c9aee31.png",
            "closed_door.png": "embedded\u002Fcbb2863892b8b0472418fc3b59dbdb27927e4c2cb64e92cd201775ab648b3645.png",
            "awake.png": "embedded\u002F2202cc3ac77c6bf5e47310965d2c732a50f1c8c3f583079937ad02f5a3f1ee55.png",
            "sleep.png": "embedded\u002F7d3eeca415af3b8e397e95f4429b20e891971abb9d91bc495b9daa51527dbed8.png",
            "umbrella_closed.png": "embedded\u002Fd74395c29eba7ac991a1530c6e31eef04b9e85ee83b4d9072855dedbfc776171.png",
            "umbrella_open.png": "embedded\u002F02babb519cc4f1559f48bd71f225623512ef2a384615e65d114feee722014c4d.png",
            "dog_eating.png": "embedded\u002F10c8cce9351e57e5e6903efffe7571de39f4f2d835c5ceac207d7c38e8fc3118.png",
            "light_on.png": "embedded\u002F19010ef5f47cb9a0a81d16f9188b0d68b419752d4021d2ec285aa13c228ba751.png",
            "light_off.png": "embedded\u002Fa005b9773c7dba86858d660a35c3efa51b3347cfdfee869bdacc06ac779c1cfc.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LoopSequence",
          "shuffle": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "门",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "门",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "门",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "门",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "门",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "门",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "门",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "门",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "电灯",
                  "sentence2": "没有",
                  "sentence3": "关上",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "正",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "没有",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "没有",
                  "sentence3": "开着",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "正",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "没有",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "窗户",
                  "sentence2": "没有",
                  "sentence3": "关着",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "在",
                  "sentence3": "跑步",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "在",
                  "sentence3": "跑步",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "不在",
                  "sentence3": "跑步",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "不在",
                  "sentence3": "跑步",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "在",
                  "sentence3": "游泳",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "在",
                  "sentence3": "游泳",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "不在",
                  "sentence3": "游泳",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "男人",
                  "sentence2": "不在",
                  "sentence3": "游泳",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "在",
                  "sentence3": "跳舞",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "在",
                  "sentence3": "跳舞",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "不在",
                  "sentence3": "跳舞",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "不在",
                  "sentence3": "跳舞",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "在",
                  "sentence3": "唱歌",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "在",
                  "sentence3": "唱歌",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "不在",
                  "sentence3": "唱歌",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女人",
                  "sentence2": "不在",
                  "sentence3": "唱歌",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "在",
                  "sentence3": "睡觉",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "在",
                  "sentence3": "睡觉",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "不在",
                  "sentence3": "睡觉",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "不在",
                  "sentence3": "睡觉",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "在",
                  "sentence3": "玩耍",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "在",
                  "sentence3": "玩耍",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "不在",
                  "sentence3": "玩耍",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "小猫",
                  "sentence2": "不在",
                  "sentence3": "玩耍",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop1500",
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
                        "width": "400",
                        "height": "400",
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
                  "sentence1": "孩子",
                  "sentence2": "正",
                  "sentence3": "睡着",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "正",
                  "sentence3": "睡着",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "没有",
                  "sentence3": "睡着",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "没有",
                  "sentence3": "睡着",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "正",
                  "sentence3": "醒着",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "正",
                  "sentence3": "醒着",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "没有",
                  "sentence3": "醒着",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "孩子",
                  "sentence2": "没有",
                  "sentence3": "醒着",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "正",
                  "sentence3": "打开着",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "正",
                  "sentence3": "打开着",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "正",
                  "sentence3": "合着",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "正",
                  "sentence3": "合着",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "没有",
                  "sentence3": "合上",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "绘本",
                  "sentence2": "没有",
                  "sentence3": "合上",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "正",
                  "sentence3": "打开着",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "正",
                  "sentence3": "打开着",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "没有",
                  "sentence3": "打开",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "正",
                  "sentence3": "合着",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "正",
                  "sentence3": "合着",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "没有",
                  "sentence3": "合上",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "雨伞",
                  "sentence2": "没有",
                  "sentence3": "合上",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "在",
                  "sentence3": "做饭",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "在",
                  "sentence3": "做饭",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "不在",
                  "sentence3": "做饭",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "不在",
                  "sentence3": "做饭",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "在",
                  "sentence3": "打扫",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "在",
                  "sentence3": "打扫",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "不在",
                  "sentence3": "打扫",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "母亲",
                  "sentence2": "不在",
                  "sentence3": "打扫",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "在",
                  "sentence3": "开车",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "在",
                  "sentence3": "开车",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "不在",
                  "sentence3": "开车",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "不在",
                  "sentence3": "开车",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "在",
                  "sentence3": "打电话",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "在",
                  "sentence3": "打电话",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "不在",
                  "sentence3": "打电话",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "父亲",
                  "sentence2": "不在",
                  "sentence3": "打电话",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "在",
                  "sentence3": "吃饭",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "在",
                  "sentence3": "吃饭",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "不在",
                  "sentence3": "吃饭",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "不在",
                  "sentence3": "吃饭",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "在",
                  "sentence3": "汪汪叫",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "在",
                  "sentence3": "汪汪叫",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "不在",
                  "sentence3": "汪汪叫",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "小狗",
                  "sentence2": "不在",
                  "sentence3": "汪汪叫",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_250",
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
                    "title": "Blank_250",
                    "timeout": "250"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": "400",
                        "height": "400",
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
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "最后有几个问题需要您回答。请阅读以下问题，选择最符合您情况的选项进行作答。作答时请勾选对应选项的按钮。\n完成作答后，请点击“Continue”按钮进入下一页。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "1. 您觉得本次实验的课题回答起来困难吗？",
              "options": [
                {
                  "label": "非常简单",
                  "coding": "1"
                },
                {
                  "label": "略显简单",
                  "coding": "2"
                },
                {
                  "label": "难以定论",
                  "coding": "3"
                },
                {
                  "label": "略显困难",
                  "coding": "4"
                },
                {
                  "label": "非常困难",
                  "coding": "5"
                }
              ],
              "name": "1."
            },
            {
              "required": true,
              "type": "radio",
              "label": "2. 你认为自己正确完成了课题吗",
              "options": [
                {
                  "label": "完全没能做到",
                  "coding": "1"
                },
                {
                  "label": "做得不太好",
                  "coding": "2"
                },
                {
                  "label": "难以定论",
                  "coding": "3"
                },
                {
                  "label": "基本上正确完成了",
                  "coding": "4"
                },
                {
                  "label": "完成得非常好",
                  "coding": "5"
                }
              ],
              "name": "2."
            },
            {
              "required": true,
              "type": "radio",
              "label": "3. 您认为自己在实验进程中足够集中注意力了吗？",
              "options": [
                {
                  "label": "完全没能集中注意力",
                  "coding": "1"
                },
                {
                  "label": "没太能集中注意力",
                  "coding": "2"
                },
                {
                  "label": "难以定论",
                  "coding": "3"
                },
                {
                  "label": "基本上集中了注意力",
                  "coding": "4"
                },
                {
                  "label": "非常集中注意力",
                  "coding": "5"
                }
              ],
              "name": "3."
            },
            {
              "required": true,
              "type": "radio",
              "label": "4. 在进行实验课题期间，您感到疲劳的程度如何？",
              "options": [
                {
                  "label": "完全没觉得疲劳",
                  "coding": "1"
                },
                {
                  "label": "没太觉得疲劳",
                  "coding": "2"
                },
                {
                  "label": "难以定论",
                  "coding": "3"
                },
                {
                  "label": "略微有些疲劳",
                  "coding": "4"
                },
                {
                  "label": "非常疲劳",
                  "coding": "5"
                }
              ],
              "name": "4."
            },
            {
              "required": true,
              "type": "radio",
              "label": "5. 您一年平均读多少本书？",
              "options": [
                {
                  "label": "0本",
                  "coding": "1"
                },
                {
                  "label": "１〜４本",
                  "coding": "2"
                },
                {
                  "label": "５〜１０本",
                  "coding": "3"
                },
                {
                  "label": "１１〜２０本",
                  "coding": "4"
                },
                {
                  "label": "２１本以上",
                  "coding": "5"
                }
              ],
              "name": "5."
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "国家及地方政府公告",
                  "coding": "Q1"
                },
                {
                  "label": "媒体·宣传刊物",
                  "coding": "Q2"
                },
                {
                  "label": "大学・工作单位的通知",
                  "coding": "Q3"
                },
                {
                  "label": "医疗相关文件",
                  "coding": "Q4"
                },
                {
                  "label": "说明书·操作手册",
                  "coding": "Q5"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E完全不觉得\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E不太觉得\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E难以定论\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E稍微觉得\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003E特别觉得\u003C\u002Fspan\u003E"
              ],
              "label": "6. 在阅读以下文件时，您是否会觉得否定句难以理解？（请分别作答）",
              "name": "6."
            },
            {
              "required": false,
              "type": "textarea",
              "label": "6.1除了上述文件之外，若您在日常生活或学习中遇到过难以理解否定句的情况，请具体说明。",
              "help": "（请自由填写）",
              "name": "6.1"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "7. 在回答课题时，您是如何做出判断的？请说明您特别注意的点。",
              "help": "（请自由填写）",
              "name": "7."
            },
            {
              "required": false,
              "type": "textarea",
              "label": "8. 如果您对整个实验有任何感想或意见，请告知我们。",
              "help": "（请自由填写）",
              "name": "8."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questionnaire"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 320,
              "height": 203.94,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "感谢您的协助。\n\n本次实验到此结束。\n\n按下空格键即可退出。",
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
    }
  ]
})

// Let's go!
study.run()