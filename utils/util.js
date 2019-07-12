const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

let question= [
    [{
      "title": "小时候，你长大之后的理想职业是？",
      "list": [{
        "icon": "icon-1.png",
        "text": "一位设计师/建筑师",
        "res": "巴黎"
      },
      {
        "icon": "icon-2.png",
        "text": "一位教师/计算机专家",
        "res": "波尔多"
      },
      {
        "icon": "icon-3.png",
        "text": "一个职业运动员/消防员/警察",
        "res": "布雷顿"
      },
      {
        "icon": "icon-4.png",
        "text": "一名商人/律师/政客",
        "res": "地中海"
      }
      ]
    },
    {
      "title": "星期一的早上……",
      "list": [{
        "icon": "icon-5.png",
        "text": "对每个人都说早上好。",
        "res": "波尔多"
      },
      {
        "icon": "icon-6.png",
        "text": "迅速溜到桌边开始工作！",
        "res": "巴黎"
      },
      {
        "icon": "icon-7.png",
        "text": "我喜欢第一个到办公室开始梳理工作。",
        "res": "布雷顿"
      },
      {
        "icon": "icon-8.png",
        "text": "哎呀！又要迟到了！",
        "res": "地中海"
      }
      ]
    },
    {
      "title": "旅行中必不可少的是？",
      "list": [
        {
          "icon": "icon-9.png",
          "text": "太阳镜",
          "res": "地中海"
        },
        {
          "icon": "icon-10.png",
          "text": "相机",
          "res": "巴黎"
        },
        {
          "icon": "icon-11.png",
          "text": "帽子",
          "res": "布雷顿"
        },
        {
          "icon": "icon-12.png",
          "text": "便携式充电器/适配器",
          "res": "波尔多"
        }
      ]
    }
    ],
    [{
      "title": "你的职场座右铭是:",
      "list": [{
        "text": "一砖一瓦成就我的职场生涯。",
        "res": "布雷顿"
      },
      {
        "text": "世界是我的画布，我实现我的未来。",
        "res": "巴黎"
      },
      {
        "text": "保持冷静，继续前行。",
        "res": "波尔多"
      },
      {
        "text": "我的主场听我的！",
        "res": "地中海"
      }
      ]
    },
    {
      "title": "工作的时候……",
      "list": [{
        "text": "我喜欢和每个人打交道。",
        "res": "波尔多"
      },
      {
        "text": "我喜欢安静地在角落里做我的工作。",
        "res": "布雷顿"
      },
      {
        "text": "没有我，团队就失去了灵魂。",
        "res": "地中海"
      },
      {
        "text": "我的理想是不上班。",
        "res": "巴黎"
      }
      ]
    }
    ],
    [{
      "title": "你喜欢怎么打发周六的时光？",
      "list": [{
        "img": "img-20.jpg",
        "text": "买买买或者出门与朋友小聚",
        "res": "地中海"
      },
      {
        "img": "img-21.jpg",
        "text": "宅是一件很快乐的事",
        "res": "波尔多"
      },
      {
        "img": "img-22.jpg",
        "text": "作为一名运动达人，风雨无阻",
        "res": "布雷顿"
      },
      {
        "img": "img-23.jpg",
        "text": "逛展会接受艺术的熏陶",
        "res": "巴黎"
      }
      ]
    }
    ],
    [{
      "title": "你觉得去参观艺术博物馆怎么样？",
      "list": [{
        "text": "听起来太棒了，我的灵感需要激发！",
        "res": "巴黎"
      },
      {
        "text": "感觉很不错，应该会见到<br/>很多有趣的东西。",
        "res": "布雷顿"
      },
      {
        "text": "或许心情好一些了会去逛逛",
        "res": "波尔多"
      },
      {
        "text": "有点无聊，我宁愿做别的事情",
        "res": "地中海"
      }
      ]
    },
    {
      "title": "马上要去约会了，穿什么T恤好呢？",
      "list": [
        {
          "text": "经典POLO衫",
          "res": "波尔多"
        },
        {
          "text": "精致剪裁的T恤",
          "res": "巴黎"
        },
        {
          "text": "清新色彩的T恤",
          "res": "布雷顿"
        },
        {
          "text": "水手条纹衬衫",
          "res": "地中海"
        }
      ]
    }
    ],
    [{
      "title": "佛要金装，人靠衣装，<br/>你的穿衣风格怎么样？",
      "list": [{
        "text": "我还是相当满意我目前的穿衣风格的。",
        "res": "布雷顿"
      },
      {
        "text": "我喜欢提前精心准备要穿的衣服。",
        "res": "巴黎"
      },
      {
        "text": "随便舒适就好。",
        "res": "波尔多"
      },
      {
        "text": "一定要做人群中最闪亮的那颗星！",
        "res": "地中海"
      }
      ]
    },
    {
      "title": "买衣服的时候最看重什么？",
      "list": [{
        "text": "性价比第一",
        "res": "波尔多"
      },
      {
        "text": "仔细到检查每一条缝，<br/>确保质量无懈可击。",
        "res": "巴黎"
      },
      {
        "text": "我更喜欢省时省力的网上购物",
        "res": "布雷顿"
      },
      {
        "text": "什么潮我就试什么",
        "res": "地中海"
      }
      ]
    }]
  ];
let result = [
    {
      "style": "smart",
      "shareTitle": "绅士经典穿搭",
      "description": "勇敢果断刚毅是你的代名词，你习惯东奔西走，但每一个时刻都要完美出现，甚至于衣服的褶皱都要平坦无痕，细节的极致、面料的不易变形和花色的高级立体是你的诉求，绅士经典系列，每一件都带给你不一样的风采，让衣着配得上你闪光的才华。"
    },
    {
      "style": "casual",
      "shareTitle": "时尚通勤穿搭",
      "description": "你温润谦逊，朴素简单，职场拼杀之后内心深处依旧拥有无限的纯真美好，在炎炎夏日皮肤也要舒畅地呼吸，顺滑而下的手感带给你一切在握的舒适，百搭花色就好像无处不在的平凡却闪亮的时光，初心就在每一个清晨和黄昏的日光里，和煦而恒久。"
    },
    {
      "style": "traveller",
      "shareTitle": "随性休闲穿搭",
      "description": "看似与世无争，却在内心暗暗与自己较劲，想多看看这个偌大的世界。轻薄冰感又运动环保是你的最佳选择，撞色条纹不断突破又融合，好像是你天马行空的思维在驰骋，所到之处即是你的疆域。无论是纪念日的鲜花，还是路途中惊艳的风景，都是你时尚秀场的浪漫底色。"
    }
  ]


module.exports = {
  formatTime: formatTime,
  question: question,
  result: result
}
