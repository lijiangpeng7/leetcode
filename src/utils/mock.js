export let originData = [{
  "displayName": "设置数据",
  "sortable": false,
  "list": [{
    "name": "campaign_name",
    "displayName": "广告组",
    "required": true,
    "selected": true,
    "hide": false,
    "sortable": false,
    "fixed": "left",
    "align": "left",
    "width": "200px"
  }, {
    "name": "third_account_name",
    "displayName": "账户名称",
    "required": true,
    "selected": true,
    "hide": false,
    "sortable": false,
    "fixed": "left",
    "align": "left",
    "width": "200px"
  }, {
    "name": "third_account_id",
    "displayName": "账户ID",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": false,
    "align": "left",
    "width": "150px"
  }, {
    "name": "third_campaign_id",
    "displayName": "广告组ID",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": false,
    "align": "left",
    "width": "150px"
  }, {
    "name": "account_alias",
    "displayName": "账户别名",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": false,
    "align": "left"
  }, {
    "name": "product_name",
    "displayName": "产品名称",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": false,
    "align": "left"
  }, {
    "name": "operator_name",
    "displayName": "优化师",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": false,
    "align": "left"
  }]
}, {
  "displayName": "展示数据",
  "sortable": false,
  "list": [{
    "name": "show_count",
    "displayName": "展现量",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "cost",
    "displayName": "花费",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "click_count",
    "displayName": "点击量",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "ctr",
    "displayName": "点击率",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": false,
    "align": "right",
    "width": "120px"
  }, {
    "name": "cpc",
    "displayName": "点击单价",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": false,
    "align": "right",
    "width": "120px"
  }, {
    "name": "cpm",
    "displayName": "千次展现均价",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": false,
    "align": "right",
    "width": "120px"
  }]
}, {
  "displayName": "转化数据",
  "sortable": false,
  "list": [{
    "name": "convert_cost",
    "displayName": "转化成本",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "convert_rate",
    "displayName": "转化率",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "convert_count",
    "displayName": "转化数",
    "required": false,
    "selected": true,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }]
}, {
  "displayName": "应用下载广告数据",
  "sortable": false,
  "list": [{
    "name": "app_active",
    "displayName": "激活",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_click_install",
    "displayName": "点击安装数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_download_finish",
    "displayName": "安卓下载完成",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_download_start",
    "displayName": "安卓下载开始",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_in_app_cart",
    "displayName": "加入购物车",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_in_app_detail_uv",
    "displayName": "详情页到站uv",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_in_app_order",
    "displayName": "提交订单",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_in_app_pay",
    "displayName": "付费",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_in_app_uv",
    "displayName": "到达uv",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_install_finish",
    "displayName": "安卓安装完成",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_pay_count",
    "displayName": "付费数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_register",
    "displayName": "注册",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "next_day_open",
    "displayName": "次留数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "next_day_open_cost",
    "displayName": "次留成本",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "next_day_open_rate",
    "displayName": "次留率",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_active_cost",
    "displayName": "激活成本",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_active_rate",
    "displayName": "激活率(%)",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_register_cost",
    "displayName": "注册成本",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "app_register_cost",
    "displayName": "注册成本",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "game_addiction",
    "displayName": "关键行为数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "game_addiction_cost",
    "displayName": "关键行为成本",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": false,
    "align": "right",
    "width": "120px"
  }, {
    "name": "game_addiction_rate",
    "displayName": "关键行为成率",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": false,
    "align": "right",
    "width": "120px"
  }]
}, {
  "displayName": "落地页及门店数据",
  "sortable": false,
  "list": [{
    "name": "web_button",
    "displayName": "按钮button",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_consult",
    "displayName": "在线咨询",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_consult_effective",
    "displayName": "智能电话有效咨询",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_form",
    "displayName": "表单提交",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_lottery",
    "displayName": "抽奖",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_map_search",
    "displayName": "地图搜索",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_phone",
    "displayName": "电话拨打数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_phone_confirm",
    "displayName": "智能电话确认拨打",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_phone_connect",
    "displayName": "智能电话确认接通",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_qq",
    "displayName": "QQ咨询数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_redirect",
    "displayName": "页面跳转",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_shopping",
    "displayName": "商品购买",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_view",
    "displayName": "关键页面浏览",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_vote",
    "displayName": "投票",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "web_wechat",
    "displayName": "微信",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }]
}, {
  "displayName": "附加创意",
  "sortable": false,
  "list": [{
    "name": "advanced_creative_counsel_click",
    "displayName": "在线咨询",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "advanced_creative_form_click",
    "displayName": "表单提交",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "advanced_creative_phone_click",
    "displayName": "电话按钮",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }]
}, {
  "displayName": "视频数据",
  "sortable": false,
  "list": [{
    "name": "video_valid_play_rate",
    "displayName": "有效播放率(%)",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_play_100_feed_break",
    "displayName": "99%进度播放数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "play_over_rate",
    "displayName": "播完率(%)",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_valid_play",
    "displayName": "有效播放数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_total_play",
    "displayName": "播放数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_play_100_feed_break",
    "displayName": "播放100%进度总数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_play_75_feed_break",
    "displayName": "播放75%进度总数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_play_50_feed_break",
    "displayName": "播放50%进度总数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_play_25_feed_break",
    "displayName": "播放25%进度总数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_play_duration_sum",
    "displayName": "平均单次播放时长(秒)",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "video_wifi_play",
    "displayName": "wifi播放数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }]
}, {
  "displayName": "互动数据",
  "sortable": false,
  "list": [{
    "name": "interact_challenge_click",
    "displayName": "挑战赛查看数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_comment",
    "displayName": "评论数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_follow",
    "displayName": "关注数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_home_visited",
    "displayName": "主页访问量",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_like",
    "displayName": "点赞数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_music_click",
    "displayName": "音乐查看数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_per_cost",
    "displayName": "单次互动成本",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }, {
    "name": "interact_share",
    "displayName": "分享数",
    "required": false,
    "selected": false,
    "hide": false,
    "sortable": true,
    "align": "right",
    "width": "120px"
  }]
}]

export let behaviorInterest = {
  "rtnCode": 200,
  "rtnMsg": "请求成功",
  "rtnData": {
      "behavior_interest": {
          "interest": [
              {
                  "des": "指学校或培训机构为学生提供的学习技能或素质提升的商品或服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "为0-6岁的儿童提供的教育，包括语言启蒙、智力开发等学前教育。智力开发类的游戏，玩具，画板也算到这里",
                          "level": 2,
                          "children": [],
                          "name": "早教与学前教育",
                          "count": 40000000,
                          "id": 101
                      },
                      {
                          "des": "为小学、初中和高中学生提供的教育",
                          "level": 2,
                          "children": [
                              {
                                  "des": "为小学学生提供的各科教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "小学教育",
                                  "count": 40000000,
                                  "id": 10201
                              },
                              {
                                  "des": "为初中学生提供的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "初中教育",
                                  "count": 40000000,
                                  "id": 10202
                              },
                              {
                                  "des": "为高中生提供的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "高中教育",
                                  "count": 40000000,
                                  "id": 10203
                              },
                              {
                                  "des": "与应试教育对应，注重思想道德素质、能力培养、个性发展、身体健康和心理健康的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "中小学素质教育",
                                  "count": 21892901,
                                  "id": 10204
                              }
                          ],
                          "name": "基础教育",
                          "count": 76758682,
                          "id": 102
                      },
                      {
                          "des": "为用户提供的为提升非母语水平而进行的培训",
                          "level": 2,
                          "children": [
                              {
                                  "des": "为12-18岁青少年提供的英语培训，区分应试要求的",
                                  "level": 3,
                                  "children": [],
                                  "name": "青少年英语",
                                  "count": 16183637,
                                  "id": 10302
                              },
                              {
                                  "des": "为提升日语韩语水平进行的语言培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "日语韩语",
                                  "count": 622358,
                                  "id": 10304
                              }
                          ],
                          "name": "语言培训",
                          "count": 16761572,
                          "id": 103
                      },
                      {
                          "des": "根据国家教育部下达的招生计划录取的学生，完成学业后由学校颁发国家统一印制的毕业证书和学历证书的教育方式",
                          "level": 2,
                          "children": [
                              {
                                  "des": "含自考、远程教育、成人高考（脱产、业余、函授）、开放大学等",
                                  "level": 3,
                                  "children": [],
                                  "name": "成人学历教育",
                                  "count": 40000000,
                                  "id": 10405
                              },
                              {
                                  "des": "由中华人民共和国教育部高等教育司组织的全国性英语考试，包括英语四级考试和英语六级考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "四六级英语考试",
                                  "count": 17897976,
                                  "id": 10402
                              },
                              {
                                  "des": "专项针对考研英语科目的辅导",
                                  "level": 3,
                                  "children": [],
                                  "name": "考研英语考试",
                                  "count": 16323406,
                                  "id": 10403
                              },
                              {
                                  "des": "为准备全国研究生入学考试而进行的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "考研辅导",
                                  "count": 17793097,
                                  "id": 10404
                              },
                              {
                                  "des": "培养能够胜任工商企业和经济管理部门高层管理工作需要的管理人才",
                                  "level": 3,
                                  "children": [],
                                  "name": "MBA/EMBA",
                                  "count": 10909519,
                                  "id": 10406
                              }
                          ],
                          "name": "学历教育",
                          "count": 83632981,
                          "id": 104
                      },
                      {
                          "des": "出国留学要求的各项考试，包括语言能力考试和升学考试",
                          "level": 2,
                          "children": [
                              {
                                  "des": "针对申请去北美、英国等国家接受高等教育的非英语国家学生语言考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "雅思/托福",
                                  "count": 15666708,
                                  "id": 10501
                              },
                              {
                                  "des": "GRE、GMAT、LSAT、SAT、ACT等外国高等教育入学考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "留学入学考试",
                                  "count": 37134829,
                                  "id": 10502
                              }
                          ],
                          "name": "出国留学",
                          "count": 43425919,
                          "id": 105
                      },
                      {
                          "des": "受教育者获得某种职业或生产劳动所需要的职业知识、技能和职业道德的教育",
                          "level": 2,
                          "children": [
                              {
                                  "des": "从事消防工程等职业的人员提供获得消防工程师执业资格的培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "消防工程培训与教育",
                                  "count": 40000000,
                                  "id": 10613
                              },
                              {
                                  "des": "为准备创业开网店的创业者提供的教育培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "网店培训与教育",
                                  "count": 40000000,
                                  "id": 10614
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "职业培训其他",
                                  "count": 40000000,
                                  "id": 10615
                              },
                              {
                                  "des": "由相关公务员主管部门组织的公务员的录用考试及为准备考试进行的辅导",
                                  "level": 3,
                                  "children": [],
                                  "name": "公务员培训与考试",
                                  "count": 15847091,
                                  "id": 10606
                              },
                              {
                                  "des": "含执业医师，执业药师，护士资格，卫生职称在内的培训与考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "医学资格培训与考试",
                                  "count": 3286896,
                                  "id": 10607
                              },
                              {
                                  "des": "为取得机动车辆驾驶人员所需申领的证照进行培训与考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "驾驶培训与考试",
                                  "count": 5242727,
                                  "id": 10612
                              },
                              {
                                  "des": "为从事律师、法官、检察官、公证员职业必须通过的国家统一法律职业资格考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "司法考试",
                                  "count": 12841339,
                                  "id": 10610
                              }
                          ],
                          "name": "职业培训",
                          "count": 102659716,
                          "id": 106
                      },
                      {
                          "des": "从学习者兴趣出发，培养才艺的教育培训， 包含各类艺术、表演、体育、手工艺、编程等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "含绘画、书法、艺术教育与插花、剪纸等各类手工艺",
                                  "level": 3,
                                  "children": [],
                                  "name": "美术/书法/手工艺",
                                  "count": 18283172,
                                  "id": 10702
                              },
                              {
                                  "des": "含基础乐理、演唱和各类中外乐器教学等",
                                  "level": 3,
                                  "children": [],
                                  "name": "声乐与乐器",
                                  "count": 15795260,
                                  "id": 10701
                              }
                          ],
                          "name": "兴趣教育",
                          "count": 31648496,
                          "id": 107
                      },
                      {
                          "des": "提高个人创造和管理财富能力的培训与服务，培训内容包括财务知识、投资战略、经济常识、法律规章等",
                          "level": 2,
                          "children": [],
                          "name": "财商教育",
                          "count": 40000000,
                          "id": 108
                      }
                  ],
                  "name": "教育",
                  "count": 233954828,
                  "id": 1
              },
              {
                  "des": "指对货币流通和银行信用相关的各种活动",
                  "level": 1,
                  "children": [
                      {
                          "des": "依法成立的，经营货币信贷业务的金融机构",
                          "level": 2,
                          "children": [
                              {
                                  "des": "银行等金融机构发放给符合条件的自然人的本，外币贷款",
                                  "level": 3,
                                  "children": [],
                                  "name": "个人贷款",
                                  "count": 27340082,
                                  "id": 20103
                              },
                              {
                                  "des": "指企业为了生产经营，与金融机构规定利率和期限的一种借款方式",
                                  "level": 3,
                                  "children": [],
                                  "name": "企业贷款",
                                  "count": 20785401,
                                  "id": 20104
                              },
                              {
                                  "des": "银行针对特定目标客户群开发设计并销售的资金投资和管理计划。",
                                  "level": 3,
                                  "children": [],
                                  "name": "银行理财",
                                  "count": 33334073,
                                  "id": 20105
                              }
                          ],
                          "name": "银行",
                          "count": 58263394,
                          "id": 201
                      },
                      {
                          "des": "证券是 “股票” “债券” 等能够证明持有者财产价值的凭证",
                          "level": 2,
                          "children": [
                              {
                                  "des": "股份公司发行给股东作为持股凭证并借以取得股息和红利的证券",
                                  "level": 3,
                                  "children": [],
                                  "name": "股票",
                                  "count": 4673338,
                                  "id": 20201
                              },
                              {
                                  "des": "指在证券行业为证券投资者提供专业证券投资咨询的平台",
                                  "level": 3,
                                  "children": [],
                                  "name": "投资顾问",
                                  "count": 7213783,
                                  "id": 20202
                              },
                              {
                                  "des": "主要是指证券投资基金",
                                  "level": 3,
                                  "children": [],
                                  "name": "基金",
                                  "count": 36241562,
                                  "id": 20203
                              },
                              {
                                  "des": "包括了商品期货、股指期货、利率期货、外汇期货、金属期货",
                                  "level": 3,
                                  "children": [],
                                  "name": "期货",
                                  "count": 7159325,
                                  "id": 20205
                              }
                          ],
                          "name": "证券",
                          "count": 44761681,
                          "id": 202
                      },
                      {
                          "des": "投保人根据合同约定，向保险人交付保险费，保险人按保险合同的约定对所承保的内容承担赔偿责任的一种行为。",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指保险公司对财产及其有关利益因灾害或意外事故造成的损失承担赔偿责任的保险。包括车险等",
                                  "level": 3,
                                  "children": [],
                                  "name": "财产保险",
                                  "count": 55034902,
                                  "id": 20301
                              },
                              {
                                  "des": "对旅行途中可能发生的各种意外（除疾病、外科手术、自杀、战事变乱、职业性运动竞赛与故意行为外）所导致的一切意外死伤事故所做的保障",
                                  "level": 3,
                                  "children": [],
                                  "name": "旅游保险",
                                  "count": 12590322,
                                  "id": 20304
                              },
                              {
                                  "des": "以人的寿命和身体为保险标的的保险，包括意外险和养老金保险",
                                  "level": 3,
                                  "children": [],
                                  "name": "人寿保险",
                                  "count": 15016471,
                                  "id": 20303
                              },
                              {
                                  "des": "专为少年儿童设计，用于解决其成长过程中所需要的教育、创业、婚嫁费用，以及应付孩子可能面临的疾病、伤残、死亡等风险的保险产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "少儿保险",
                                  "count": 2706788,
                                  "id": 20305
                              }
                          ],
                          "name": "保险（按险种）",
                          "count": 60336603,
                          "id": 203
                      },
                      {
                          "des": "传统金融机构与互联网企业利用互联网技术和信息通信技术的新型金融业务模式",
                          "level": 2,
                          "children": [
                              {
                                  "des": "通过互联网平台实现借贷行为平台",
                                  "level": 3,
                                  "children": [],
                                  "name": "互联网贷款",
                                  "count": 67544674,
                                  "id": 20401
                              },
                              {
                                  "des": "向群众募资，以支持发起的个人或组织的行为",
                                  "level": 3,
                                  "children": [],
                                  "name": "众筹",
                                  "count": 31004590,
                                  "id": 20403
                              },
                              {
                                  "des": "为中低收入人群的保障补充，与保险类似但无保险牌照",
                                  "level": 3,
                                  "children": [],
                                  "name": "互助",
                                  "count": 1984948,
                                  "id": 20404
                              }
                          ],
                          "name": "互联网金融",
                          "count": 93188978,
                          "id": 204
                      }
                  ],
                  "name": "金融",
                  "count": 161081502,
                  "id": 2
              },
              {
                  "des": "对各类生活服务有兴趣的用户",
                  "level": 1,
                  "children": [
                      {
                          "des": "家政服务，包括保姆、月嫂、保洁、护工等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "在家庭的环境中从事卫生清洁工作",
                                  "level": 3,
                                  "children": [],
                                  "name": "家庭保洁",
                                  "count": 5008840,
                                  "id": 30602
                              },
                              {
                                  "des": "家政管理及母婴护理等服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "保姆月嫂",
                                  "count": 3811078,
                                  "id": 30601
                              }
                          ],
                          "name": "家政服务",
                          "count": 8611309,
                          "id": 306
                      },
                      {
                          "des": "对婚纱照拍摄有需求的用户",
                          "level": 2,
                          "children": [],
                          "name": "婚纱摄影",
                          "count": 23047848,
                          "id": 303
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "水费、电费、煤气费等",
                                  "level": 3,
                                  "children": [],
                                  "name": "生活缴费",
                                  "count": 25707057,
                                  "id": 30702
                              }
                          ],
                          "name": "便民服务",
                          "count": 25707057,
                          "id": 307
                      },
                      {
                          "des": "手机、电脑等各类硬件产品的维修保养",
                          "level": 2,
                          "children": [],
                          "name": "电子产品维修",
                          "count": 12704154,
                          "id": 308
                      }
                  ],
                  "name": "生活服务",
                  "count": 63745945,
                  "id": 3
              },
              {
                  "des": "面向企业或个人提供的专业性服务。分类涵盖了诸多行业，如：招商加盟、法律服务，商旅服务，企业管理，信息咨询，广告服务，公关服务，职业中介，教育培训，特许经营，金融服务，保险理财等二十几个行业。",
                  "level": 1,
                  "children": [
                      {
                          "des": "想成为某特定行业连锁企业的加盟商，以进行销售网络搭建或品牌代理等业务",
                          "level": 2,
                          "children": [
                              {
                                  "des": "对家居建材连锁经营商有兴趣的用户。",
                                  "level": 3,
                                  "children": [],
                                  "name": "家居建材招商加盟",
                                  "count": 14360199,
                                  "id": 40102
                              },
                              {
                                  "des": "对成为连锁教育培训机构加盟商有兴趣的用户",
                                  "level": 3,
                                  "children": [],
                                  "name": "教育培训加盟",
                                  "count": 19633655,
                                  "id": 40103
                              },
                              {
                                  "des": "房产中介加盟",
                                  "level": 3,
                                  "children": [],
                                  "name": "房产加盟",
                                  "count": 14413830,
                                  "id": 40105
                              },
                              {
                                  "des": "指汽车产品类加盟，主要指汽车美容、汽车维修、汽车装饰、汽车清洗等汽车服务产品加盟",
                                  "level": 3,
                                  "children": [],
                                  "name": "汽车产品加盟",
                                  "count": 31473241,
                                  "id": 40107
                              },
                              {
                                  "des": "美容类服务有加盟，如:美容院加盟、养生会所、男子SPA加盟、产后修复加盟等。",
                                  "level": 3,
                                  "children": [],
                                  "name": "美容美发减肥加盟",
                                  "count": 40240447,
                                  "id": 40109
                              },
                              {
                                  "des": "指招商加盟食品(不含酒类)等",
                                  "level": 3,
                                  "children": [],
                                  "name": "食品饮料加盟",
                                  "count": 15449226,
                                  "id": 40110
                              },
                              {
                                  "des": "指机械设备类加盟，如制冰机、制香机加盟等",
                                  "level": 3,
                                  "children": [],
                                  "name": "机械电子加盟",
                                  "count": 19200480,
                                  "id": 40106
                              },
                              {
                                  "des": "对生活服务类（不包括休闲娱乐）加盟，如：干洗加盟、家政加盟、月嫂加盟、视力矫正加盟、月子中心加盟等",
                                  "level": 3,
                                  "children": [],
                                  "name": "生活服务加盟",
                                  "count": 12981750,
                                  "id": 40108
                              }
                          ],
                          "name": "招商加盟",
                          "count": 110021987,
                          "id": 401
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "应用在电力系统中的设备，如发电机、变压器、电力线路、断路器等",
                                  "level": 3,
                                  "children": [],
                                  "name": "电气设备",
                                  "count": 23898693,
                                  "id": 40904
                              },
                              {
                                  "des": "各类航空航天有关的技术与设备",
                                  "level": 3,
                                  "children": [],
                                  "name": "航空航天",
                                  "count": 25784600,
                                  "id": 40903
                              },
                              {
                                  "des": "机床是制造机器的机器，亦称工作母机或工具机",
                                  "level": 3,
                                  "children": [],
                                  "name": "机床设备",
                                  "count": 24612142,
                                  "id": 40905
                              },
                              {
                                  "des": "挖掘、铲土运输、压实、起重、桩工、路面、混凝土、高空作业机械",
                                  "level": 3,
                                  "children": [],
                                  "name": "建筑机械",
                                  "count": 1458639,
                                  "id": 40901
                              },
                              {
                                  "des": "煤矿，石油、天然气等综采、挖掘、运输等配套设备系列产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "能源机械",
                                  "count": 8148918,
                                  "id": 40902
                              },
                              {
                                  "des": "含农用动力、建设、运输、耕作、排灌、收获、加工、畜牧机械等",
                                  "level": 3,
                                  "children": [],
                                  "name": "农用机械",
                                  "count": 11427029,
                                  "id": 40907
                              },
                              {
                                  "des": "使用高温将原材料冶炼成为目标材料（纯金属或合金）的机械设备",
                                  "level": 3,
                                  "children": [],
                                  "name": "冶炼机械",
                                  "count": 7443186,
                                  "id": 40908
                              },
                              {
                                  "des": "制冷操作所用的设备，如压缩机、冷凝器、蒸发器和节流阀",
                                  "level": 3,
                                  "children": [],
                                  "name": "制冷设备",
                                  "count": 3382857,
                                  "id": 40906
                              }
                          ],
                          "name": "机械设备",
                          "count": 40812236,
                          "id": 409
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "建筑物中使用的各种材料，如结构材料，装饰材料和专用材料等",
                                  "level": 3,
                                  "children": [],
                                  "name": "建筑材料",
                                  "count": 3075216,
                                  "id": 40402
                              }
                          ],
                          "name": "建筑工程",
                          "count": 22706721,
                          "id": 404
                      },
                      {
                          "des": "物品运输服务，包括公路、铁路、空中、水上运输和港口服务",
                          "level": 2,
                          "children": [
                              {
                                  "des": "各类汽车运输服务，不含票务",
                                  "level": 3,
                                  "children": [],
                                  "name": "公路运输",
                                  "count": 14768726,
                                  "id": 41203
                              },
                              {
                                  "des": "各类航空运输服务，不包括票务预订",
                                  "level": 3,
                                  "children": [],
                                  "name": "航空服务",
                                  "count": 8302633,
                                  "id": 41201
                              },
                              {
                                  "des": "各类水上运输，港口服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "水上运输",
                                  "count": 15336059,
                                  "id": 41204
                              },
                              {
                                  "des": "各类铁路运输服务，不包括票务预订",
                                  "level": 3,
                                  "children": [],
                                  "name": "铁路服务",
                                  "count": 15339617,
                                  "id": 41202
                              }
                          ],
                          "name": "物流运输",
                          "count": 34738571,
                          "id": 412
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "广告、灯箱、宣传、包装、印刷、条码、打标类服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "包装印刷",
                                  "count": 19250149,
                                  "id": 41301
                              },
                              {
                                  "des": "为客户提供策划方案，创意，整体规划等服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "策划服务",
                                  "count": 31103984,
                                  "id": 41303
                              },
                              {
                                  "des": "制定广告计划，商业宣传，广告制作等营销服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "广告代理",
                                  "count": 34577591,
                                  "id": 41302
                              }
                          ],
                          "name": "营销广告",
                          "count": 36655687,
                          "id": 413
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "各种大型会议服务的策划",
                                  "level": 3,
                                  "children": [],
                                  "name": "会议服务",
                                  "count": 34720073,
                                  "id": 41601
                              },
                              {
                                  "des": "除会议和展览外的各种活动的策划",
                                  "level": 3,
                                  "children": [],
                                  "name": "活动庆典",
                                  "count": 14518078,
                                  "id": 41603
                              },
                              {
                                  "des": "车展，画展等各种展览服务的策划",
                                  "level": 3,
                                  "children": [],
                                  "name": "展览服务",
                                  "count": 2752380,
                                  "id": 41602
                              }
                          ],
                          "name": "展会服务",
                          "count": 34934112,
                          "id": 416
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "财务、资产评估、清算、审计、税务、财务服务等",
                                  "level": 3,
                                  "children": [],
                                  "name": "财务税务",
                                  "count": 14027460,
                                  "id": 41503
                              },
                              {
                                  "des": "市场调查、社会调查、企业调查、公关研究报告等",
                                  "level": 3,
                                  "children": [],
                                  "name": "调研公关",
                                  "count": 14272503,
                                  "id": 41502
                              },
                              {
                                  "des": "为中国公民出国提供提供咨询和代理服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "移民中介",
                                  "count": 824884,
                                  "id": 41504
                              },
                              {
                                  "des": "产品认证、企业/项目咨询服务、企业管理服务代理、信贷报告等",
                                  "level": 3,
                                  "children": [],
                                  "name": "咨询代理",
                                  "count": 33908611,
                                  "id": 41501
                              }
                          ],
                          "name": "专业咨询",
                          "count": 34729756,
                          "id": 415
                      },
                      {
                          "des": "电子技术和电气工程相关元器件、仪器仪表和相关服务，包括电阻、电感、光导管、万用表、插件等",
                          "level": 2,
                          "children": [],
                          "name": "电子电工",
                          "count": 8668107,
                          "id": 405
                      },
                      {
                          "des": "由律师和法律专业人士提供的专业服务，如诉讼和法律援助",
                          "level": 2,
                          "children": [],
                          "name": "法律服务",
                          "count": 11814493,
                          "id": 418
                      },
                      {
                          "des": "供企业或个人用于营销活动的设备，如售货机、收银机等",
                          "level": 2,
                          "children": [],
                          "name": "经营设备",
                          "count": 12907003,
                          "id": 408
                      },
                      {
                          "des": "由拍卖行提供的公开竞购服务",
                          "level": 2,
                          "children": [],
                          "name": "拍卖服务",
                          "count": 12357813,
                          "id": 420
                      },
                      {
                          "des": "面向企业、个体经营户、公司管理人员；适用于商业用途的软件服务",
                          "level": 2,
                          "children": [],
                          "name": "商务软件服务",
                          "count": 14906937,
                          "id": 419
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "投影仪/打印机/碎纸机/计算器及配件(如打印机墨盒)",
                                  "level": 3,
                                  "children": [],
                                  "name": "办公设备",
                                  "count": 6845244,
                                  "id": 40202
                              },
                              {
                                  "des": "应用于企业单位的辅助用品，包含文件档案用品、桌面用品、办公设备、财务用品、耗材等",
                                  "level": 3,
                                  "children": [],
                                  "name": "办公用品",
                                  "count": 13208025,
                                  "id": 40201
                              },
                              {
                                  "des": "教学、科研单位中，使用方向为教学或科研的仪器设备，如多媒体设备、专业教学设备等",
                                  "level": 3,
                                  "children": [],
                                  "name": "教学设备",
                                  "count": 4312723,
                                  "id": 40203
                              },
                              {
                                  "des": "工程建设实施，包括基础工程、主体结构、屋面工程施工等",
                                  "level": 3,
                                  "children": [],
                                  "name": "建筑施工",
                                  "count": 19850025,
                                  "id": 40401
                              }
                          ],
                          "name": "办公文教",
                          "count": 22915575,
                          "id": 402
                      },
                      {
                          "des": "出版社、书店等提供的书籍出版策划服务",
                          "level": 2,
                          "children": [],
                          "name": "出版传媒",
                          "count": 31864267,
                          "id": 414
                      }
                  ],
                  "name": "商务服务",
                  "count": 156144269,
                  "id": 4
              },
              {
                  "des": "房屋买卖、租赁等相关服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "对房屋买卖有兴趣的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "房产类型为按一般民用住宅建筑标准建造的居住用房屋的交易",
                                  "level": 3,
                                  "children": [],
                                  "name": "普通住宅交易",
                                  "count": 31856102,
                                  "id": 50101
                              },
                              {
                                  "des": "房产类型档次质量更高的豪宅和别墅的交易",
                                  "level": 3,
                                  "children": [],
                                  "name": "豪宅别墅交易",
                                  "count": 15994702,
                                  "id": 50102
                              },
                              {
                                  "des": "有房产类型为可开展商业和生活服务活动的房屋的交易，如写字楼、各类商店等。",
                                  "level": 3,
                                  "children": [],
                                  "name": "商用房交易",
                                  "count": 12444883,
                                  "id": 50103
                              }
                          ],
                          "name": "房产交易",
                          "count": 51728006,
                          "id": 501
                      },
                      {
                          "des": "房屋所有权人将房屋出租给承租人使用的行为",
                          "level": 2,
                          "children": [
                              {
                                  "des": "房产类型为按一般民用住宅建筑标准建造的居住用房屋的租赁",
                                  "level": 3,
                                  "children": [],
                                  "name": "普通住宅租赁",
                                  "count": 37391112,
                                  "id": 50201
                              },
                              {
                                  "des": "房产类型为可开展商业和生活服务活动的房屋的租赁，如写字楼、各类商店等。",
                                  "level": 3,
                                  "children": [],
                                  "name": "商用房租赁",
                                  "count": 11670297,
                                  "id": 50202
                              }
                          ],
                          "name": "房屋租赁",
                          "count": 46149979,
                          "id": 502
                      }
                  ],
                  "name": "房产交易租赁",
                  "count": 74516266,
                  "id": 5
              },
              {
                  "des": "",
                  "level": 1,
                  "children": [
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "对家居软装与饰品有兴趣的用户，包括铁艺、摆件、墙面装饰、贴饰、手工艺品等",
                                  "level": 3,
                                  "children": [],
                                  "name": "家居装饰",
                                  "count": 12176209,
                                  "id": 60401
                              }
                          ],
                          "name": "家居装饰及家纺",
                          "count": 12176209,
                          "id": 604
                      },
                      {
                          "des": "对家装硬装主材料有需求的用户，包括门窗、油漆、地板、五金、瓷砖、灯具等",
                          "level": 2,
                          "children": [],
                          "name": "建材灯饰",
                          "count": 18608575,
                          "id": 603
                      }
                  ],
                  "name": "家居家装",
                  "count": 29149301,
                  "id": 6
              },
              {
                  "des": "",
                  "level": 1,
                  "children": [
                      {
                          "des": "专门负责木马与病毒查杀清除的计算机软件",
                          "level": 2,
                          "children": [],
                          "name": "安全工具",
                          "count": 33234090,
                          "id": 706
                      },
                      {
                          "des": "为受众带来价值的新闻",
                          "level": 2,
                          "children": [],
                          "name": "新闻资讯",
                          "count": 15854789,
                          "id": 709
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指短视频APP，如抖音、快手等",
                                  "level": 3,
                                  "children": [],
                                  "name": "短视频",
                                  "count": 20854630,
                                  "id": 70301
                              }
                          ],
                          "name": "影音视频",
                          "count": 20854630,
                          "id": 703
                      },
                      {
                          "des": "指服务与办公的软件或效率工具，如wps等",
                          "level": 2,
                          "children": [],
                          "name": "办公软件",
                          "count": 18179712,
                          "id": 705
                      },
                      {
                          "des": "对已拍摄图片进行后期加工处理的软件",
                          "level": 2,
                          "children": [],
                          "name": "图片摄影",
                          "count": 20285462,
                          "id": 708
                      }
                  ],
                  "name": "互联网软件服务",
                  "count": 83911137,
                  "id": 7
              },
              {
                  "des": "包含电子游戏和桌游",
                  "level": 1,
                  "children": [
                      {
                          "des": "对特定玩法的游戏有过行为的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "由玩家扮演管理者的角色，对游戏中虚拟的现实世界进行经营管理，包括养成，偏重度游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "模拟经营游戏",
                                  "count": 48196183,
                                  "id": 80103
                              },
                              {
                                  "des": "主要是以第一人物或者第三人物参与速度的竞争",
                                  "level": 3,
                                  "children": [],
                                  "name": "竞速游戏",
                                  "count": 0,
                                  "id": 80112
                              }
                          ],
                          "name": "游戏（按类型）",
                          "count": 57130924,
                          "id": 801
                      },
                      {
                          "des": "对特定题材游戏有过行为的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "玩家扮演战士，法师，道士三种职业在玛法大陆降妖除魔的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "传奇游戏",
                                  "count": 72267905,
                                  "id": 80201
                              },
                              {
                                  "des": "玩家扮演修真者，通过各种方式增加自身的能力，最终得道成仙；包含一武侠江湖为背景的武侠游戏。偏中国古代",
                                  "level": 3,
                                  "children": [],
                                  "name": "仙侠游戏",
                                  "count": 59547769,
                                  "id": 80202
                              },
                              {
                                  "des": "游戏往往处于架空的西方中世纪，会出现恶龙，地精，精灵等角色。偏西方",
                                  "level": 3,
                                  "children": [],
                                  "name": "魔幻游戏",
                                  "count": 53452037,
                                  "id": 80203
                              },
                              {
                                  "des": "通常改编自动漫，会沿用动漫的世界观",
                                  "level": 3,
                                  "children": [],
                                  "name": "二次元游戏",
                                  "count": 20367665,
                                  "id": 80211
                              },
                              {
                                  "des": "以古典名著《三国演义》为为世界观架构或题材的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "三国游戏",
                                  "count": 51481247,
                                  "id": 80205
                              },
                              {
                                  "des": "背景为盗墓的相关游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "盗墓游戏",
                                  "count": 53032928,
                                  "id": 80209
                              },
                              {
                                  "des": "以现代都市为背景的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "都市游戏",
                                  "count": 30716872,
                                  "id": 80207
                              },
                              {
                                  "des": "以古典名著《西游记》为世界观架构或题材的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "西游游戏",
                                  "count": 49902613,
                                  "id": 80204
                              },
                              {
                                  "des": "以宫廷斗争生存为背景的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "宫廷游戏",
                                  "count": 41598448,
                                  "id": 80206
                              },
                              {
                                  "des": "专门针对女性开发的、适合于女性玩的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "女性向游戏",
                                  "count": 52876646,
                                  "id": 80212
                              }
                          ],
                          "name": "游戏（按题材）",
                          "count": 170792538,
                          "id": 802
                      }
                  ],
                  "name": "游戏",
                  "count": 176487801,
                  "id": 8
              },
              {
                  "des": "　人们用于代步的工具或设备，及其衍生商品及服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "对第二手的汽车或使用过的汽车有需求的用户",
                          "level": 2,
                          "children": [],
                          "name": "二手车",
                          "count": 17677518,
                          "id": 901
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指售价在10万以下的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "低档车",
                                  "count": 1673003,
                                  "id": 90501
                              },
                              {
                                  "des": "指售价在30万至50万间的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "高档车",
                                  "count": 87664,
                                  "id": 90503
                              },
                              {
                                  "des": "指售价在50万元以上的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "豪华车",
                                  "count": 1084820,
                                  "id": 90504
                              },
                              {
                                  "des": "指售价在10万至30万间的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "中档车",
                                  "count": 1337901,
                                  "id": 90502
                              }
                          ],
                          "name": "汽车（按售价）",
                          "count": 4168897,
                          "id": 905
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "以柴油为燃料，使用柴油机作为动力的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "柴油",
                                  "count": 14130679,
                                  "id": 90604
                              },
                              {
                                  "des": "指使用汽油驱动和电力驱动两种驱动方式的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "混合动力",
                                  "count": 9008721,
                                  "id": 90601
                              },
                              {
                                  "des": "含电动力以其它新能源动力汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "新能源",
                                  "count": 788244,
                                  "id": 90603
                              }
                          ],
                          "name": "汽车（按动力）",
                          "count": 15278850,
                          "id": 906
                      },
                      {
                          "des": "对出行服务有需求的用户，包括汽车租赁、约车等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "出租人与承租人签订租赁合同，以交换汽车使用权利的一种交易形式",
                                  "level": 3,
                                  "children": [],
                                  "name": "汽车租赁",
                                  "count": 20333263,
                                  "id": 90701
                              },
                              {
                                  "des": "增加出行便捷的应用软件，如地图导航",
                                  "level": 3,
                                  "children": [],
                                  "name": "出行工具",
                                  "count": 12736435,
                                  "id": 90704
                              },
                              {
                                  "des": "含共享汽车、共享单车等提供共享服务的形式",
                                  "level": 3,
                                  "children": [],
                                  "name": "共享用车",
                                  "count": 11507309,
                                  "id": 90702
                              },
                              {
                                  "des": "通过网络预约用车服务，服务方提供的车辆配有司机",
                                  "level": 3,
                                  "children": [],
                                  "name": "约车服务",
                                  "count": 25036599,
                                  "id": 90703
                              }
                          ],
                          "name": "出行服务",
                          "count": 60821374,
                          "id": 907
                      },
                      {
                          "des": "由汽油机驱动，靠手把操纵前轮转向的两轮或三轮车",
                          "level": 2,
                          "children": [],
                          "name": "摩托车",
                          "count": 819033,
                          "id": 908
                      },
                      {
                          "des": "又称脚踏车或单车，通常是二轮的小型陆上车辆",
                          "level": 2,
                          "children": [],
                          "name": "自行车",
                          "count": 19501218,
                          "id": 910
                      },
                      {
                          "des": "汽车零配件、燃油、轮胎、汽车音响、新能源电池等供应商",
                          "level": 2,
                          "children": [],
                          "name": "车类配件及周边",
                          "count": 19187960,
                          "id": 904
                      },
                      {
                          "des": "汽车维修、改装、保养、清洗，油卡充值，应急救援，陪驾等服务",
                          "level": 2,
                          "children": [],
                          "name": "汽车保养维修",
                          "count": 19230746,
                          "id": 903
                      }
                  ],
                  "name": "交通工具及服务",
                  "count": 109052659,
                  "id": 9
              },
              {
                  "des": "为满足用户的饮食需求提供的各类服务和商品，包括各类视频、饮料、",
                  "level": 1,
                  "children": [
                      {
                          "des": "包含各种菜系和小吃、甜点等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "素食是一种不食肉、家禽、海鲜等动物产品的饮食方式",
                                  "level": 3,
                                  "children": [],
                                  "name": "素食",
                                  "count": 1365204,
                                  "id": 100203
                              },
                              {
                                  "des": "海鲜餐厅是专营烹饪包括了鱼类、虾类、贝类等这些海产的餐馆",
                                  "level": 3,
                                  "children": [],
                                  "name": "海鲜餐厅",
                                  "count": 6574176,
                                  "id": 100204
                              },
                              {
                                  "des": "四川地区菜系，特点清鲜醇浓，麻辣辛香",
                                  "level": 3,
                                  "children": [],
                                  "name": "川菜",
                                  "count": 3173469,
                                  "id": 100205
                              },
                              {
                                  "des": "湖南菜，在长沙地区又被称为本味菜",
                                  "level": 3,
                                  "children": [],
                                  "name": "湘菜",
                                  "count": 2934469,
                                  "id": 100206
                              },
                              {
                                  "des": "云南本地菜系，是云南少数民族饮食文化与汉民族饮食文化相互融合的产物",
                                  "level": 3,
                                  "children": [],
                                  "name": "云南菜",
                                  "count": 1710508,
                                  "id": 100208
                              },
                              {
                                  "des": "日本风味料理，包括日本人自己发明的食物『和食』；和经过日式风味改良的『洋食』",
                                  "level": 3,
                                  "children": [],
                                  "name": "日本料理",
                                  "count": 13777287,
                                  "id": 100213
                              },
                              {
                                  "des": "韩国风味料理，韩式泡菜、大酱汤、石锅拌饭、参鸡汤、韩国烤牛肉等",
                                  "level": 3,
                                  "children": [],
                                  "name": "韩国料理",
                                  "count": 4644640,
                                  "id": 100214
                              },
                              {
                                  "des": "包括东南亚以及南亚部分国家如泰国、越南、印度等的特色菜",
                                  "level": 3,
                                  "children": [],
                                  "name": "东南亚菜系",
                                  "count": 3003928,
                                  "id": 100215
                              },
                              {
                                  "des": "对西方餐饮文化的统称",
                                  "level": 3,
                                  "children": [],
                                  "name": "西餐",
                                  "count": 20177244,
                                  "id": 100216
                              },
                              {
                                  "des": "由就餐者随意在用餐时自行选择食物、饮料；由其自己动手，自己帮助自己，自己在既定的范围之内安排选用菜肴的用餐方式",
                                  "level": 3,
                                  "children": [],
                                  "name": "自助餐",
                                  "count": 19870266,
                                  "id": 100218
                              },
                              {
                                  "des": "包含甜味点心和广式的糖水",
                                  "level": 3,
                                  "children": [],
                                  "name": "甜点",
                                  "count": 27427780,
                                  "id": 100219
                              },
                              {
                                  "des": "是用经过烘焙磨粉的咖啡豆制作出来的饮料",
                                  "level": 3,
                                  "children": [],
                                  "name": "咖啡",
                                  "count": 23008552,
                                  "id": 100220
                              },
                              {
                                  "des": "农村人家以传统方法养殖的禽蓄、种植的蔬菜以及当地自然生长的特产为原材料烹制的佳肴菜式",
                                  "level": 3,
                                  "children": [],
                                  "name": "农家菜",
                                  "count": 5211628,
                                  "id": 100221
                              },
                              {
                                  "des": "上海菜及江浙地区的菜系",
                                  "level": 3,
                                  "children": [],
                                  "name": "本帮江浙菜",
                                  "count": 5901960,
                                  "id": 100207
                              },
                              {
                                  "des": "指东北民系（东北人）的烹饪菜种",
                                  "level": 3,
                                  "children": [],
                                  "name": "东北菜",
                                  "count": 4996819,
                                  "id": 100211
                              },
                              {
                                  "des": "火锅一般是指以锅为器具，以热源烧锅，以水或汤烧开来涮煮各类食物的烹调方式",
                                  "level": 3,
                                  "children": [],
                                  "name": "火锅",
                                  "count": 6318921,
                                  "id": 100201
                              },
                              {
                                  "des": "烧烤是在火上（木炭或电加热装置）将食物（多为肉类，海鲜，蔬菜）烤熟的烹调方式",
                                  "level": 3,
                                  "children": [],
                                  "name": "烧烤",
                                  "count": 6392933,
                                  "id": 100202
                              },
                              {
                                  "des": "主体为闽菜，融会了客家菜的烹调手法，先后经过荷兰、日本的文化影响，再结合台湾的物产及当地食俗发展起来的一种菜肴",
                                  "level": 3,
                                  "children": [],
                                  "name": "台湾菜",
                                  "count": 1773504,
                                  "id": 100212
                              },
                              {
                                  "des": "泛指我国西北地区地区的菜系，大致包括甘肃、宁夏、青海、新疆等地方风味",
                                  "level": 3,
                                  "children": [],
                                  "name": "西北菜",
                                  "count": 0,
                                  "id": 100210
                              },
                              {
                                  "des": "广东菜，具有具有清、鲜、爽、嫩、滑等特色",
                                  "level": 3,
                                  "children": [],
                                  "name": "粤菜",
                                  "count": 0,
                                  "id": 100209
                              }
                          ],
                          "name": "美食",
                          "count": 90001834,
                          "id": 1002
                      },
                      {
                          "des": "作为饮食的一种辅助手段，用来补充人体所需的氨基酸、微量元素、维生素、矿物质等，所生产的某些含有特定营养素的食品",
                          "level": 2,
                          "children": [],
                          "name": "营养补充剂",
                          "count": 1155754,
                          "id": 1004
                      },
                      {
                          "des": "果蔬、肉类、水产品等只做必要的保鲜和简单整理就可上架出售，未经烹调、制作等深加工过程 的食品",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指可以做菜、烹饪成为食品的一类植物或菌类",
                                  "level": 3,
                                  "children": [],
                                  "name": "蔬菜",
                                  "count": 3143857,
                                  "id": 100303
                              },
                              {
                                  "des": "指用来日常做菜烹饪的肉类食品，包括鸡蛋、鸡肉、牛肉、羊肉、猪肉等",
                                  "level": 3,
                                  "children": [],
                                  "name": "禽蛋肉类",
                                  "count": 4699907,
                                  "id": 100304
                              },
                              {
                                  "des": "是指以米、面、杂粮等为主要原料，以肉类、蔬菜等为辅料，经加工制成各类烹制或未烹制的主食品后，立即采用速冻工艺制成并可以在冻结条件下运输储存及销售的各类主食品",
                                  "level": 3,
                                  "children": [],
                                  "name": "速冻食品",
                                  "count": 11329306,
                                  "id": 100305
                              },
                              {
                                  "des": "泛指用风干、晾晒等方法去除了水分的调味品、食品",
                                  "level": 3,
                                  "children": [],
                                  "name": "南北干货",
                                  "count": 1885131,
                                  "id": 100306
                              },
                              {
                                  "des": "大米、面粉、盐、醋、酱油等",
                                  "level": 3,
                                  "children": [],
                                  "name": "粮油调味",
                                  "count": 4974400,
                                  "id": 100308
                              }
                          ],
                          "name": "食品生鲜",
                          "count": 22452321,
                          "id": 1003
                      },
                      {
                          "des": "酒 水 饮料等可饮用的的液体",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是以葡萄为原料酿造的一种果酒",
                                  "level": 3,
                                  "children": [],
                                  "name": "葡萄酒",
                                  "count": 4196105,
                                  "id": 100502
                              },
                              {
                                  "des": "指南方以糯米、北方以黍米、粟为原料，通过酒曲复式发酵，酒精含量一般为14%—20%的低度酿造酒",
                                  "level": 3,
                                  "children": [],
                                  "name": "黄酒",
                                  "count": 10363070,
                                  "id": 100504
                              },
                              {
                                  "des": "威士忌，白兰地/干邑，力娇酒，朗姆酒，伏特加，金酒",
                                  "level": 3,
                                  "children": [],
                                  "name": "洋酒",
                                  "count": 165291,
                                  "id": 100505
                              },
                              {
                                  "des": "以小麦芽和大麦芽为主要原料，并加啤酒花，经过液态糊化和糖化，再经过液态发酵而酿制成的酒类饮品",
                                  "level": 3,
                                  "children": [],
                                  "name": "啤酒",
                                  "count": 25563456,
                                  "id": 100503
                              },
                              {
                                  "des": "指可以不经处理、直接供给人体饮用的水",
                                  "level": 3,
                                  "children": [],
                                  "name": "饮用水",
                                  "count": 33572756,
                                  "id": 100506
                              }
                          ],
                          "name": "酒水",
                          "count": 66772159,
                          "id": 1005
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指的是使用牛乳或羊乳及其加工制品",
                                  "level": 3,
                                  "children": [],
                                  "name": "牛奶乳品",
                                  "count": 29785035,
                                  "id": 100602
                              }
                          ],
                          "name": "茶饮冲调",
                          "count": 29785035,
                          "id": 1006
                      },
                      {
                          "des": "快速消费品，是人们在闲暇时吃的食品，主要有干果、膨化食品等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是以谷物、薯类或豆类等为主要原料，采用膨化工艺如焙烤、油炸、微波或挤压等制成体积明显增大的，具有一定膨化度的一种组织酥脆、香味逼真、风格各异的休闲食品",
                                  "level": 3,
                                  "children": [],
                                  "name": "膨化食品",
                                  "count": 4221655,
                                  "id": 100702
                              },
                              {
                                  "des": "采用一定工艺加工生产的肉制品，是风味独特、储存期较长，携带方便的肉类方便食品",
                                  "level": 3,
                                  "children": [],
                                  "name": "肉干肉脯",
                                  "count": 5056775,
                                  "id": 100703
                              },
                              {
                                  "des": "是一种以果蔬等为主要原料，经风干烘干、糖蜂蜜或食盐腌制等工艺制成的制品",
                                  "level": 3,
                                  "children": [],
                                  "name": "蜜饯果干",
                                  "count": 4962161,
                                  "id": 100705
                              },
                              {
                                  "des": "是指植物果实经过特定工艺的加工，制成的休闲食品，包括瓜子，花生，杏仁等",
                                  "level": 3,
                                  "children": [],
                                  "name": "坚果炒货",
                                  "count": 7447104,
                                  "id": 100701
                              },
                              {
                                  "des": "休闲食品的一种",
                                  "level": 3,
                                  "children": [],
                                  "name": "糖果/巧克力",
                                  "count": 8665409,
                                  "id": 100704
                              }
                          ],
                          "name": "休闲食品",
                          "count": 12929271,
                          "id": 1007
                      }
                  ],
                  "name": "餐饮食品",
                  "count": 146290858,
                  "id": 10
              },
              {
                  "des": "包含服装、鞋帽、箱包、饰品、珠宝、钟表等",
                  "level": 1,
                  "children": [
                      {
                          "des": "供女性使用的箱包",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是女士随身携带装轻便东西的拎包",
                                  "level": 3,
                                  "children": [],
                                  "name": "手提包",
                                  "count": 704992,
                                  "id": 110402
                              },
                              {
                                  "des": "是女士随身携带装钱或者其他小件物品的包",
                                  "level": 3,
                                  "children": [],
                                  "name": "钱包/卡包/钥匙包",
                                  "count": 5293853,
                                  "id": 110403
                              }
                          ],
                          "name": "女士包袋",
                          "count": 5982015,
                          "id": 1104
                      },
                      {
                          "des": "供男性使用的箱包",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是指男士单边肩膀受力的包",
                                  "level": 3,
                                  "children": [],
                                  "name": "单肩包/斜挎包",
                                  "count": 24091405,
                                  "id": 110501
                              },
                              {
                                  "des": "是男士随身携带装轻便东西的拎包",
                                  "level": 3,
                                  "children": [],
                                  "name": "手提包",
                                  "count": 10317329,
                                  "id": 110502
                              },
                              {
                                  "des": "指男士背在双肩的背包的统称",
                                  "level": 3,
                                  "children": [],
                                  "name": "双肩包",
                                  "count": 5427753,
                                  "id": 110504
                              },
                              {
                                  "des": "指一种狭窄的，主要用来存放纸和其他文件的箱形袋",
                                  "level": 3,
                                  "children": [],
                                  "name": "商务公文包",
                                  "count": 28095447,
                                  "id": 110505
                              }
                          ],
                          "name": "男士包袋",
                          "count": 44712711,
                          "id": 1105
                      },
                      {
                          "des": "功能性为主的箱包，包括旅行箱、双肩包等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "也称行李箱、拉杆箱，是出门时所携带用以放置物品的箱子",
                                  "level": 3,
                                  "children": [],
                                  "name": "旅行箱",
                                  "count": 32739537,
                                  "id": 110602
                              },
                              {
                                  "des": "指背在双肩的背包的统称",
                                  "level": 3,
                                  "children": [],
                                  "name": "双肩包",
                                  "count": 17693257,
                                  "id": 110603
                              },
                              {
                                  "des": "为旅行或者旅游而准备的一类包，分为背包、提包和拖拉包",
                                  "level": 3,
                                  "children": [],
                                  "name": "旅行包",
                                  "count": 10969526,
                                  "id": 110604
                              },
                              {
                                  "des": "为保护数码相机产品的一类包",
                                  "level": 3,
                                  "children": [],
                                  "name": "相机包",
                                  "count": 7014581,
                                  "id": 110605
                              }
                          ],
                          "name": "功能箱包",
                          "count": 52898382,
                          "id": 1106
                      },
                      {
                          "des": "对贴身衣物、家居服及袜子有需求的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "在家中休息或操持家务会客等，穿着的一种服装",
                                  "level": 3,
                                  "children": [],
                                  "name": "家居服",
                                  "count": 16078051,
                                  "id": 110703
                              }
                          ],
                          "name": "内衣/家居服/袜子",
                          "count": 16078051,
                          "id": 1107
                      }
                  ],
                  "name": "服饰鞋帽箱包",
                  "count": 97640408,
                  "id": 11
              },
              {
                  "des": "指个人消费类的手机电脑及办公设备",
                  "level": 1,
                  "children": [
                      {
                          "des": "包括摄影摄像、影音娱乐的硬件和配件",
                          "level": 2,
                          "children": [
                              {
                                  "des": "三脚架和云台、滤镜、电池、手柄等",
                                  "level": 3,
                                  "children": [],
                                  "name": "数码配件",
                                  "count": 23795132,
                                  "id": 120702
                              },
                              {
                                  "des": "耳机/耳麦、音箱/音响、音视频播放器、麦克风等",
                                  "level": 3,
                                  "children": [],
                                  "name": "影音娱乐",
                                  "count": 21104411,
                                  "id": 120703
                              }
                          ],
                          "name": "数码",
                          "count": 38858108,
                          "id": 1207
                      },
                      {
                          "des": "电脑部件，包括处理器、主板、硬盘、内存、显示器、键盘膜等",
                          "level": 2,
                          "children": [],
                          "name": "电脑配件",
                          "count": 14583750,
                          "id": 1203
                      },
                      {
                          "des": "包括笔记本、台式机、服务器/工作站、平板电脑等",
                          "level": 2,
                          "children": [],
                          "name": "电脑整机",
                          "count": 14657334,
                          "id": 1202
                      },
                      {
                          "des": "鼠标、键盘、移动存储设备、摄像头、手写板等",
                          "level": 2,
                          "children": [],
                          "name": "外设产品",
                          "count": 6342181,
                          "id": 1204
                      },
                      {
                          "des": "家用电教设备、家用游戏机及配件等",
                          "level": 2,
                          "children": [],
                          "name": "学习机/游戏机",
                          "count": 14710089,
                          "id": 1206
                      },
                      {
                          "des": "智能家居产品和可穿戴智能产品",
                          "level": 2,
                          "children": [],
                          "name": "智能设备",
                          "count": 14940677,
                          "id": 1205
                      }
                  ],
                  "name": "手机电脑数码",
                  "count": 70742560,
                  "id": 12
              },
              {
                  "des": "包括彩妆、护肤、个人护理等产品",
                  "level": 1,
                  "children": [
                      {
                          "des": "个人清洁和护理用品，包括身体、口腔清洁用品和女性护理用品等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "包含女性生理期个人护理用品、私密护理用品等",
                                  "level": 3,
                                  "children": [],
                                  "name": "女性护理",
                                  "count": 5019426,
                                  "id": 130501
                              },
                              {
                                  "des": "包含男性使用的啫喱，发蜡等男性专用产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "男性护理",
                                  "count": 25730613,
                                  "id": 130502
                              },
                              {
                                  "des": "指甲护理/装饰，甲艺设计、美甲工具等相关产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "美甲",
                                  "count": 21123100,
                                  "id": 130505
                              }
                          ],
                          "name": "个人护理",
                          "count": 46099618,
                          "id": 1305
                      }
                  ],
                  "name": "美妆个护",
                  "count": 46099618,
                  "id": 13
              },
              {
                  "des": "体育运动及其衍生的装备和服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "一种通过跑动 或 骑自行车的有氧运动",
                          "level": 2,
                          "children": [],
                          "name": "跑步骑行",
                          "count": 19941687,
                          "id": 1402
                      },
                      {
                          "des": "专门用于户外运动时穿的功能性T需、冲锋衣、滑雪服等",
                          "level": 2,
                          "children": [],
                          "name": "户外鞋服",
                          "count": 12923147,
                          "id": 1406
                      },
                      {
                          "des": "户外运动参与者适用的专业装备，如帐篷、吊床",
                          "level": 2,
                          "children": [],
                          "name": "户外装备",
                          "count": 11824314,
                          "id": 1407
                      },
                      {
                          "des": "在天然或人工冰场上进行的体育运动。包括速度滑冰、花样滑冰、冰球雪、滑冰、短跑道速度滑冰、高山滑雪、自由式滑雪、越野滑雪、\n  北欧两项、跳台滑雪、 现代冬季两项、雪撬、雪车、花样滑冰、冰壶、 冰球、滑板滑雪等",
                          "level": 2,
                          "children": [],
                          "name": "滑冰滑雪",
                          "count": 11615068,
                          "id": 1404
                      },
                      {
                          "des": "针对健身目标提供的定制化项目、课程或计划。游泳，健身等",
                          "level": 2,
                          "children": [],
                          "name": "健身产品与服务",
                          "count": 13808030,
                          "id": 1408
                      },
                      {
                          "des": "各类室内外球类运动，包括篮球、足球、羽毛球、乒乓球、网球、排球、保龄球、橄榄球、棒球、高尔夫、桌球等",
                          "level": 2,
                          "children": [],
                          "name": "球类运动",
                          "count": 12896325,
                          "id": 1401
                      },
                      {
                          "des": "通过做一系列肢体动作达到强身健体的运动",
                          "level": 2,
                          "children": [],
                          "name": "瑜伽健美操",
                          "count": 6865998,
                          "id": 1403
                      },
                      {
                          "des": "适合运动爱好者参与运动时穿着的衣服鞋履",
                          "level": 2,
                          "children": [],
                          "name": "运动鞋服",
                          "count": 14345024,
                          "id": 1405
                      }
                  ],
                  "name": "体育运动",
                  "count": 66775655,
                  "id": 14
              },
              {
                  "des": "",
                  "level": 1,
                  "children": [
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "包括油烟机、燃气灶、炉具、洗碗机、消毒柜等",
                                  "level": 3,
                                  "children": [],
                                  "name": "厨卫大电器",
                                  "count": 12724176,
                                  "id": 150204
                              },
                              {
                                  "des": "通过各种物理原理，在一定时间内使冷水温度升高变成热水的一种装置；原理不同可分为电热水器、燃气热水器、太阳能热水器、磁能热水器、空气能热水器，暖气热水器等",
                                  "level": 3,
                                  "children": [],
                                  "name": "热水器",
                                  "count": 19466404,
                                  "id": 150202
                              }
                          ],
                          "name": "厨卫家电",
                          "count": 28635759,
                          "id": 1502
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是保持低温的一种器具",
                                  "level": 3,
                                  "children": [],
                                  "name": "冰箱",
                                  "count": 12947111,
                                  "id": 150302
                              },
                              {
                                  "des": "利用电子技术传送活动的图像画面和音频信号的设备",
                                  "level": 3,
                                  "children": [],
                                  "name": "电视机",
                                  "count": 10696753,
                                  "id": 150301
                              },
                              {
                                  "des": "对建筑或构筑物内环境空气的温度、湿度、流速等参数进行调节和控制的设备",
                                  "level": 3,
                                  "children": [],
                                  "name": "空调",
                                  "count": 12946282,
                                  "id": 150304
                              },
                              {
                                  "des": "利用电能产生机械作用来洗涤衣物的清洁电器",
                                  "level": 3,
                                  "children": [],
                                  "name": "洗衣机",
                                  "count": 12720871,
                                  "id": 150303
                              }
                          ],
                          "name": "大家电",
                          "count": 15789752,
                          "id": 1503
                      }
                  ],
                  "name": "家用电器",
                  "count": 37209292,
                  "id": 15
              },
              {
                  "des": "包括纸质书籍期刊、网络小说、漫画、邮币等",
                  "level": 1,
                  "children": [
                      {
                          "des": "是用简单而夸张的手法来描绘生活或时事的图画",
                          "level": 2,
                          "children": [],
                          "name": "漫画",
                          "count": 5212985,
                          "id": 1703
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "具有收藏价值的古代钱币",
                                  "level": 3,
                                  "children": [],
                                  "name": "钱币",
                                  "count": 35390839,
                                  "id": 170403
                              },
                              {
                                  "des": "古代遗存下来的文化遗存物质，包括传世品和地下出土品；也包括手串手把件等",
                                  "level": 3,
                                  "children": [],
                                  "name": "文玩古董",
                                  "count": 15447925,
                                  "id": 170401
                              },
                              {
                                  "des": "具有收藏价值的邮票/邮资封面/磁卡/票证等物品",
                                  "level": 3,
                                  "children": [],
                                  "name": "邮票/邮资封片/磁卡/票证",
                                  "count": 40384693,
                                  "id": 170402
                              }
                          ],
                          "name": "邮币/文玩古董",
                          "count": 79511241,
                          "id": 1704
                      }
                  ],
                  "name": "文娱图书",
                  "count": 83187804,
                  "id": 17
              }
          ],
          "behavior": [
              {
                  "des": "指学校或培训机构为学生提供的学习技能或素质提升的商品或服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "为0-6岁的儿童提供的教育，包括语言启蒙、智力开发等学前教育。智力开发类的游戏，玩具，画板也算到这里",
                          "level": 2,
                          "children": [
                              {
                                  "des": "主要针对0~3岁幼儿的语言能力开发",
                                  "level": 3,
                                  "children": [],
                                  "name": "语言启蒙",
                                  "count": 44654065,
                                  "id": 10101
                              },
                              {
                                  "des": "面向0~6岁幼儿的，对观察力、记忆力、想像力和思维能力的开发",
                                  "level": 3,
                                  "children": [],
                                  "name": "智力开发",
                                  "count": 42595488,
                                  "id": 10102
                              },
                              {
                                  "des": "为3-6岁幼儿提供的学前教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "幼儿园",
                                  "count": 53819817,
                                  "id": 10103
                              },
                              {
                                  "des": "为0-6岁儿童提供的教育，包括语言启蒙、智力开发等，寓教于乐小游戏、识字卡、画板等",
                                  "level": 3,
                                  "children": [],
                                  "name": "少儿早教",
                                  "count": 47908513,
                                  "id": 10104
                              }
                          ],
                          "name": "早教与学前教育",
                          "count": 170861124,
                          "id": 101
                      },
                      {
                          "des": "为小学、初中和高中学生提供的教育",
                          "level": 2,
                          "children": [
                              {
                                  "des": "为小学学生提供的各科教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "小学教育",
                                  "count": 185302732,
                                  "id": 10201
                              },
                              {
                                  "des": "为初中学生提供的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "初中教育",
                                  "count": 153327477,
                                  "id": 10202
                              },
                              {
                                  "des": "为高中生提供的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "高中教育",
                                  "count": 151597905,
                                  "id": 10203
                              },
                              {
                                  "des": "与应试教育对应，注重思想道德素质、能力培养、个性发展、身体健康和心理健康的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "中小学素质教育",
                                  "count": 20897456,
                                  "id": 10204
                              }
                          ],
                          "name": "基础教育",
                          "count": 312408271,
                          "id": 102
                      },
                      {
                          "des": "中专指九年义务教育结束后学习中等专业知识的学校；职业中学指的实施中等职业技能教育的学校，包括职业初中和职业高中",
                          "level": 2,
                          "children": [],
                          "name": "中专/中职",
                          "count": 14310533,
                          "id": 110
                      },
                      {
                          "des": "为用户提供的为提升非母语水平而进行的培训",
                          "level": 2,
                          "children": [
                              {
                                  "des": "为3-12岁少年儿童提供的英语培训 ，区分应试要求的",
                                  "level": 3,
                                  "children": [],
                                  "name": "少儿英语",
                                  "count": 70331482,
                                  "id": 10301
                              },
                              {
                                  "des": "为12-18岁青少年提供的英语培训，区分应试要求的",
                                  "level": 3,
                                  "children": [],
                                  "name": "青少年英语",
                                  "count": 24311030,
                                  "id": 10302
                              },
                              {
                                  "des": "以满足职场、社交、旅行中的语言要求为目的的成人英语培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "成人英语",
                                  "count": 38777339,
                                  "id": 10303
                              },
                              {
                                  "des": "为提升日语韩语水平进行的语言培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "日语韩语",
                                  "count": 5918196,
                                  "id": 10304
                              }
                          ],
                          "name": "语言培训",
                          "count": 103128121,
                          "id": 103
                      },
                      {
                          "des": "根据国家教育部下达的招生计划录取的学生，完成学业后由学校颁发国家统一印制的毕业证书和学历证书的教育方式",
                          "level": 2,
                          "children": [
                              {
                                  "des": "包括专科教育、本科教育和研究生（含硕士和博士）教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "普通高等教育",
                                  "count": 32557874,
                                  "id": 10401
                              },
                              {
                                  "des": "由中华人民共和国教育部高等教育司组织的全国性英语考试，包括英语四级考试和英语六级考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "四六级英语考试",
                                  "count": 17924112,
                                  "id": 10402
                              },
                              {
                                  "des": "专项针对考研英语科目的辅导",
                                  "level": 3,
                                  "children": [],
                                  "name": "考研英语考试",
                                  "count": 16888425,
                                  "id": 10403
                              },
                              {
                                  "des": "为准备全国研究生入学考试而进行的教育",
                                  "level": 3,
                                  "children": [],
                                  "name": "考研辅导",
                                  "count": 5026111,
                                  "id": 10404
                              },
                              {
                                  "des": "含自考、远程教育、成人高考（脱产、业余、函授）、开放大学等",
                                  "level": 3,
                                  "children": [],
                                  "name": "成人学历教育",
                                  "count": 59656182,
                                  "id": 10405
                              },
                              {
                                  "des": "培养能够胜任工商企业和经济管理部门高层管理工作需要的管理人才",
                                  "level": 3,
                                  "children": [],
                                  "name": "MBA/EMBA",
                                  "count": 26931101,
                                  "id": 10406
                              }
                          ],
                          "name": "学历教育",
                          "count": 111737481,
                          "id": 104
                      },
                      {
                          "des": "出国留学要求的各项考试，包括语言能力考试和升学考试",
                          "level": 2,
                          "children": [
                              {
                                  "des": "针对申请去北美、英国等国家接受高等教育的非英语国家学生语言考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "雅思/托福",
                                  "count": 1275263,
                                  "id": 10501
                              }
                          ],
                          "name": "出国留学",
                          "count": 1705607,
                          "id": 105
                      },
                      {
                          "des": "受教育者获得某种职业或生产劳动所需要的职业知识、技能和职业道德的教育",
                          "level": 2,
                          "children": [
                              {
                                  "des": "IT互联网行业相关职能工作者技能培训与资格考试，包括开发、算法等",
                                  "level": 3,
                                  "children": [],
                                  "name": "IT培训与考试",
                                  "count": 48690055,
                                  "id": 10601
                              },
                              {
                                  "des": "使人具备一定的厨师职业就业能力，满足岗位要求的培训/考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "厨师培训与考试",
                                  "count": 124874807,
                                  "id": 10602
                              },
                              {
                                  "des": "为获得美容美发美甲从业要求的相应技能进行的培训或学习",
                                  "level": 3,
                                  "children": [],
                                  "name": "美容美发美甲教育",
                                  "count": 76031473,
                                  "id": 10603
                              },
                              {
                                  "des": "为获得汽车维修、培养技术能力进行的培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "汽修培训与考试",
                                  "count": 64120658,
                                  "id": 10604
                              },
                              {
                                  "des": "按照任务的目的和要求，预先制定出工作方案和计划，绘出图样，包含平面设计、视觉设计、UI设计，3D建模等类别",
                                  "level": 3,
                                  "children": [],
                                  "name": "设计类培训与考试",
                                  "count": 14986763,
                                  "id": 10605
                              },
                              {
                                  "des": "含执业医师，执业药师，护士资格，卫生职称在内的培训与考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "医学资格培训与考试",
                                  "count": 27534897,
                                  "id": 10607
                              },
                              {
                                  "des": "教师职位、从事教师工作的前提条件，教育教学从业工作人员的基本要求",
                                  "level": 3,
                                  "children": [],
                                  "name": "教师资格考试",
                                  "count": 32976445,
                                  "id": 10608
                              },
                              {
                                  "des": "包含国内外财经考试，如会计/证券/银行/期货从业，CPA，ACCA等",
                                  "level": 3,
                                  "children": [],
                                  "name": "财经考试",
                                  "count": 18150306,
                                  "id": 10609
                              },
                              {
                                  "des": "为从事律师、法官、检察官、公证员职业必须通过的国家统一法律职业资格考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "司法考试",
                                  "count": 27412144,
                                  "id": 10610
                              },
                              {
                                  "des": "为从事工建筑工程等职业的人员提供获得建造师执业资格的培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "建造师资格考试",
                                  "count": 21156478,
                                  "id": 10611
                              },
                              {
                                  "des": "为取得机动车辆驾驶人员所需申领的证照进行培训与考试",
                                  "level": 3,
                                  "children": [],
                                  "name": "驾驶培训与考试",
                                  "count": 57552352,
                                  "id": 10612
                              },
                              {
                                  "des": "从事消防工程等职业的人员提供获得消防工程师执业资格的培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "消防工程培训与教育",
                                  "count": 23508921,
                                  "id": 10613
                              },
                              {
                                  "des": "为准备创业开网店的创业者提供的教育培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "网店培训与教育",
                                  "count": 14032158,
                                  "id": 10614
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "职业培训其他",
                                  "count": 65704737,
                                  "id": 10615
                              }
                          ],
                          "name": "职业培训",
                          "count": 261861092,
                          "id": 106
                      },
                      {
                          "des": "从学习者兴趣出发，培养才艺的教育培训， 包含各类艺术、表演、体育、手工艺、编程等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "含基础乐理、演唱和各类中外乐器教学等",
                                  "level": 3,
                                  "children": [],
                                  "name": "声乐与乐器",
                                  "count": 38130880,
                                  "id": 10701
                              },
                              {
                                  "des": "含绘画、书法、艺术教育与插花、剪纸等各类手工艺",
                                  "level": 3,
                                  "children": [],
                                  "name": "美术/书法/手工艺",
                                  "count": 41404313,
                                  "id": 10702
                              },
                              {
                                  "des": "学习各类舞蹈、表演的培训",
                                  "level": 3,
                                  "children": [],
                                  "name": "舞蹈与表演",
                                  "count": 54015107,
                                  "id": 10703
                              }
                          ],
                          "name": "兴趣教育",
                          "count": 120123626,
                          "id": 107
                      },
                      {
                          "des": "提高个人创造和管理财富能力的培训与服务，培训内容包括财务知识、投资战略、经济常识、法律规章等",
                          "level": 2,
                          "children": [],
                          "name": "财商教育",
                          "count": 61102952,
                          "id": 108
                      },
                      {
                          "des": "对教育有兴趣但未能准确识别的用户",
                          "level": 2,
                          "children": [],
                          "name": "教育其他",
                          "count": 168164860,
                          "id": 109
                      }
                  ],
                  "name": "教育",
                  "count": 481302395,
                  "id": 1
              },
              {
                  "des": "指对货币流通和银行信用相关的各种活动",
                  "level": 1,
                  "children": [
                      {
                          "des": "依法成立的，经营货币信贷业务的金融机构",
                          "level": 2,
                          "children": [
                              {
                                  "des": "发卡银行向持卡人签发的，没有信用额度，持卡人先存款、后使用的银行卡",
                                  "level": 3,
                                  "children": [],
                                  "name": "借记卡",
                                  "count": 191699115,
                                  "id": 20101
                              },
                              {
                                  "des": "一般指贷记卡，由银行发行、在信用额度内持卡人先消费后还款",
                                  "level": 3,
                                  "children": [],
                                  "name": "信用卡",
                                  "count": 200158437,
                                  "id": 20102
                              },
                              {
                                  "des": "银行等金融机构发放给符合条件的自然人的本，外币贷款",
                                  "level": 3,
                                  "children": [],
                                  "name": "个人贷款",
                                  "count": 194162351,
                                  "id": 20103
                              }
                          ],
                          "name": "银行",
                          "count": 298077935,
                          "id": 201
                      },
                      {
                          "des": "证券是 “股票” “债券” 等能够证明持有者财产价值的凭证",
                          "level": 2,
                          "children": [
                              {
                                  "des": "股份公司发行给股东作为持股凭证并借以取得股息和红利的证券",
                                  "level": 3,
                                  "children": [],
                                  "name": "股票",
                                  "count": 14865525,
                                  "id": 20201
                              },
                              {
                                  "des": "主要是指证券投资基金",
                                  "level": 3,
                                  "children": [],
                                  "name": "基金",
                                  "count": 2625754,
                                  "id": 20203
                              },
                              {
                                  "des": "包括了商品期货、股指期货、利率期货、外汇期货、金属期货",
                                  "level": 3,
                                  "children": [],
                                  "name": "期货",
                                  "count": 5269961,
                                  "id": 20205
                              }
                          ],
                          "name": "证券",
                          "count": 22004216,
                          "id": 202
                      },
                      {
                          "des": "投保人根据合同约定，向保险人交付保险费，保险人按保险合同的约定对所承保的内容承担赔偿责任的一种行为。",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指保险公司对财产及其有关利益因灾害或意外事故造成的损失承担赔偿责任的保险。包括车险等",
                                  "level": 3,
                                  "children": [],
                                  "name": "财产保险",
                                  "count": 30311043,
                                  "id": 20301
                              },
                              {
                                  "des": "被保险人身体出现疾病时，由保险人向其支付保险金的人身保险。包括疾病险、医疗险等",
                                  "level": 3,
                                  "children": [],
                                  "name": "疾病保险",
                                  "count": 150315205,
                                  "id": 20302
                              },
                              {
                                  "des": "以人的寿命和身体为保险标的的保险，包括意外险和养老金保险",
                                  "level": 3,
                                  "children": [],
                                  "name": "人寿保险",
                                  "count": 56108955,
                                  "id": 20303
                              },
                              {
                                  "des": "对旅行途中可能发生的各种意外（除疾病、外科手术、自杀、战事变乱、职业性运动竞赛与故意行为外）所导致的一切意外死伤事故所做的保障",
                                  "level": 3,
                                  "children": [],
                                  "name": "旅游保险",
                                  "count": 26855409,
                                  "id": 20304
                              }
                          ],
                          "name": "保险（按险种）",
                          "count": 174183713,
                          "id": 203
                      },
                      {
                          "des": "投保人根据合同约定，向保险人交付保险费，保险人按保险合同的约定对所承保的内容承担赔偿责任的一种行为",
                          "level": 2,
                          "children": [
                              {
                                  "des": "保险公司的营销手段，通过免费赠送额度不高的短期保险进行获客，最终实现保单转化",
                                  "level": 3,
                                  "children": [],
                                  "name": "赠险",
                                  "count": 99542335,
                                  "id": 20601
                              },
                              {
                                  "des": "保险期限小于或者等于一年的险种，一般意外险，旅游险，住院津贴、住院报销型保险为短险，短险的特点是保费少，保障高，发生赔付的机率相对低",
                                  "level": 3,
                                  "children": [],
                                  "name": "短险",
                                  "count": 1068924,
                                  "id": 20602
                              },
                              {
                                  "des": "指保险期限大于一年的保险，多数情况下，长险的缴费期限也会较长，一般大于3年。像重大疾病保险、分红保险、个人养老保险等都是长期险",
                                  "level": 3,
                                  "children": [],
                                  "name": "长险",
                                  "count": 103393209,
                                  "id": 20603
                              }
                          ],
                          "name": "保险（按门槛）",
                          "count": 140805466,
                          "id": 206
                      },
                      {
                          "des": "传统金融机构与互联网企业利用互联网技术和信息通信技术的新型金融业务模式",
                          "level": 2,
                          "children": [
                              {
                                  "des": "通过互联网平台实现借贷行为平台",
                                  "level": 3,
                                  "children": [],
                                  "name": "互联网贷款",
                                  "count": 109054997,
                                  "id": 20401
                              },
                              {
                                  "des": "与银联或网联对接而促成交易双方进行交易的网络支付模式",
                                  "level": 3,
                                  "children": [],
                                  "name": "第三方支付",
                                  "count": 58410724,
                                  "id": 20402
                              }
                          ],
                          "name": "互联网金融",
                          "count": 251022978,
                          "id": 204
                      }
                  ],
                  "name": "金融",
                  "count": 480440927,
                  "id": 2
              },
              {
                  "des": "对各类生活服务有兴趣的用户",
                  "level": 1,
                  "children": [
                      {
                          "des": "有通过中介服务交友、认识伴侣需求的用户",
                          "level": 2,
                          "children": [],
                          "name": "婚恋交友",
                          "count": 342305291,
                          "id": 301
                      },
                      {
                          "des": "婚礼及庆典策划",
                          "level": 2,
                          "children": [],
                          "name": "婚庆",
                          "count": 80470612,
                          "id": 302
                      },
                      {
                          "des": "对婚纱照拍摄有需求的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "去国内外知名景点拍摄婚纱照的服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "旅拍",
                                  "count": 2182725,
                                  "id": 30301
                              },
                              {
                                  "des": "在影楼或影棚拍摄婚纱照的服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "本地拍摄",
                                  "count": 3950733,
                                  "id": 30302
                              }
                          ],
                          "name": "婚纱摄影",
                          "count": 55823772,
                          "id": 303
                      },
                      {
                          "des": "艺术摄影、艺术照等服务",
                          "level": 2,
                          "children": [
                              {
                                  "des": "为个人拍摄艺术照的服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "个人写真",
                                  "count": 9111462,
                                  "id": 30401
                              },
                              {
                                  "des": "为儿童拍摄照片的服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "儿童照",
                                  "count": 322448,
                                  "id": 30404
                              },
                              {
                                  "des": "为家长和孩子拍摄照片的服务，与全家福有所区别",
                                  "level": 3,
                                  "children": [],
                                  "name": "亲子照",
                                  "count": 163602,
                                  "id": 30405
                              }
                          ],
                          "name": "摄影写真",
                          "count": 81872190,
                          "id": 304
                      },
                      {
                          "des": "家政服务，包括保姆、月嫂、保洁、护工等",
                          "level": 2,
                          "children": [],
                          "name": "家政服务",
                          "count": 24327107,
                          "id": 306
                      },
                      {
                          "des": "充值话费、生活缴费等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "其他类型的便民服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "便民服务其他",
                                  "count": 161600190,
                                  "id": 30703
                              }
                          ],
                          "name": "便民服务",
                          "count": 310883694,
                          "id": 307
                      },
                      {
                          "des": "为患者提供的服务和商品，包括医学诊疗，治病方法等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "基于西医为患者提供的医疗服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "西医",
                                  "count": 853247,
                                  "id": 31001
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "医疗服务其他",
                                  "count": 6334401,
                                  "id": 31003
                              }
                          ],
                          "name": "医疗服务",
                          "count": 7190531,
                          "id": 310
                      }
                  ],
                  "name": "生活服务",
                  "count": 497404798,
                  "id": 3
              },
              {
                  "des": "面向企业或个人提供的专业性服务。分类涵盖了诸多行业，如：招商加盟、法律服务，商旅服务，企业管理，信息咨询，广告服务，公关服务，职业中介，教育培训，特许经营，金融服务，保险理财等二十几个行业。",
                  "level": 1,
                  "children": [
                      {
                          "des": "想成为某特定行业连锁企业的加盟商，以进行销售网络搭建或品牌代理等业务",
                          "level": 2,
                          "children": [
                              {
                                  "des": "对加盟餐饮连锁企业有兴趣的用户。分类包括火锅加盟、特色小吃、烧烤加盟、甜品冷饮、日韩料理、中西快餐、传统美食、食品机械、茶酒代理等",
                                  "level": 3,
                                  "children": [],
                                  "name": "餐饮加盟",
                                  "count": 54165183,
                                  "id": 40101
                              },
                              {
                                  "des": "对家居建材连锁经营商有兴趣的用户。",
                                  "level": 3,
                                  "children": [],
                                  "name": "家居建材招商加盟",
                                  "count": 1119862,
                                  "id": 40102
                              },
                              {
                                  "des": "对成为连锁教育培训机构加盟商有兴趣的用户",
                                  "level": 3,
                                  "children": [],
                                  "name": "教育培训加盟",
                                  "count": 6769987,
                                  "id": 40103
                              },
                              {
                                  "des": "有各类农业养殖有加盟兴趣的用户。",
                                  "level": 3,
                                  "children": [],
                                  "name": "农业养殖加盟",
                                  "count": 77871179,
                                  "id": 40104
                              },
                              {
                                  "des": "利用互联网技术、软件相关的招商加盟，包含网店",
                                  "level": 3,
                                  "children": [],
                                  "name": "互联网加盟",
                                  "count": 70281643,
                                  "id": 40111
                              }
                          ],
                          "name": "招商加盟",
                          "count": 163227089,
                          "id": 401
                      },
                      {
                          "des": "对招聘、求职、应聘、人才落户、积分政策、猎头等人力资源服务有需求",
                          "level": 2,
                          "children": [],
                          "name": "求职招聘",
                          "count": 108822979,
                          "id": 403
                      },
                      {
                          "des": "包括安保、防盗、门禁考勤、交通消防、警用装备等产品或服务",
                          "level": 2,
                          "children": [
                              {
                                  "des": "防盗报警、保险箱柜、监控探头、防盗门锁窗等产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "防盗报警",
                                  "count": 31064397,
                                  "id": 41101
                              }
                          ],
                          "name": "安全安保",
                          "count": 31064397,
                          "id": 411
                      },
                      {
                          "des": "物品运输服务，包括公路、铁路、空中、水上运输和港口服务",
                          "level": 2,
                          "children": [],
                          "name": "物流运输",
                          "count": 33999826,
                          "id": 412
                      },
                      {
                          "des": "留学和移民、财务、认证、市场调研、礼仪公关等专业服务",
                          "level": 2,
                          "children": [
                              {
                                  "des": "为中国公民出国提供提供咨询和代理服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "移民中介",
                                  "count": 605924,
                                  "id": 41504
                              }
                          ],
                          "name": "专业咨询",
                          "count": 605924,
                          "id": 415
                      },
                      {
                          "des": "由律师和法律专业人士提供的专业服务，如诉讼和法律援助",
                          "level": 2,
                          "children": [],
                          "name": "法律服务",
                          "count": 1274766,
                          "id": 418
                      },
                      {
                          "des": "面向企业、个体经营户、公司管理人员；适用于商业用途的软件服务",
                          "level": 2,
                          "children": [],
                          "name": "商务软件服务",
                          "count": 181756394,
                          "id": 419
                      }
                  ],
                  "name": "商务服务",
                  "count": 351416393,
                  "id": 4
              },
              {
                  "des": "房屋买卖、租赁等相关服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "对房屋买卖有兴趣的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "房产类型为按一般民用住宅建筑标准建造的居住用房屋的交易",
                                  "level": 3,
                                  "children": [],
                                  "name": "普通住宅交易",
                                  "count": 86459529,
                                  "id": 50101
                              },
                              {
                                  "des": "房产类型档次质量更高的豪宅和别墅的交易",
                                  "level": 3,
                                  "children": [],
                                  "name": "豪宅别墅交易",
                                  "count": 5452912,
                                  "id": 50102
                              },
                              {
                                  "des": "有房产类型为可开展商业和生活服务活动的房屋的交易，如写字楼、各类商店等。",
                                  "level": 3,
                                  "children": [],
                                  "name": "商用房交易",
                                  "count": 16310216,
                                  "id": 50103
                              }
                          ],
                          "name": "房产交易",
                          "count": 106851463,
                          "id": 501
                      },
                      {
                          "des": "房屋所有权人将房屋出租给承租人使用的行为",
                          "level": 2,
                          "children": [
                              {
                                  "des": "房产类型为按一般民用住宅建筑标准建造的居住用房屋的租赁",
                                  "level": 3,
                                  "children": [],
                                  "name": "普通住宅租赁",
                                  "count": 44755297,
                                  "id": 50201
                              },
                              {
                                  "des": "房产类型为可开展商业和生活服务活动的房屋的租赁，如写字楼、各类商店等。",
                                  "level": 3,
                                  "children": [],
                                  "name": "商用房租赁",
                                  "count": 5130411,
                                  "id": 50202
                              }
                          ],
                          "name": "房屋租赁",
                          "count": 83446797,
                          "id": 502
                      }
                  ],
                  "name": "房产交易租赁",
                  "count": 243607999,
                  "id": 5
              },
              {
                  "des": "对家装、家具、家纺等服务或商品有需求的用户",
                  "level": 1,
                  "children": [
                      {
                          "des": "指对房屋的整体布局，风格，色彩及空间使用的重新设定有需求的用户，分为传统家装和互联网家装。",
                          "level": 2,
                          "children": [],
                          "name": "设计装修",
                          "count": 106527930,
                          "id": 601
                      },
                      {
                          "des": "对家庭器具有需求的用户，包括客厅、卧室、餐厅中的衣橱、桌子、床、沙发等物品",
                          "level": 2,
                          "children": [],
                          "name": "家具",
                          "count": 83128049,
                          "id": 602
                      },
                      {
                          "des": "对家装硬装主材料有需求的用户，包括门窗、油漆、地板、五金、瓷砖、灯具等",
                          "level": 2,
                          "children": [],
                          "name": "建材灯饰",
                          "count": 119057699,
                          "id": 603
                      },
                      {
                          "des": "对家居软装饰品与家纺有兴趣的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "对家居软装与饰品有兴趣的用户，包括铁艺、摆件、墙面装饰、贴饰、手工艺品等",
                                  "level": 3,
                                  "children": [],
                                  "name": "家居装饰",
                                  "count": 61912885,
                                  "id": 60401
                              },
                              {
                                  "des": "装饰用纺织品，包含床品套件、凉席蚊帐、床垫被子、枕芯、地毯窗帘、桌面、沙发垫套、窗帘布艺等",
                                  "level": 3,
                                  "children": [],
                                  "name": "家纺",
                                  "count": 91737381,
                                  "id": 60402
                              }
                          ],
                          "name": "家居装饰及家纺",
                          "count": 102153101,
                          "id": 604
                      }
                  ],
                  "name": "家居家装",
                  "count": 203466692,
                  "id": 6
              },
              {
                  "des": "以智能手机为载体，通过移动应用、小程序及商务办公软件提供的各项服务，包括团购折扣卡等",
                  "level": 1,
                  "children": [
                      {
                          "des": "主要卖点为团购打折的软件或服务，包括各种优惠卡；代表软件：“什么值得的买”；不与电商购物同时标注",
                          "level": 2,
                          "children": [],
                          "name": "团购折扣",
                          "count": 175657321,
                          "id": 701
                      },
                      {
                          "des": "提供在线购物服务的移动应用程序、小程序等；代表软件淘宝、京东；不与团购折扣同时标注",
                          "level": 2,
                          "children": [],
                          "name": "电商购物",
                          "count": 548659573,
                          "id": 702
                      },
                      {
                          "des": "包括短视频、综合视频 、音乐、音频网站APP",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指综合视频网站或APP，如腾讯视频、爱奇艺、优酷等",
                                  "level": 3,
                                  "children": [],
                                  "name": "综合视频",
                                  "count": 484562229,
                                  "id": 70302
                              },
                              {
                                  "des": "指短视频APP，如抖音、快手等",
                                  "level": 3,
                                  "children": [],
                                  "name": "短视频",
                                  "count": 298235163,
                                  "id": 70301
                              },
                              {
                                  "des": "指音乐类网站或APP，如qq音乐，网易云音乐等",
                                  "level": 3,
                                  "children": [],
                                  "name": "音乐",
                                  "count": 396285774,
                                  "id": 70303
                              },
                              {
                                  "des": "指音频类网站或APP，如喜马拉雅",
                                  "level": 3,
                                  "children": [],
                                  "name": "音频",
                                  "count": 183413604,
                                  "id": 70304
                              },
                              {
                                  "des": "其他类型的影音视频软件",
                                  "level": 3,
                                  "children": [],
                                  "name": "影音视频其他",
                                  "count": 159356503,
                                  "id": 70305
                              }
                          ],
                          "name": "影音视频",
                          "count": 616869948,
                          "id": 703
                      },
                      {
                          "des": "指服务与办公的软件或效率工具，如wps等",
                          "level": 2,
                          "children": [],
                          "name": "办公软件",
                          "count": 174264347,
                          "id": 705
                      },
                      {
                          "des": "专门负责木马与病毒查杀清除的计算机软件",
                          "level": 2,
                          "children": [],
                          "name": "安全工具",
                          "count": 46852751,
                          "id": 706
                      },
                      {
                          "des": "保障交易财务安全、人身安全的各类软件",
                          "level": 2,
                          "children": [],
                          "name": "防护工具",
                          "count": 37226754,
                          "id": 707
                      },
                      {
                          "des": "对已拍摄图片进行后期加工处理的软件",
                          "level": 2,
                          "children": [],
                          "name": "图片摄影",
                          "count": 362255385,
                          "id": 708
                      },
                      {
                          "des": "为受众带来价值的新闻",
                          "level": 2,
                          "children": [],
                          "name": "新闻资讯",
                          "count": 315159442,
                          "id": 709
                      },
                      {
                          "des": "通过浏览资讯、小说、视频，走步数等利用碎片化时间获取现金提现，不包括 游戏类app",
                          "level": 2,
                          "children": [],
                          "name": "网赚软件",
                          "count": 290949409,
                          "id": 710
                      },
                      {
                          "des": "其他类型的互联网软件",
                          "level": 2,
                          "children": [],
                          "name": "互联网软件服务其他",
                          "count": 607932541,
                          "id": 711
                      }
                  ],
                  "name": "互联网软件服务",
                  "count": 785690310,
                  "id": 7
              },
              {
                  "des": "包含电子游戏和桌游",
                  "level": 1,
                  "children": [
                      {
                          "des": "对特定玩法的游戏有过行为的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "玩家负责扮演这个角色在一个写实或虚构世界中活动，偏重度游戏。音乐舞蹈中重度游戏：例如QQ炫舞需要选角色",
                                  "level": 3,
                                  "children": [],
                                  "name": "角色扮演游戏",
                                  "count": 230689021,
                                  "id": 80101
                              },
                              {
                                  "des": "玩家运用策略与电脑或其他玩家较量，以取得各种形式胜利的游戏，也包括塔防，偏重度游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "策略游戏",
                                  "count": 112687703,
                                  "id": 80102
                              },
                              {
                                  "des": "由玩家扮演管理者的角色，对游戏中虚拟的现实世界进行经营管理，包括养成，偏重度游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "模拟经营游戏",
                                  "count": 232614432,
                                  "id": 80103
                              },
                              {
                                  "des": "是一种易于上手，不涉及短时间大量或重度脑力活动，规则相对简单的电子游戏，不限定游戏题材以及类型，解谜放到这里，不需要选角色的音乐舞蹈",
                                  "level": 3,
                                  "children": [],
                                  "name": "休闲益智游戏",
                                  "count": 426576513,
                                  "id": 80106
                              },
                              {
                                  "des": "玩家操纵自己的角色和对手进行近身格斗的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "格斗游戏",
                                  "count": 45713771,
                                  "id": 80107
                              },
                              {
                                  "des": "是一种让玩家模拟参与专业的体育运动项目的电视游戏或电脑游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "体育游戏",
                                  "count": 24149602,
                                  "id": 80108
                              },
                              {
                                  "des": "包括所有以射击为主的电子游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "射击游戏",
                                  "count": 364118828,
                                  "id": 80109
                              },
                              {
                                  "des": "游戏平台类，包括休闲游戏平台、租号平台等",
                                  "level": 3,
                                  "children": [],
                                  "name": "综合游戏平台",
                                  "count": 184059714,
                                  "id": 80115
                              },
                              {
                                  "des": "棋盘游戏和牌类统称棋牌游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "棋牌游戏",
                                  "count": 177324180,
                                  "id": 80110
                              },
                              {
                                  "des": "易操作且玩法丰富以街机捕鱼机为原型的休闲游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "捕鱼游戏",
                                  "count": 63332351,
                                  "id": 80116
                              },
                              {
                                  "des": "玩家在游戏中通过游戏内货币（钻石，金币等）进行抽卡来进行决斗或互换，强调抽卡的都可以定义为卡牌游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "卡牌游戏",
                                  "count": 78134763,
                                  "id": 80111
                              },
                              {
                                  "des": "主要是以第一人物或者第三人物参与速度的竞争",
                                  "level": 3,
                                  "children": [],
                                  "name": "竞速游戏",
                                  "count": 91479825,
                                  "id": 80112
                              },
                              {
                                  "des": "多人在线战术竞技游戏。在战斗中一般需要购买装备，玩家通常被分为两队，两队在分散的游戏地图中互相竞争",
                                  "level": 3,
                                  "children": [],
                                  "name": "MOBA",
                                  "count": 221598442,
                                  "id": 80113
                              },
                              {
                                  "des": "其他玩法的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "游戏玩法其他",
                                  "count": 33198974,
                                  "id": 80114
                              }
                          ],
                          "name": "游戏（按类型）",
                          "count": 595309528,
                          "id": 801
                      },
                      {
                          "des": "对特定题材游戏有过行为的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "玩家扮演战士，法师，道士三种职业在玛法大陆降妖除魔的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "传奇游戏",
                                  "count": 101171743,
                                  "id": 80201
                              },
                              {
                                  "des": "玩家扮演修真者，通过各种方式增加自身的能力，最终得道成仙；包含一武侠江湖为背景的武侠游戏。偏中国古代",
                                  "level": 3,
                                  "children": [],
                                  "name": "仙侠游戏",
                                  "count": 90616934,
                                  "id": 80202
                              },
                              {
                                  "des": "游戏往往处于架空的西方中世纪，会出现恶龙，地精，精灵等角色。偏西方",
                                  "level": 3,
                                  "children": [],
                                  "name": "魔幻游戏",
                                  "count": 162656897,
                                  "id": 80203
                              },
                              {
                                  "des": "模拟军事环境打造的枪战类游戏，例如：发现CF、使命召唤、绝地求生。",
                                  "level": 3,
                                  "children": [],
                                  "name": "军事游戏",
                                  "count": 359406484,
                                  "id": 80215
                              },
                              {
                                  "des": "以古典名著《西游记》为世界观架构或题材的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "西游游戏",
                                  "count": 24803912,
                                  "id": 80204
                              },
                              {
                                  "des": "以古典名著《三国演义》为为世界观架构或题材的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "三国游戏",
                                  "count": 66433136,
                                  "id": 80205
                              },
                              {
                                  "des": "以宫廷斗争生存为背景的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "宫廷游戏",
                                  "count": 25114099,
                                  "id": 80206
                              },
                              {
                                  "des": "以现代都市为背景的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "都市游戏",
                                  "count": 73502492,
                                  "id": 80207
                              },
                              {
                                  "des": "背景设定为地球末日的人类生存的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "末日游戏",
                                  "count": 74798158,
                                  "id": 80208
                              },
                              {
                                  "des": "背景为科学虚构的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "科幻游戏",
                                  "count": 28613353,
                                  "id": 80210
                              },
                              {
                                  "des": "通常改编自动漫，会沿用动漫的世界观",
                                  "level": 3,
                                  "children": [],
                                  "name": "二次元游戏",
                                  "count": 104978371,
                                  "id": 80211
                              },
                              {
                                  "des": "专门针对女性开发的、适合于女性玩的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "女性向游戏",
                                  "count": 53610825,
                                  "id": 80212
                              },
                              {
                                  "des": "其他题材的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "游戏题材其他",
                                  "count": 555793925,
                                  "id": 80214
                              },
                              {
                                  "des": "以官员斗争生存为背景的游戏，玩家多为男性。例如：十品芝麻官",
                                  "level": 3,
                                  "children": [],
                                  "name": "宫廷游戏（男性向）",
                                  "count": 8080133,
                                  "id": 80216
                              }
                          ],
                          "name": "游戏（按题材）",
                          "count": 597368669,
                          "id": 802
                      },
                      {
                          "des": "对特定游戏利益点有需求的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "玩家通过玩游戏，积累金币及红包达到一定额度后可提现的游戏；包含兑换手机且隐含赚钱的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "网赚游戏",
                                  "count": 306413035,
                                  "id": 80301
                              },
                              {
                                  "des": "其他利益类型的游戏",
                                  "level": 3,
                                  "children": [],
                                  "name": "游戏利益其他",
                                  "count": 524779901,
                                  "id": 80302
                              }
                          ],
                          "name": "游戏（按利益）",
                          "count": 597469481,
                          "id": 803
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [
                              {
                                  "des": "游戏过程中主要是将一定量相同的游戏元素，如水果、宝石、动物头像、积木麻将牌等，使它们彼此相邻配对消除来获胜。例如：爱上消消消、开心消消乐",
                                  "level": 3,
                                  "children": [],
                                  "name": "消除游戏",
                                  "count": 159965356,
                                  "id": 80401
                              },
                              {
                                  "des": "战斗以回合的形式，双方依次行动的游戏。例如：梦幻西游、神武",
                                  "level": 3,
                                  "children": [],
                                  "name": "回合对战游戏",
                                  "count": 19220119,
                                  "id": 80402
                              },
                              {
                                  "des": "在该游戏中，玩家需要在游戏地图上收集各种资源，并在不断缩小的安全区域内对抗其他玩家，让自己生存到最后。例如：绝地求生、刺激战场、荒野行动、自走棋、武侠乂、云顶之弈",
                                  "level": 3,
                                  "children": [],
                                  "name": "吃鸡类游戏",
                                  "count": 20120038,
                                  "id": 80403
                              },
                              {
                                  "des": "以音乐为背景的游戏,根据音乐的节奏按照提示完成指定动作即可闯关成功。例如：QQ炫舞、劲舞团、节奏大师",
                                  "level": 3,
                                  "children": [],
                                  "name": "音舞游戏",
                                  "count": 7167545,
                                  "id": 80404
                              },
                              {
                                  "des": "通过答题、猜歌、解谜等方式的过关游戏。例如：猜歌达人、成语升官传、最强答人",
                                  "level": 3,
                                  "children": [],
                                  "name": "答题游戏",
                                  "count": 92985366,
                                  "id": 80405
                              },
                              {
                                  "des": "对一个不确定事件，投入具有价值的东西，期望赢得更大价值，从而获得快感。例如：QQ麻将、JJ斗地主、捕鱼达人",
                                  "level": 3,
                                  "children": [],
                                  "name": "休闲博弈游戏",
                                  "count": 109114618,
                                  "id": 80406
                              },
                              {
                                  "des": "通过在地图上建造炮塔或类似建筑物，以阻止游戏中敌人进攻的策略型游戏。举例：保卫萝卜、植物大战僵尸",
                                  "level": 3,
                                  "children": [],
                                  "name": "塔防游戏",
                                  "count": 32339029,
                                  "id": 80407
                              },
                              {
                                  "des": "游戏中通常包含一关接一关的副本地图，玩家通过地图闯关取得胜利。例如：剑与远征、放开那三国",
                                  "level": 3,
                                  "children": [],
                                  "name": "卡牌推图游戏",
                                  "count": 30747186,
                                  "id": 80408
                              },
                              {
                                  "des": "以赛车、体育项目为背景，在一定规则范围内击败对手取得胜利。例如：跑跑卡丁车，最强nba，腾讯桌球",
                                  "level": 3,
                                  "children": [],
                                  "name": "体育竞技游戏",
                                  "count": 29420976,
                                  "id": 80409
                              },
                              {
                                  "des": "多人分队战斗，通过战略取得胜利，游戏通常为单局模式。例如：王者荣耀、英雄联盟、决战平安京、穿越火线",
                                  "level": 3,
                                  "children": [],
                                  "name": "战略竞技游戏",
                                  "count": 21558439,
                                  "id": 80410
                              },
                              {
                                  "des": "通常包含PVE+PVP玩法，玩家通过打怪升级，爆取装备增强自身实力，且可与其它玩家PK。例如：贪玩蓝月、热血传奇、天涯明月刀",
                                  "level": 3,
                                  "children": [],
                                  "name": "升级打怪游戏",
                                  "count": 85293620,
                                  "id": 80411
                              },
                              {
                                  "des": "以动作性为重要内容的游戏，包含横版闯关、横版格斗。例如：DNF、原神、战神、三国战纪、合金弹头、魂斗罗",
                                  "level": 3,
                                  "children": [],
                                  "name": "动作冒险游戏",
                                  "count": 41074051,
                                  "id": 80412
                              },
                              {
                                  "des": "玩家通常管理某个国家，可以发动战争，运用策略排兵布阵。例如：率土之滨、万国觉醒、乱世王者、三国志战略版",
                                  "level": 3,
                                  "children": [],
                                  "name": "策略战争游戏",
                                  "count": 82559016,
                                  "id": 80413
                              },
                              {
                                  "des": "游戏中经历一步步选择，获得不同剧情结果；包括文字类恋爱养成游戏。例如：熹妃传、十品芝麻官、恋与制作人",
                                  "level": 3,
                                  "children": [],
                                  "name": "剧情交互游戏",
                                  "count": 24454648,
                                  "id": 80414
                              },
                              {
                                  "des": "自由建造或自由探索为主要玩法的游戏。例如：我的世界、迷你世界",
                                  "level": 3,
                                  "children": [],
                                  "name": "沙盒游戏",
                                  "count": 2418684,
                                  "id": 80415
                              },
                              {
                                  "des": "通过给游戏人物更换衣物饰品等进行装扮。例如：奇迹暖暖、闪耀暖暖",
                                  "level": 3,
                                  "children": [],
                                  "name": "换装游戏",
                                  "count": 34878727,
                                  "id": 80416
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "游戏玩法其他",
                                  "count": 254169046,
                                  "id": 80417
                              }
                          ],
                          "name": "游戏（按玩法）",
                          "count": 384418042,
                          "id": 804
                      }
                  ],
                  "name": "游戏",
                  "count": 602070331,
                  "id": 8
              },
              {
                  "des": "",
                  "level": 1,
                  "children": [
                      {
                          "des": "对第二手的汽车或使用过的汽车有需求的用户",
                          "level": 2,
                          "children": [],
                          "name": "二手车",
                          "count": 90299064,
                          "id": 901
                      },
                      {
                          "des": "应用于汽车改装、汽车美容、汽车装饰等汽车电子及零部件的相关产品，分为保养类、装饰类、清洁类等",
                          "level": 2,
                          "children": [],
                          "name": "汽车用品",
                          "count": 71158246,
                          "id": 902
                      },
                      {
                          "des": "按照售价区间划分车辆类型",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指售价在10万以下的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "低档车",
                                  "count": 12199961,
                                  "id": 90501
                              },
                              {
                                  "des": "指售价在10万至30万间的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "中档车",
                                  "count": 11953316,
                                  "id": 90502
                              },
                              {
                                  "des": "指售价在50万元以上的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "豪华车",
                                  "count": 11270260,
                                  "id": 90504
                              }
                          ],
                          "name": "汽车（按售价）",
                          "count": 178521198,
                          "id": 905
                      },
                      {
                          "des": "按动力来源划分汽车类型",
                          "level": 2,
                          "children": [
                              {
                                  "des": "以汽油为燃料，使用汽油机作为动力的汽车",
                                  "level": 3,
                                  "children": [],
                                  "name": "汽油",
                                  "count": 128146255,
                                  "id": 90602
                              }
                          ],
                          "name": "汽车（按动力）",
                          "count": 175470412,
                          "id": 906
                      },
                      {
                          "des": "对出行服务有需求的用户，包括汽车租赁、约车等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "出租人与承租人签订租赁合同，以交换汽车使用权利的一种交易形式",
                                  "level": 3,
                                  "children": [],
                                  "name": "汽车租赁",
                                  "count": 4398917,
                                  "id": 90701
                              },
                              {
                                  "des": "含共享汽车、共享单车等提供共享服务的形式",
                                  "level": 3,
                                  "children": [],
                                  "name": "共享用车",
                                  "count": 48687043,
                                  "id": 90702
                              },
                              {
                                  "des": "通过网络预约用车服务，服务方提供的车辆配有司机",
                                  "level": 3,
                                  "children": [],
                                  "name": "约车服务",
                                  "count": 30406653,
                                  "id": 90703
                              },
                              {
                                  "des": "增加出行便捷的应用软件，如地图导航",
                                  "level": 3,
                                  "children": [],
                                  "name": "出行工具",
                                  "count": 270163648,
                                  "id": 90704
                              },
                              {
                                  "des": "其他类型的出行服务",
                                  "level": 3,
                                  "children": [],
                                  "name": "出行服务其他",
                                  "count": 56756766,
                                  "id": 90705
                              }
                          ],
                          "name": "出行服务",
                          "count": 316260416,
                          "id": 907
                      },
                      {
                          "des": "以电池作为能量来源的车辆",
                          "level": 2,
                          "children": [],
                          "name": "电动车",
                          "count": 33964739,
                          "id": 909
                      }
                  ],
                  "name": "交通工具及服务",
                  "count": 409658386,
                  "id": 9
              },
              {
                  "des": "为满足用户的饮食需求提供的各类服务和商品，包括各类视频、饮料、",
                  "level": 1,
                  "children": [
                      {
                          "des": "烹饪方法与菜谱",
                          "level": 2,
                          "children": [],
                          "name": "烹饪/菜谱",
                          "count": 446597434,
                          "id": 1001
                      },
                      {
                          "des": "包含各种菜系和小吃、甜点等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是指由商业企业快速供应、即刻食用、价格合理以满足人们日常生活需要的大众化餐饮",
                                  "level": 3,
                                  "children": [],
                                  "name": "快餐",
                                  "count": 89623846,
                                  "id": 100217
                              }
                          ],
                          "name": "美食",
                          "count": 406439110,
                          "id": 1002
                      },
                      {
                          "des": "果蔬、肉类、水产品等只做必要的保鲜和简单整理就可上架出售，未经烹调、制作等深加工过程 的食品",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是海洋和淡水渔业生产的水产动植物产品及其加工产品的总称",
                                  "level": 3,
                                  "children": [],
                                  "name": "海鲜/水产品",
                                  "count": 13758965,
                                  "id": 100301
                              },
                              {
                                  "des": "指多汁且主要味觉为甜味和酸味，可食用的植物果实",
                                  "level": 3,
                                  "children": [],
                                  "name": "水果",
                                  "count": 87530083,
                                  "id": 100302
                              },
                              {
                                  "des": "方便米面、火腿肠、罐头、速食汤粥、肉类熟食、泡菜和酱菜等",
                                  "level": 3,
                                  "children": [],
                                  "name": "方便速食",
                                  "count": 78304481,
                                  "id": 100307
                              }
                          ],
                          "name": "食品生鲜",
                          "count": 140301606,
                          "id": 1003
                      },
                      {
                          "des": "酒 水 饮料等可饮用的的液体",
                          "level": 2,
                          "children": [
                              {
                                  "des": "中国酒类（除了果酒、米酒外）的统称",
                                  "level": 3,
                                  "children": [],
                                  "name": "白酒",
                                  "count": 39332201,
                                  "id": 100501
                              }
                          ],
                          "name": "酒水",
                          "count": 42940849,
                          "id": 1005
                      },
                      {
                          "des": "包括饮料、牛奶、各品种茶叶",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指经过定量包装的，供直接饮用或按一定比例用水冲调或冲泡饮用的；包含饮料 （可乐、果味饮料、功能饮料等）",
                                  "level": 3,
                                  "children": [],
                                  "name": "饮料冲调",
                                  "count": 42353684,
                                  "id": 100601
                              },
                              {
                                  "des": "指的是使用牛乳或羊乳及其加工制品",
                                  "level": 3,
                                  "children": [],
                                  "name": "牛奶乳品",
                                  "count": 0,
                                  "id": 100602
                              },
                              {
                                  "des": "包括红茶、绿茶等",
                                  "level": 3,
                                  "children": [],
                                  "name": "茗茶",
                                  "count": 65397409,
                                  "id": 100603
                              },
                              {
                                  "des": "其他类型的茶饮冲调",
                                  "level": 3,
                                  "children": [],
                                  "name": "茶饮冲调其他",
                                  "count": 0,
                                  "id": 100604
                              }
                          ],
                          "name": "茶饮冲调",
                          "count": 98180982,
                          "id": 1006
                      },
                      {
                          "des": "快速消费品，是人们在闲暇时吃的食品，主要有干果、膨化食品等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "以谷类粉（和/或豆类、薯类粉）鸡蛋、白糖等为主要原料，通过烘焙制作而成的食物",
                                  "level": 3,
                                  "children": [],
                                  "name": "饼干蛋糕",
                                  "count": 12826999,
                                  "id": 100707
                              }
                          ],
                          "name": "休闲食品",
                          "count": 51800628,
                          "id": 1007
                      }
                  ],
                  "name": "餐饮食品",
                  "count": 506847770,
                  "id": 10
              },
              {
                  "des": "包含服装、鞋帽、箱包、饰品、珠宝、钟表等",
                  "level": 1,
                  "children": [
                      {
                          "des": "女士穿着的各式衣物，包括上装、裤装、裙装、套装",
                          "level": 2,
                          "children": [],
                          "name": "女装",
                          "count": 401639843,
                          "id": 1101
                      },
                      {
                          "des": "男士穿着的各式衣物",
                          "level": 2,
                          "children": [],
                          "name": "男装",
                          "count": 110868923,
                          "id": 1102
                      },
                      {
                          "des": "围巾、帽子、领带、腰带、眼镜、手套及各式装饰品等",
                          "level": 2,
                          "children": [],
                          "name": "服饰配件",
                          "count": 51460985,
                          "id": 1103
                      },
                      {
                          "des": "供女性使用的箱包",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是指女士单边肩膀受力的包",
                                  "level": 3,
                                  "children": [],
                                  "name": "单肩包/斜挎包",
                                  "count": 30123344,
                                  "id": 110401
                              },
                              {
                                  "des": "指女士背在双肩的背包的统称",
                                  "level": 3,
                                  "children": [],
                                  "name": "双肩包",
                                  "count": 7469442,
                                  "id": 110404
                              }
                          ],
                          "name": "女士包袋",
                          "count": 36436556,
                          "id": 1104
                      },
                      {
                          "des": "供男性使用的箱包",
                          "level": 2,
                          "children": [
                              {
                                  "des": "是男士随身携带装钱或者其他小件物品的包",
                                  "level": 3,
                                  "children": [],
                                  "name": "钱包/卡包/钥匙包",
                                  "count": 4866678,
                                  "id": 110503
                              }
                          ],
                          "name": "男士包袋",
                          "count": 5890126,
                          "id": 1105
                      },
                      {
                          "des": "功能性为主的箱包，包括旅行箱、双肩包等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "固定在腰间、胸间的一种包",
                                  "level": 3,
                                  "children": [],
                                  "name": "腰包/胸包",
                                  "count": 3958176,
                                  "id": 110601
                              }
                          ],
                          "name": "功能箱包",
                          "count": 7398027,
                          "id": 1106
                      },
                      {
                          "des": "对贴身衣物、家居服及袜子有需求的用户",
                          "level": 2,
                          "children": [
                              {
                                  "des": "女士贴身穿着的 一类衣物",
                                  "level": 3,
                                  "children": [],
                                  "name": "女士内衣裤",
                                  "count": 82544808,
                                  "id": 110701
                              },
                              {
                                  "des": "男士贴身穿着的一类衣物",
                                  "level": 3,
                                  "children": [],
                                  "name": "男士内衣裤",
                                  "count": 16271330,
                                  "id": 110702
                              },
                              {
                                  "des": "一种穿在脚上的服饰用品",
                                  "level": 3,
                                  "children": [],
                                  "name": "袜子",
                                  "count": 33481524,
                                  "id": 110704
                              }
                          ],
                          "name": "内衣/家居服/袜子",
                          "count": 101879410,
                          "id": 1107
                      },
                      {
                          "des": "珠宝玉石及贵金属制成的饰品、工艺品",
                          "level": 2,
                          "children": [
                              {
                                  "des": "指用贵重金属（金银等）加工而成的雀钗、耳环、项链、戒指、手镯等装饰品",
                                  "level": 3,
                                  "children": [],
                                  "name": "贵金属首饰",
                                  "count": 58010023,
                                  "id": 110801
                              },
                              {
                                  "des": "指带有玉石的雀钗、耳环、项链、戒指、手镯等装饰品",
                                  "level": 3,
                                  "children": [],
                                  "name": "玉石首饰",
                                  "count": 52327023,
                                  "id": 110802
                              },
                              {
                                  "des": "指带有宝石（玛瑙、珍珠、钻石、水晶、蓝宝石等） 的雀钗、耳环、项链、戒指、手镯等装饰品",
                                  "level": 3,
                                  "children": [],
                                  "name": "宝石首饰",
                                  "count": 24936557,
                                  "id": 110803
                              }
                          ],
                          "name": "珠宝首饰",
                          "count": 306497410,
                          "id": 1108
                      },
                      {
                          "des": "穿在脚上、便于走路的东西",
                          "level": 2,
                          "children": [
                              {
                                  "des": "男士鞋子，包括包括皮鞋，正装鞋，休闲鞋，运动鞋，跑鞋，靴子等",
                                  "level": 3,
                                  "children": [],
                                  "name": "男鞋",
                                  "count": 104918230,
                                  "id": 110901
                              },
                              {
                                  "des": "女士鞋子，包括高跟鞋、芭蕾鞋、鱼嘴鞋、平跟鞋、低跟鞋 、中跟鞋 、高跟鞋、特高跟鞋、坡跟鞋、无跟鞋、松糕鞋、船鞋、长靴、短靴等",
                                  "level": 3,
                                  "children": [],
                                  "name": "女鞋",
                                  "count": 81650140,
                                  "id": 110902
                              }
                          ],
                          "name": "鞋靴",
                          "count": 148979276,
                          "id": 1109
                      },
                      {
                          "des": "记时装置，包括手表、怀表、钟等",
                          "level": 2,
                          "children": [],
                          "name": "钟表",
                          "count": 44721343,
                          "id": 1110
                      }
                  ],
                  "name": "服饰鞋帽箱包",
                  "count": 469273448,
                  "id": 11
              },
              {
                  "des": "指个人消费类的手机电脑及办公设备",
                  "level": 1,
                  "children": [
                      {
                          "des": "各类型手机及手机配件，如充电器、移动电源、数据线、手机壳等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "苹果公司研发的、搭建iOS操作系统的智能手机",
                                  "level": 3,
                                  "children": [],
                                  "name": "苹果手机",
                                  "count": 124027934,
                                  "id": 120101
                              },
                              {
                                  "des": "Android操作系统的智能手机",
                                  "level": 3,
                                  "children": [],
                                  "name": "安卓手机",
                                  "count": 113227781,
                                  "id": 120102
                              },
                              {
                                  "des": "包括手机壳，贴膜，存储卡，数据线，饰品，手机电池，自拍杆，车载支架，车载充电器等",
                                  "level": 3,
                                  "children": [],
                                  "name": "手机配件",
                                  "count": 86644083,
                                  "id": 120103
                              }
                          ],
                          "name": "手机及配件",
                          "count": 210329247,
                          "id": 1201
                      },
                      {
                          "des": "包括摄影摄像、影音娱乐的硬件和配件",
                          "level": 2,
                          "children": [
                              {
                                  "des": "照相机、摄影机、镜头、专业摄影器材和冲印设备等",
                                  "level": 3,
                                  "children": [],
                                  "name": "摄影摄像",
                                  "count": 2398097,
                                  "id": 120701
                              }
                          ],
                          "name": "数码",
                          "count": 3466624,
                          "id": 1207
                      },
                      {
                          "des": "提供通信网络服务的供应商",
                          "level": 2,
                          "children": [
                              {
                                  "des": "有规律，顺口或多重复排列，组合循环的手机号码，或含特殊意义的吉祥号码的售卖",
                                  "level": 3,
                                  "children": [],
                                  "name": "号卡（靓号）",
                                  "count": 70287380,
                                  "id": 120901
                              },
                              {
                                  "des": "普通手机号的售卖",
                                  "level": 3,
                                  "children": [],
                                  "name": "号卡（非靓号）",
                                  "count": 51843215,
                                  "id": 120902
                              },
                              {
                                  "des": "一种手机上网的服务，在原来流量套餐基础之上，解决用户上网流量不足的困扰",
                                  "level": 3,
                                  "children": [],
                                  "name": "流量包",
                                  "count": 107147171,
                                  "id": 120903
                              },
                              {
                                  "des": "由被叫客户为呼叫自己移动电话的其他主叫客户设定特殊音效（音乐、歌曲、故事情节、人物对话）的回铃音的业务。",
                                  "level": 3,
                                  "children": [],
                                  "name": "彩铃",
                                  "count": 20008133,
                                  "id": 120904
                              }
                          ],
                          "name": "运营商",
                          "count": 115502554,
                          "id": 1209
                      }
                  ],
                  "name": "手机电脑数码",
                  "count": 249793257,
                  "id": 12
              },
              {
                  "des": "包括彩妆、护肤、个人护理等产品",
                  "level": 1,
                  "children": [
                      {
                          "des": "保护面部皮肤及修复皮肤的产品，包括面膜、眼霜、防晒爽、男士洁面、乳液面霜、精华、化妆水、卸妆、润唇膏、祛痘膏等",
                          "level": 2,
                          "children": [],
                          "name": "护肤品",
                          "count": 225912161,
                          "id": 1301
                      },
                      {
                          "des": "主要指用于脸部、眼部、唇部的美容化妆品，包括粉底、隔离、蜜粉、口红、眼影、胭脂、睫毛膏、眉粉、修容等多种类型的产品",
                          "level": 2,
                          "children": [],
                          "name": "彩妆品",
                          "count": 149261033,
                          "id": 1302
                      },
                      {
                          "des": "主要喷洒于衣襟、手帕及发际等部位，散发怡人的香气",
                          "level": 2,
                          "children": [],
                          "name": "香水",
                          "count": 13100010,
                          "id": 1303
                      },
                      {
                          "des": "包括美发或保护头发的各类产品及服务，包括 洗发水、护发等",
                          "level": 2,
                          "children": [],
                          "name": "美发护发",
                          "count": 358158610,
                          "id": 1304
                      },
                      {
                          "des": "个人清洁和护理用品，包括身体、口腔清洁用品和女性护理用品等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "包含沐浴液，润肤乳，香氛，手足护理，纤体塑形，美胸等产品和相关工具",
                                  "level": 3,
                                  "children": [],
                                  "name": "身体护理",
                                  "count": 49798689,
                                  "id": 130503
                              },
                              {
                                  "des": "包含牙膏/牙粉，牙刷/牙线，漱口水等产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "口腔护理",
                                  "count": 57026425,
                                  "id": 130504
                              },
                              {
                                  "des": "指甲护理/装饰，甲艺设计、美甲工具等相关产品",
                                  "level": 3,
                                  "children": [],
                                  "name": "美甲",
                                  "count": 876743,
                                  "id": 130505
                              },
                              {
                                  "des": "用于擦拭的卫生纸 、湿巾、吸油纸、厨房纸巾等",
                                  "level": 3,
                                  "children": [],
                                  "name": "纸品湿巾",
                                  "count": 37530297,
                                  "id": 130506
                              },
                              {
                                  "des": "其他类型的个人护理用品",
                                  "level": 3,
                                  "children": [],
                                  "name": "个人护理其他",
                                  "count": 28546185,
                                  "id": 130507
                              }
                          ],
                          "name": "个人护理",
                          "count": 121638871,
                          "id": 1305
                      },
                      {
                          "des": "通过非运动方式达到减肥瘦身的服务",
                          "level": 2,
                          "children": [],
                          "name": "减肥瘦身",
                          "count": 78618979,
                          "id": 1306
                      },
                      {
                          "des": "运用手术、医疗器械、药物以及其他医学技术方法对人的容貌和人体各部位形态进行的修复与再塑，包括面部、口腔等",
                          "level": 2,
                          "children": [],
                          "name": "美容整形",
                          "count": 136733235,
                          "id": 1307
                      }
                  ],
                  "name": "美妆个护",
                  "count": 420073494,
                  "id": 13
              },
              {
                  "des": "体育运动及其衍生的装备和服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "各类室内外球类运动，包括篮球、足球、羽毛球、乒乓球、网球、排球、保龄球、橄榄球、棒球、高尔夫、桌球等",
                          "level": 2,
                          "children": [],
                          "name": "球类运动",
                          "count": 333628037,
                          "id": 1401
                      },
                      {
                          "des": "通过做一系列肢体动作达到强身健体的运动",
                          "level": 2,
                          "children": [],
                          "name": "瑜伽健美操",
                          "count": 285841923,
                          "id": 1403
                      },
                      {
                          "des": "针对健身目标提供的定制化项目、课程或计划。游泳，健身等",
                          "level": 2,
                          "children": [],
                          "name": "健身产品与服务",
                          "count": 204029357,
                          "id": 1408
                      },
                      {
                          "des": "其他类型的体育运动",
                          "level": 2,
                          "children": [],
                          "name": "体育运动其他",
                          "count": 309380806,
                          "id": 1409
                      }
                  ],
                  "name": "体育运动",
                  "count": 464237800,
                  "id": 14
              },
              {
                  "des": "家庭生活中使用的各种电器",
                  "level": 1,
                  "children": [
                      {
                          "des": "吹风机、剃须刀、按摩椅、卷发器等用于个护健康的电器",
                          "level": 2,
                          "children": [],
                          "name": "个护电器",
                          "count": 56685654,
                          "id": 1501
                      },
                      {
                          "des": "适用于厨房卫生间的家用电器",
                          "level": 2,
                          "children": [
                              {
                                  "des": "电饭煲、微波炉、榨汁机等",
                                  "level": 3,
                                  "children": [],
                                  "name": "厨房小电",
                                  "count": 118416095,
                                  "id": 150201
                              },
                              {
                                  "des": "按对水的使用要求对水质进行深度过滤、净化处理的水处理设备",
                                  "level": 3,
                                  "children": [],
                                  "name": "净水饮水",
                                  "count": 9576842,
                                  "id": 150203
                              }
                          ],
                          "name": "厨卫家电",
                          "count": 120688143,
                          "id": 1502
                      },
                      {
                          "des": "吸尘器、熨斗、换气扇、空气净化器、电扇、取暖器、家用小电器等家用电器",
                          "level": 2,
                          "children": [],
                          "name": "生活家电",
                          "count": 113568146,
                          "id": 1504
                      },
                      {
                          "des": "其他种类的家用电器",
                          "level": 2,
                          "children": [],
                          "name": "家用电器其他",
                          "count": 0,
                          "id": 1505
                      }
                  ],
                  "name": "家用电器",
                  "count": 190407844,
                  "id": 15
              },
              {
                  "des": "包括餐饮用具、清洁收纳、居家日用等",
                  "level": 1,
                  "children": [
                      {
                          "des": "如雨具、驱虫用品、剪刀等",
                          "level": 2,
                          "children": [],
                          "name": "居家日用",
                          "count": 181487309,
                          "id": 1601
                      },
                      {
                          "des": "用于收纳和整理的收纳盒、收纳袋、防尘用具、旅行收纳、置物架、阳台晾晒等",
                          "level": 2,
                          "children": [],
                          "name": "家居收纳",
                          "count": 66653500,
                          "id": 1602
                      },
                      {
                          "des": "直接与食物接触，用于制作 、承装食材的器皿或工具；包括锅具、厨房小工具、水杯、保鲜器皿、碗筷餐具、品质茶具、酒杯、刀具、烹饪厨具、烘焙器具等",
                          "level": 2,
                          "children": [],
                          "name": "厨具杯具",
                          "count": 118850326,
                          "id": 1603
                      },
                      {
                          "des": "用于居家环境的清洁用品，包括洗手液、洗衣液、玻璃水、拖把、垃圾整理等清洁用品和清洁工具",
                          "level": 2,
                          "children": [],
                          "name": "洗护清洁",
                          "count": 157314671,
                          "id": 1604
                      },
                      {
                          "des": "笔记本、文具收纳、台历挂历、钢笔、装订用品、财会用品、书法画材、笔袋等",
                          "level": 2,
                          "children": [],
                          "name": "文具",
                          "count": 19523423,
                          "id": 1605
                      },
                      {
                          "des": "包含玩具类、手办、小礼品等",
                          "level": 2,
                          "children": [],
                          "name": "礼品玩具",
                          "count": 268077525,
                          "id": 1606
                      }
                  ],
                  "name": "日用百货",
                  "count": 353839314,
                  "id": 16
              },
              {
                  "des": "包括纸质书籍期刊、网络小说、漫画、邮币等",
                  "level": 1,
                  "children": [
                      {
                          "des": "包括纸质/电子 的图书与杂志报刊（网络小说单独标注）",
                          "level": 2,
                          "children": [],
                          "name": "图书期刊",
                          "count": 57144292,
                          "id": 1701
                      },
                      {
                          "des": "按题材来划分网络小说的类型",
                          "level": 2,
                          "children": [
                              {
                                  "des": "以东方神系和世界观为架空背景，有修炼升级体系设定，强者为尊的幻想小说",
                                  "level": 3,
                                  "children": [],
                                  "name": "玄幻",
                                  "count": 54403879,
                                  "id": 170201
                              },
                              {
                                  "des": "基于历史背景，描绘习武之人的江湖恩怨、爱恨情仇的小说，武功招式强调真实性",
                                  "level": 3,
                                  "children": [],
                                  "name": "武侠",
                                  "count": 2808404,
                                  "id": 170203
                              },
                              {
                                  "des": "以战争/军事为主题的小说，主角是兵王，战胜敌人，赢得女神",
                                  "level": 3,
                                  "children": [],
                                  "name": "军事",
                                  "count": 6610529,
                                  "id": 170204
                              },
                              {
                                  "des": "以游戏、电竞为主题的小说",
                                  "level": 3,
                                  "children": [],
                                  "name": "游戏小说",
                                  "count": 12082447,
                                  "id": 170205
                              },
                              {
                                  "des": "以动漫为背景的小说",
                                  "level": 3,
                                  "children": [],
                                  "name": "动漫/同人",
                                  "count": 2465177,
                                  "id": 170206
                              },
                              {
                                  "des": "以某段历史时期为背景，描绘该时期人物时间和生活面貌",
                                  "level": 3,
                                  "children": [],
                                  "name": "历史",
                                  "count": 4067912,
                                  "id": 170207
                              },
                              {
                                  "des": "古代生活背景下，男女主角间的爱情故事",
                                  "level": 3,
                                  "children": [],
                                  "name": "古代言情",
                                  "count": 40618075,
                                  "id": 170208
                              },
                              {
                                  "des": "现代都市背景下，男女主角间的爱情故事",
                                  "level": 3,
                                  "children": [],
                                  "name": "现代言情",
                                  "count": 91933247,
                                  "id": 170209
                              },
                              {
                                  "des": "玄幻/仙侠背景下，男女主角之间的爱情故事",
                                  "level": 3,
                                  "children": [],
                                  "name": "幻想言情",
                                  "count": 18651050,
                                  "id": 170210
                              },
                              {
                                  "des": "以都市或社会生活为背景，描写人物奋斗、生活和情感，包括商战、职场、现代江湖等题材",
                                  "level": 3,
                                  "children": [],
                                  "name": "都市生活",
                                  "count": 148289182,
                                  "id": 170211
                              },
                              {
                                  "des": "主线是悬疑、推理、探险的小说",
                                  "level": 3,
                                  "children": [],
                                  "name": "悬疑",
                                  "count": 4848930,
                                  "id": 170212
                              },
                              {
                                  "des": "以神鬼故事为题材，渲染恐怖灵异氛围",
                                  "level": 3,
                                  "children": [],
                                  "name": "灵异",
                                  "count": 44898348,
                                  "id": 170215
                              },
                              {
                                  "des": "主角生活在现代，但与六界相通，修炼神功打败对手。可理解为“都市生活”和“玄幻”的交集",
                                  "level": 3,
                                  "children": [],
                                  "name": "现代修真",
                                  "count": 69524358,
                                  "id": 170217
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "网络小说题材其他",
                                  "count": 41357969,
                                  "id": 170219
                              }
                          ],
                          "name": "网络小说（按题材）",
                          "count": 370312892,
                          "id": 1702
                      },
                      {
                          "des": "按题材来划分网络小说的类型",
                          "level": 2,
                          "children": [
                              {
                                  "des": "废柴成长为大佬，打肿敌人的脸；大佬装成废柴，打败嚣张对手",
                                  "level": 3,
                                  "children": [],
                                  "name": "逆袭开挂",
                                  "count": 119318268,
                                  "id": 170701
                              },
                              {
                                  "des": "主角在挑战、磨难中一步步走上人生赢家的道路或重返巅峰",
                                  "level": 3,
                                  "children": [],
                                  "name": "升级打怪",
                                  "count": 23539478,
                                  "id": 170702
                              },
                              {
                                  "des": "主角探究阴阳五行、寻龙摸金、奇门八卦、占卜天机、古董古玩等",
                                  "level": 3,
                                  "children": [],
                                  "name": "风水鉴宝",
                                  "count": 16274483,
                                  "id": 170703
                              },
                              {
                                  "des": "主角逐鹿天下，征服世界",
                                  "level": 3,
                                  "children": [],
                                  "name": "争霸天下",
                                  "count": 2782215,
                                  "id": 170704
                              },
                              {
                                  "des": "主角来到另一时代，以另一种身份重获新生",
                                  "level": 3,
                                  "children": [],
                                  "name": "穿越重生",
                                  "count": 64672888,
                                  "id": 170705
                              },
                              {
                                  "des": "战乱末世，主角凭一己之力力挽狂澜，拯救世界",
                                  "level": 3,
                                  "children": [],
                                  "name": "末世求生",
                                  "count": 5476643,
                                  "id": 170707
                              },
                              {
                                  "des": "女主一路披荆斩棘，走向人生巅峰",
                                  "level": 3,
                                  "children": [],
                                  "name": "女尊女强",
                                  "count": 8790078,
                                  "id": 170709
                              },
                              {
                                  "des": "主角玩转朝野，身处豪门，手撕情敌/政敌，步步为营，青云直上",
                                  "level": 3,
                                  "children": [],
                                  "name": "宫斗宅斗",
                                  "count": 5954871,
                                  "id": 170710
                              },
                              {
                                  "des": "相爱相杀、先婚后爱、日久生情，男女主历经千辛万苦，终于拨云见日",
                                  "level": 3,
                                  "children": [],
                                  "name": "虐恋",
                                  "count": 44813758,
                                  "id": 170711
                              },
                              {
                                  "des": "女主深受宠爱的甜蜜日常",
                                  "level": 3,
                                  "children": [],
                                  "name": "甜宠",
                                  "count": 47122502,
                                  "id": 170712
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "网络小说情节其他",
                                  "count": 180196096,
                                  "id": 170713
                              }
                          ],
                          "name": "网络小说（按情节）",
                          "count": 230425353,
                          "id": 1707
                      },
                      {
                          "des": "按题材来划分网络小说的类型",
                          "level": 2,
                          "children": [
                              {
                                  "des": "他是归来的最强士兵，保护最美的女人，踩最狂的敌人",
                                  "level": 3,
                                  "children": [],
                                  "name": "兵王",
                                  "count": 56103443,
                                  "id": 170801
                              },
                              {
                                  "des": "天将万亿资产，一夜暴富，享受人生",
                                  "level": 3,
                                  "children": [],
                                  "name": "神豪",
                                  "count": 5326278,
                                  "id": 170802
                              },
                              {
                                  "des": "上门女婿凭自己努力翻身崛起",
                                  "level": 3,
                                  "children": [],
                                  "name": "女婿",
                                  "count": 92048895,
                                  "id": 170803
                              },
                              {
                                  "des": "乱世之中努力修炼，踏上武道巅峰",
                                  "level": 3,
                                  "children": [],
                                  "name": "武神",
                                  "count": 45164007,
                                  "id": 170804
                              },
                              {
                                  "des": "主角是最强杀手，布下陷阱血战对手",
                                  "level": 3,
                                  "children": [],
                                  "name": "杀手",
                                  "count": 22062807,
                                  "id": 170805
                              },
                              {
                                  "des": "主角妙手回春，拯救众生",
                                  "level": 3,
                                  "children": [],
                                  "name": "神医",
                                  "count": 97034368,
                                  "id": 170807
                              },
                              {
                                  "des": "主角身手全能，为萌宝保驾护航，赢得孩子宠爱",
                                  "level": 3,
                                  "children": [],
                                  "name": "全能奶爸",
                                  "count": 12829506,
                                  "id": 170808
                              },
                              {
                                  "des": "霸道总裁爱上女主",
                                  "level": 3,
                                  "children": [],
                                  "name": "霸道总裁",
                                  "count": 66254347,
                                  "id": 170809
                              },
                              {
                                  "des": "女主嫁给皇上/王爷，余生受宠爱",
                                  "level": 3,
                                  "children": [],
                                  "name": "皇后王妃",
                                  "count": 37507414,
                                  "id": 170810
                              },
                              {
                                  "des": "主角是明星，闯荡娱乐圈",
                                  "level": 3,
                                  "children": [],
                                  "name": "明星",
                                  "count": 1209941,
                                  "id": 170812
                              },
                              {
                                  "des": "豪门中的狠角色，斗倒正宫爬上人生巅峰",
                                  "level": 3,
                                  "children": [],
                                  "name": "嫡女庶女",
                                  "count": 9620486,
                                  "id": 170813
                              },
                              {
                                  "des": "",
                                  "level": 3,
                                  "children": [],
                                  "name": "网络小说角色其他",
                                  "count": 167093321,
                                  "id": 170814
                              }
                          ],
                          "name": "网络小说（按角色）",
                          "count": 231649688,
                          "id": 1708
                      },
                      {
                          "des": "是用简单而夸张的手法来描绘生活或时事的图画",
                          "level": 2,
                          "children": [],
                          "name": "漫画",
                          "count": 32817017,
                          "id": 1703
                      },
                      {
                          "des": "出于兴趣爱好或升值目的收集的邮票、钱币、文玩、古董等",
                          "level": 2,
                          "children": [
                              {
                                  "des": "古代遗存下来的文化遗存物质，包括传世品和地下出土品",
                                  "level": 3,
                                  "children": [],
                                  "name": "文玩古董",
                                  "count": 81418445,
                                  "id": 170401
                              }
                          ],
                          "name": "邮币/文玩古董",
                          "count": 81418445,
                          "id": 1704
                      }
                  ],
                  "name": "文娱图书",
                  "count": 426574464,
                  "id": 17
              },
              {
                  "des": "为人们身体健康提供的服务和产品",
                  "level": 1,
                  "children": [
                      {
                          "des": "有益健康的产品和活动",
                          "level": 2,
                          "children": [],
                          "name": "营养保健",
                          "count": 2094223,
                          "id": 1804
                      },
                      {
                          "des": "指直接或者间接用于人体， 医疗用途的仪器、设备、器具等",
                          "level": 2,
                          "children": [],
                          "name": "医疗器械",
                          "count": 1434647,
                          "id": 1805
                      },
                      {
                          "des": "",
                          "level": 2,
                          "children": [],
                          "name": "医用保健其他",
                          "count": 8859194,
                          "id": 1806
                      }
                  ],
                  "name": "医用保健",
                  "count": 11333104,
                  "id": 18
              },
              {
                  "des": "围绕从常住地前往外地短期停留游览提供的各种服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "以境内城市（不含港澳台）为目的地的旅游",
                          "level": 2,
                          "children": [],
                          "name": "国内游",
                          "count": 5335110,
                          "id": 1904
                      },
                      {
                          "des": "为游客提供住宿服务及相关的生活服务设施的商业机构",
                          "level": 2,
                          "children": [
                              {
                                  "des": "以大众旅行者和中小商务者为主要服务对象，以客房为唯一或核心产品，价格亲民，服务标准，环境舒适，硬件上乘，性价比高的酒店业态。包括一二星级酒店，连锁快捷酒店等。",
                                  "level": 3,
                                  "children": [],
                                  "name": "经济酒店",
                                  "count": 7187096,
                                  "id": 190203
                              }
                          ],
                          "name": "酒店住宿",
                          "count": 9056977,
                          "id": 1902
                      },
                      {
                          "des": "出行时各种交通工具的购票服务",
                          "level": 2,
                          "children": [],
                          "name": "交通票务",
                          "count": 3294403,
                          "id": 1903
                      },
                      {
                          "des": "以某种特定方式进行旅游，从游客的不同身份、切身需求、独特体验、消费心理出发，为其量身订制旅游线路。比如心灵、朝圣、亲子、游艇、自驾车、徒步、摄影、漂流、美食、滑雪主题旅游。",
                          "level": 2,
                          "children": [
                              {
                                  "des": "以温泉疗养为主要目的的旅行，目的地为带有温泉服务的休闲中心、生活馆等",
                                  "level": 3,
                                  "children": [],
                                  "name": "温泉度假",
                                  "count": 241879,
                                  "id": 190606
                              },
                              {
                                  "des": "以海滩、水上公园为目的地的旅行",
                                  "level": 3,
                                  "children": [],
                                  "name": "海滨休闲",
                                  "count": 1091124,
                                  "id": 190608
                              }
                          ],
                          "name": "主题游",
                          "count": 1571479,
                          "id": 1906
                      }
                  ],
                  "name": "旅游",
                  "count": 25780663,
                  "id": 19
              },
              {
                  "des": "为孕产妇、胎儿与婴儿的需求而准备的商品与服务",
                  "level": 1,
                  "children": [
                      {
                          "des": "适合儿童使用的电动玩具、模型玩具、毛绒布艺、动漫玩偶等产品",
                          "level": 2,
                          "children": [],
                          "name": "儿童玩具",
                          "count": 57633152,
                          "id": 2102
                      }
                  ],
                  "name": "孕产育儿",
                  "count": 67472791,
                  "id": 21
              }
          ]
      }
  }
}