<!-- ---
html:
  embed_local_images: false
  embed_svg: true
  offline: false
  toc: true

print_background: false
--- -->


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [所有api的格式要求](#所有api的格式要求)
* [启动页](#启动页)
	* [获取所有的联赛和相关球队](#获取所有的联赛和相关球队)
	* [获取已经订阅的联赛](#获取已经订阅的联赛)
	* [订阅联赛](#订阅联赛)
	* [获取某联赛所有球队列表](#获取某联赛所有球队列表)
	* [获取订阅的球队](#获取订阅的球队)
	* [订阅联赛中的球队](#订阅联赛中的球队)
* [首页-公共接口](#首页-公共接口)
	* [新闻列表](#新闻列表)
	* [新闻详情页](#新闻详情页)
	* [评论](#评论)
* [首页-推荐](#首页-推荐)
	* [获取头部图片swiper](#获取头部图片swiper)
	* [获取比赛卡片swiper](#获取比赛卡片swiper)
	* [获取今日热门比赛场数](#获取今日热门比赛场数)
	* [直播预告区](#直播预告区)
* [集锦](#集锦)
	* [获取集锦视频列表](#获取集锦视频列表)
	* [获取集锦视频评论列表](#获取集锦视频评论列表)
* [首页-二级标题](#首页-二级标题)
	* [header swiper图片展示栏](#header-swiper图片展示栏)
* [赛程](#赛程)
	* [热门赛程](#热门赛程)
	* [获取一个月的赛程](#获取一个月的赛程)
	* [获取某一联赛的比赛赛程](#获取某一联赛的比赛赛程)
	* [获取NBA季后赛对阵](#获取nba季后赛对阵)
	* [获得NBA队伍排行榜](#获得nba队伍排行榜)
	* [获取NBA球员排行榜](#获取nba球员排行榜)
* [直播](#直播)
	* [获取直播比赛的信息](#获取直播比赛的信息)
	* [直播室(websocket)](#直播室websocket)
	* [聊天室(websocket)](#聊天室websocket)
	* [资讯](#资讯)
	* [赛况](#赛况)
	* [数据](#数据)
	* [竞猜项列表](#竞猜项列表)
	* [竞猜投注](#竞猜投注)
	* [回顾](#回顾)
	* [热议](#热议)
* [我的](#我的)
	* [登出](#登出)
	* [个人信息](#个人信息)
	* [修改个人信息](#修改个人信息)
	* [获取最新版本](#获取最新版本)
	* [获取缓存大小](#获取缓存大小)
	* [删除缓存](#删除缓存)
	* [建议优化](#建议优化)

<!-- /code_chunk_output -->


## 所有api的格式要求

```js
    每个接口必须要传的参数：
    token（带时间戳和特定算法算出来的code拿，token有失效时间，调api若token失效报"msg":"expired token"）

    每个接口必须带的两个参数：
    状态：status {Boolean} <true or false>
    信息：msg {String}

    最好每个接口中的每项数据都带上id，如果我部分接口中没有写上但是数据库中存在的，也请带上。默认key为id。id默认返回String，不返回Number。
    
    若某属性的值不存在且没有默认值时，返回null，不要返回'', 0, [], {};比如，新闻时间戳没有，不要返回0,应该返回null，因为0代表1970年1月1号。
    如果值不存在，但有默认值，则返回默认值，比如: "", [], {}, 0;
    区别就是要注意返回默认值的时候是否在判断会出现错误；
    返回时间的时候，一律返回时间戳，以s为单位的;

    接口注释中，<代表接口可能的参数>。
    接口路径中，(:id)代表参数，比如/home/:id,意思是/home/我传给你的id。
```

---

## 启动页

### 获取所有的联赛和相关球队

```js
    /**
     * @api {get}  subPage/leagueList
     * 
     * @return league_type  联赛类型 <basketball soccer>
     * @return avatar_img 头像链接
     */

    return {
        "status": true,
        "msg": "获取联赛列表成功!",
        "data": [
            {
                "league_id": 11,
                "league_name": "NBA"
                "league_type": "basketball",
                "avatar_img": "url",
                "team_list": [
                    {
                        "team_id": 11,
                        "team_name": "勇士"
                        "team_of_league": "NBA",
                        "avatar_img": "url"
                    }
                ]
            }
        ]
    }
```


### 获取已经订阅的联赛

```js
    /**
     * @api {get}  subPage/league
     */

    return {
        "status": true,
        "msg": "获取订阅联赛列表成功!",
        "data": [
            {
                "league_id": 11,
                "league_name": "NBA"
                "league_type": "basketball"
            }
        ]
    }
```

### 订阅联赛

```js
    /**
     * @api {post}  subPage/league
     * @params {Array}  subList  订阅列表,会给后台传联赛的id
     */

    return {
      "status": true,
      "msg": "订阅联赛成功!"
    }
```

### 获取某联赛所有球队列表

```js
    /**
     * 这个接口可不提供
     * @api {get}  subPage/teamList
     * @params {String} league  联赛名称
     * 
     * @return team_of_league  球队所属联赛
     */

    return {
        "status": true,
        "msg": "获取球队列表成功!",
        "data": [
            {
                "team_id": 11,
                "team_name": "勇士"
                "team_of_league": "NBA"
            }
        ]
    }
```

### 获取订阅的球队

```js
    /**
     * @api {get}  subPage/team
     * @params {String} league 联赛名称
     */

    return {
        "status": true,
        "msg": "获取订阅球队列表成功!",
        "data": [
            {
                "team_id": 11,
                "team_name": "勇士"
                "team_of_league": "NBA"
            }
        ]
    }

```


### 订阅联赛中的球队

```js
    /**
     * @api {post}  subPage/team
     * @params {String} league  联赛名称
     * @params {Array}  subList  订阅列表，会给后台传球队的id
     */

    return {
        "status": true,
        "msg": "订阅球队成功!"
    }
```

---

## 首页-公共接口

### 新闻列表

```js
    /**
     * @api {get}  home/newsList
     * @params {String} type_id   类目的id
     * @params {Number} page_index	 
     *
     * @return title  新闻标题
     * @return create_time  新闻发布时间
     * @return source   新闻来源
     * @return league   联赛类别
     * @return type   新闻所属类别(指的是我们应用的类别)
     * @return update_count  更新条数
     */

    return {
    "status": true,
    "msg": "...",
    "data": {
        "news_list": [{
                "news_id": 11,
                "title": "五大关键词解读",
                "img_list": ["url", "url"],
                "img_count": 4,
                "create_time": 1122122,
                "source": "腾讯",
                "league": "NBA",
                "type": "推荐"
            },
            {
                "news_id": 12,
                "title": "五大关键词解读",
                "img_list": ["url", "url"],
                "img_count": 5,
                "create_time": 1122122,
                "source": "腾讯",
                "league": "西甲",
                "type": "推荐"
            }
        ],
        "update_count": 8
    }
}
```   


### 新闻详情页

```js
    /**
     * @api {get}  home/news
     * @params {String} news_id   新闻的id
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "news_id": 11,
            "title": "萌神",
            "source": "Mavis",
            "create_time": 121212,
            "img_list": ["url"],
            "content": "北京时间"
        }
    }
```   

### 评论

```js
    /**
     * @api {post}  home/comment
     * @params {String} news_id  新闻或视频id
     * @params {String} type  类别  <news highlights>
     * @params {Boolean}  is_answer  是否是回复别人的消息，是否@  没有传""
     * @params {String} answer_user_name  回复的用户名字   没有传""
     * 
     */

    return {
        "status": true,
        "msg": "..."
    }
```

---

## 首页-推荐

### 获取头部焦点图片list

```js
    /**
     * @api {get}  home/recommend/focusList
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "imgUrl": "url",
                "title": "玫瑰将再次绽放....."
            }
        ]
    }
```   

### 获取比赛卡片swiper

```js
    /**
     * @api {get}  home/recommend/gameCard
     * 
	 * @return hometean  主场队名                         
	 * @return awayteam 客场队名
     * @return home_score  主场得分
     * @return away_score  客场得分
     */

    return {
      "status": true,
      "msg": "...",
      "data": [        
          {            
            "game_card_id": 1,
            "type": "NBA夏季联赛",
            "hometeam": "勇士",
            "awayteam": "骑士",
            "hometeam_img": "url",
            "awayteam_img": "url",
            "league": "NBA",
            "home_score": 99,
            "away_score": 101
          }
      ]
    }
```   

### 获取今日热门比赛场数

```js
    /**
     * @api {get}  home/recommend/hotGameCount
     */

    return {
        "status": true,
        "msg": "...",
        "data": 1
    }
```   

### 直播预告区

```js
    /**
     * @api {get}  home/recommend/liveTrail
     * 
     * @params {String} date  日期  <2018-7-23> *获取当天直播数据不需要传date
     * 
     * @return league   直播类型  <NBA ...  program>  如有别的类型再进行添加
     *         league不为program的时候主客场名字和img要返回值，多余的字段传""
     *         league为program的时候programName要返回值，多余的字段传""
     * @return sourse   直播的来源
     * @return program_name   节目名字
     * @return is_trail   是否预约
     * @return status    比赛状态  <已开始  未开始  已结束>
     * @return start_time  比赛开始时间
     * @return highlights_url   集锦链接
     * @return end_description_word  比赛结束后链接描述词  <集锦 详情 回放>
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "trail_id": 111,
                "league": "NBA",
                "sourse": "NBA夏季联赛",
                "hometeam": "勇士",
                "awayteam": "骑士",
                "hometeam_img": "url",
                "awayteam_img": "url",
                "program_name": "天下足球",
                "is_trail": true,
                "status": "已结束",
                "start_time": 11221122,
                "highlights_url": "url",
                "home_score": 99,
                "away_score": 101,
                "end_description_word": "集锦", 
            }
        ]
    }
```  
---

## 集锦


### 获取集锦视频列表

```js
    /**
     * 接口待定，优酷视频接口和UI出入较大
     * 
     * @api {get}  home/highLights/list
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "highlights_id": 11,
                "url": "url"
            }
        ]
    }
```   
### 获取集锦视频详情

```js
    /**
     * @api {get}  home/highLights/list/:id
     * 
     * 
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "highlights_id": 11,
                "url": "url"
            }
        ]
    }
```   

### 获取集锦视频评论列表

```js
    /**
     * 默认每次返回20条
     * @api {get}  home/highLights/comment
     * 
     * @params {String} id    视频id
     * @params {Number}  page_index  页码
     * 
     * @return total_page  总页数
     * @return create_time  评论创建时间
     * @return vote_count    赞同数
     * @return author/user_type    用户类别，等级
     * @return author/gender   用户性别  <male female>
     * @return commentlist/thread_id    该条评论的父级评论id
     *         commentlist/thread_id等于comment_id
     * @return commentlist/is_answer  是否是回复别人的消息，是否@
     * @return commentlist/answer_user_name   回复的用户名字
     * @return isExpand  评论是否展开，默认都传false
     * @return isVote 是否点赞了
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "total_page": 10,
            "list": {
                "comment_id": 1212,
                "author": {
                    "user_id": 1212,
                    "user_type": "normal",
                    "user_name": "Mavis",
                    "avatar_url": "url",
                    "gender": "male"
                },
                "content": "快快乐乐",
                "commentlist_count": 12,
                "commentlist": [
                    {
                        "comment_id": 1212,
                        "user_id": 111,
                        "thread_id": 1212,
                        "user_name": "MAVIS",
                        "content": "你好",
                        "create_time": 121212,
                        "is_answer": true,
                        "answer_user_name": "HIHI"
                    }
                ],
                "isExpand": false,
                "create_time": 121212,
                "vote_count": 222,
                "isVote": true
            }
        }
    }
```  

---

## 首页-二级标题

### header swiper图片展示栏

```js
    /**
     * @api {get}  home/otherType/header
     * @params {String}  type_id  类目的id
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "news_id": 11,
                "title": "五大关键词解读",
                "img_list": "url",
                "create_time": 1122122,
                "source": "腾讯",
                "type": "NBA"
            }
        ]
    }
```
---

## 赛程

### 热门赛程

```js
    /**
     * 沟通，预计返回一周的数据,倒序排列
     * @api {get}  schedule/popular
     * 
     * @return details_url   如果比赛结束了，返回集锦或者回放的url，不然返回''
     * @return home_score away_score  如果比赛结束了，则返回比赛比分,不然返回''
     * @return media  直播平台
     * @return live_type  直播类型 <文字直播  视频直播>
     * @return end_description_word  比赛结束后链接描述词  <集锦 详情 回看>
     * @return is_trail  是否预约
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "2018-07-23": [
                {   
                    "match_id": 11,
                    "hometeam": "热火",
                    "awayteam": "老鹰",
                    "start_time": 1211212,
                    "source": "NBA夏季联赛",
                    "media": "CCTV5",
                    "status": "已结束",
                    "details_url": "url",
                    "home_score": 99,
                    "away_score": 101, 
                    "live_type": "文字直播",
                    "end_description_word": "集锦",
                    "league": "NBA",
                    "is_trail": true
                }
            ]
        }
    }
```

### 获取一个月的赛程

```js
    /**
     * @api {get}  schedule/monthList
     * @params {Number}  year  选取的年 
     * @params {Number}  month  选取的月
     * 
     * @return match_count   当日所有的比赛
     * @return match_list/status   比赛状态
     * @return program  节目名称
     * @return details_url   如果比赛结束了，返回集锦或者回放的url
     * @return end_description_word  比赛结束后链接描述词  <集锦 详情 回看>
     * @return is_trail  是否预约
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "2018-08-01": {
                "match_count": 4,
                
                "match_list": [
                    {
                        "match_id": 1,
                        "hometeam": "热火",
                        "awayteam": "老鹰",
                        "start_time": 1211212,
                        "score": "100:99",
                        "program": "篮球公园",
                        "source": "篮球公园第88期",
                        "status": "已结束",
                        "details_url": "url",
                        "end_description_word": "集锦",
                        "league": "NBA",
                        "is_trail": true
                    }
                ]
            }
        }
    }
```

### 获取某一联赛的比赛赛程

```js
    /**
     * @api {get}  schedule/list/:league_id
     * 
     * @params start_time  {String}  开始时间 
     * @params end_time  {String}  结束时间
     * 
     * @return last_match_time  如果往前搜索比赛记录但是没有搜索到的时候，后台在这个参数中返回上一场最近的比赛的时间，好让我们重新根据时间来获取比赛列表，如果有比赛则返回""
     * @return match_count   当日所有的比赛
     * @return match_list/status   比赛状态
     * @return details_url   如果比赛结束了，返回集锦或者回放的url
     * @return end_description_word  比赛结束后链接描述词  <集锦 详情 回看>
     * @return is_trail  是否预约
     */

    return {
        "status": true,
        "msg": "...",
        "last_match_time": 121212,
        "data": [
            "2018-7-23": {
                "match_count": 4,
                "match_list": [
                    "hometeam": "热火",
                    "awayteam": "老鹰",
                    "start_time": 1211212,
                    "home_score": 99,
                    "away_score": 101, 
                    "source": "NBA季后赛",
                    "status": "已结束",
                    "details_url": "url",
                    "league": "NBA",
                    "is_trail": true
                ]
            }
        ]
    }
```

### 获取NBA季后赛对阵

```js
    /**
     * @api {get}  schedule/playoff/:league_id
     * 
     * @params  {Number}  year  年份
     * 
     * @return description  每一轮对决的轮次描述
     * @return matches  对决的比赛详情
     * @return team_one  队伍一
     * @return team_two  队伍二
     * @return team_one_rank   队伍一在该分区的排名
     * @return team_one_score  队伍一获胜的比赛场次
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
        "Round_1": {
            "description": "季后赛首轮",
            "east": [
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "勇士",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "朦胧",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "猛龙",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "马刺",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                }
            ],
            "west": [
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "勇士",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "哈哈",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "嘻嘻",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "啦拉",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                }
            ]
        },
        "Round_2": {
            "description": "季后赛次轮",
            "east": [
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "勇士",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "哼嗯",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                }
            ],
            "west": [
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "勇士",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "嗯哼",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                }
            ]
        },
        "Semi_final": {
            "description": "半决赛",
            "east": {
                "matches": [
                    {
                        "match_id": 11,
                        "status": "已结束",
                        "hometeam": "勇士",
                        "awayteam": "骑士",
                        "home_score": 99,
                        "away_score": 101
                    }
                ],
                "team_one": "勇士",
                "team_two": "骑士",
                "team_one_rank": "W1",
                "team_two_rank": "E1",
                "team_one_score": 4,
                "team_two_score": 2
            },
            "west": {
                "matches": [
                    {
                        "match_id": 11,
                        "status": "已结束",
                        "hometeam": "勇士",
                        "awayteam": "骑士",
                        "home_score": 99,
                        "away_score": 101
                    }
                ],
                "team_one": "rua",
                "team_two": "骑士",
                "team_one_rank": "W1",
                "team_two_rank": "E1",
                "team_one_score": 4,
                "team_two_score": 2
            }
        },
        "Final": {
            "description": "总决赛",
            "matches": [
                {
                    "match_id": 11,
                    "status": "已结束",
                    "hometeam": "勇士",
                    "awayteam": "骑士",
                    "home_score": 99,
                    "away_score": 101
                }
            ],
            "team_one": "勇士",
            "team_two": "骑士",
            "team_one_rank": "W1",
            "team_two_rank": "E1",
            "team_one_score": 4,
            "team_two_score": 2
        }
    }
```

### 获得NBA队伍排行榜

```js
    /**
     * @api {get}  schedule/rank/team/:league_id
     * 
     * @params {Number} year 年份
     * 
     * @return east 东部
     * @return west 西部
     * @return rank 球队战绩排行
     * @return wins 胜场数
     * @return losses 败场数
     * @return win_percent 胜率
     * @return game_back 胜差
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "Round_1": {
                "description": "季后赛首轮",
                "east": [
                    {
                        "matches": [
                            {
                                "match_id": 11,
                                "status": "已结束",
                                "hometeam": "勇士",
                                "awayteam": "骑士",
                                "home_score": 99,
                                "away_score": 101
                            }
                        ],
                        "team_one": "勇士",
                        "team_two": "骑士",
                        "team_one_rank": "W1",
                        "team_two_rank": "E1",
                        "team_one_score": 4,
                        "team_two_score": 2
                    }
                ],
                "west": [
                    {
                        "matches": [
                            {
                                "match_id": 11,
                                "status": "已结束",
                                "hometeam": "勇士",
                                "awayteam": "骑士",
                                "home_score": 99,
                                "away_score": 101
                            }
                        ],
                        "team_one": "勇士",
                        "team_two": "骑士",
                        "team_one_rank": "W1",
                        "team_two_rank": "E1",
                        "team_one_score": 4,
                        "team_two_score": 2
                    }
                ]
            },
            "Round_2": {
                "description": "季后赛次轮",
                "east": [
                    {
                        "matches": [
                            {
                                "match_id": 11,
                                "status": "已结束",
                                "hometeam": "勇士",
                                "awayteam": "骑士",
                                "home_score": 99,
                                "away_score": 101
                            }
                        ],
                        "team_one": "勇士",
                        "team_two": "骑士",
                        "team_one_rank": "W1",
                        "team_two_rank": "E1",
                        "team_one_score": 4,
                        "team_two_score": 2
                    }
                ],
                "west": [
                    {
                        "matches": [
                            {
                                "match_id": 11,
                                "status": "已结束",
                                "hometeam": "勇士",
                                "awayteam": "骑士",
                                "home_score": 99,
                                "away_score": 101
                            }
                        ],
                        "team_one": "勇士",
                        "team_two": "骑士",
                        "team_one_rank": "W1",
                        "team_two_rank": "E1",
                        "team_one_score": 4,
                        "team_two_score": 2
                    }
                ]
            },
            "Semi_final": {
                "description": "半决赛",
                "east": {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "勇士",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                },
                "west": {
                    "matches": [
                        {
                            "match_id": 11,
                            "status": "已结束",
                            "hometeam": "勇士",
                            "awayteam": "骑士",
                            "home_score": 99,
                            "away_score": 101
                        }
                    ],
                    "team_one": "勇士",
                    "team_two": "骑士",
                    "team_one_rank": "W1",
                    "team_two_rank": "E1",
                    "team_one_score": 4,
                    "team_two_score": 2
                }
            },
            "Final": {
                "description": "总决赛",
                "matches": [
                    {
                        "match_id": 11,
                        "status": "已结束",
                        "hometeam": "勇士",
                        "awayteam": "骑士",
                        "home_score": 99,
                        "away_score": 101
                    }
                ],
                "team_one": "勇士",
                "team_two": "骑士",
                "team_one_rank": "W1",
                "team_two_rank": "E1",
                "team_one_score": 4,
                "team_two_score": 2
            }
        }           
    }
```

### 获取NBA球员排行榜

```js
    /**
     * @api {get}  schedule/rank/player/:league_id
     * 
     * @params {Number} year 年份
     * 
     * @return east 东部
     * @return west 西部
     * @return rank 球队战绩排行
     * @return wins 胜场数
     * @return losses 败场数
     * @return win_percent 胜率
     * @return game_back 胜差
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "assists_rank": [
                {
                    "name": "拉简-朗多",
                    "assists": 12,
                    "points": 20,
                    "rebounds": 12,
                    "steals": 1,
                    "blocks": 3,
                    "team": "湖人",
                    "rank": 1
                }
            ],
            "points_rank": [
                {
                    "name": "勒布朗-詹姆斯",
                    "assists": 12,
                    "points": 20,
                    "rebounds": 12,
                    "steals": 1,
                    "blocks": 3,
                    "team": "湖人",
                    "rank": 1
                }
            ],
            "rebounds_rank": [
                {
                    "name": "勒布朗-詹姆斯",
                    "assists": 12,
                    "points": 20,
                    "rebounds": 12,
                    "steals": 1,
                    "blocks": 3,
                    "team": "湖人",
                    "rank": 1
                }
            ],
            "steals_rank": [
                {
                    "name": "勒布朗-詹姆斯",
                    "assists": 12,
                    "points": 20,
                    "rebounds": 12,
                    "steals": 1,
                    "blocks": 3,
                    "team": "湖人",
                    "rank": 1
                }
            ],
            "blocks_rank": [
                {
                    "name": "勒布朗-詹姆斯",
                    "assists": 12,
                    "points": 20,
                    "rebounds": 12,
                    "steals": 1,
                    "blocks": 3,
                    "team": "湖人",
                    "rank": 1
                }
            ]
        }
    }
```

---

## 直播

### 获取直播比赛的信息

```js
    /**
     * @api {get}  live/info/:match_id
     * 
     * @params {String}  match_id
     * 
     * @return status <0:未开始 1:进行中 2:已结束>  比赛进行状态
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "status": 0,
            "hometeam": "勇士",
            "awayteam": "骑士",
            "home_score": 99,
            "away_score": 100,
            "source": "NBA总决赛第四场",
            "home_support": 70,
            "away_support": 30
        }
    }
```

### 直播室(websocket)

```js
    /**
     * websocket
     * @api {get}  live/liveRoom/:match_id
     * 
     * @params {String}  match_id
     * 
     */

    return {
        "status": true,
        "msg": "...",
        "match_status": 0,
        "online_person": 999999,
        "data": [
            {
                "user": "Mavis(直播员)",
                "content": "ssdsdsds",
                "imgList": []
            }
        ]
    }
```

### 聊天室(websocket)

```js
    /**
     * websocket
     * @api {get}  live/chatRoom/:match_id
     * 
     * @params {String}  match_id
     */

    return {
        "data": [
            {
                "user": "MAvis",
                "content": "wowowowow",
                "user_id": '111'
            }
        ]
    }
```

### 资讯

```js
    /**
     * @api {get}  live/news/:match_id
     * 
     * @params {String}  match_id
     * 
     */
    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "news_id": 11,
                "title": "五大关键词解读",
                "img_list": ["url", "url"],
                "img_count": 4,
                "create_time": 1122122,
                "source": "腾讯",
                "type": "推荐"
            }
        ]
    }
```

### 赛况

```js
    /**
     * websocket
     * @api {get}  live/matchInfo/:match_id
     * 
     * @params {String}  match_id
     */

    return {
        "data": [
            {
                "user": "来提珠(直播员)",
                "content": "本场比赛的直播就到这里，感谢您的关注！"
            }
        ]
    }
```

### 数据

```js
    /**
     * @api {get}  live/stats/:match_id
     * 
     * @params {String}  match_id
     * 
     * @return status                    比赛状态<0:未开始  1:进行中  2:已结束>
     * @return score                     总得分             
     * @return assists                   助攻数
     * @return blocks                    盖帽数
     * @return rebounds                  总篮板
     * @return defensive_rebounds        后场板
     * @return offensive_rebounds        前场板
     * @return two_point_goals           两分球进球数
     * @return two_point_attempted       两分球总出手数
     * @return field_goals               投篮进球数
     * @return field_goals_attempted     投篮总出手数
     * @return fast_break_points         快攻得分
     * @return free_throws               罚球进球数
     * @return free_throws_attempted     罚球总出手数
     * @return personal_fouls            个人犯规总和
     * @return second_chance_points      二次进攻得分
     * @return steals                    抢断
     * @return three_points_goals        三分进球数
     * @return three_points_attempted    三分总出手数
     * @return turnovers                 失误
     * 
     * @return player_stats 球员表现列表
     *         严格按照参数排列，数组中的第一项默认给headbar的内容，第2-6项为5个首发球员的数据，数据都传字符串格式。 (match_history相同)
     */
    return {
        "status": true,
        "msg": "...",
        "data": {
            "status": 0,
            "source": "NBA总冠军第四轮",
            "hometeam": "湖人",
            "awayteam": "勇士",
            "period_score": {
                "home": ['11', '22', '-', '-'],
                "away": ['22', '33', '-', '-']
            },
            "home_score": 100,
            "away_score": 90,
            "team_total": {
                "home": {
                    "score": 100,
                    "assists": 15,
                    "blocks": 4,
                    "rebounds": 40,
                    "defensive_rebounds": 40,
                    "offensive_rebounds": 20,
                    "two_point_goals": 10,
                    "two_point_attempted": 20,
                    "field_goals": 30,
                    "field_goals_attempted": 50,
                    "fast_break_points": 20,
                    "free_throws": 20,
                    "free_throws_attempted": 40,
                    "personal_fouls": 20,
                    "second_chance_points": 30,
                    "steals": 4,
                    "three_point_goals": 9,
                    "three_point_attempted": 20,
                    "turnovers" : 17
                },
                "away": {
                    "score": 100,
                    "assists": 15,
                    "blocks": 4,
                    "rebounds": 40,
                    "defensive_rebounds": 40,
                    "offensive_rebounds": 20,
                    "two_point_goals": 10,
                    "two_point_attempted": 20,
                    "field_goals": 30,
                    "field_goals_attempted": 50,
                    "fast_break_points": 20,
                    "free_throws": 20,
                    "free_throws_attempted": 40,
                    "personal_fouls": 20,
                    "second_chance_points": 30,
                    "steals": 4,
                    "three_point_goals": 9,
                    "three_point_attempted": 20,
                    "turnovers" : 17
                }
            },
            "player_stats": {
                "home": [
                    {
                        "row": ["球员", "首发", "时间", "得分", "篮板", "助攻", "投篮", "三分", "罚球", "前场板", "后场板", "抢断", "盖帽", "失误", "犯规"]
                    },
                    {
                        "player_id": '111',
                        "row": ["多西", "是", "28", "18", "7", "4", "4/13", "2/6", "8/10", "3", "4", "0", "0", "2", "0"]
                    },
                    ....
                ],
                "away": [
                    {
                        "row": ["球员", "首发", "时间", "得分", "篮板", "助攻", "投篮", "三分", "罚球", "前场板", "后场板", "抢断", "盖帽", "失误", "犯规"]
                    },
                    {
                        "player_id": '111',
                        "row": ["多西", "是", "28", "18", "7", "4", "4/13", "2/6", "8/10", "3", "4", "0", "0", "2", "0"]
                    },
                    ....
                ]
            },
            "max_players": [
                {
                    "home_player": "哈哈",
                    "home_val": 4,
                    "home_player_avatar": "url",
                    "away_player_avatar": "url",
                    "away_player": "啦啦",
                    "away_val": 4,
                    "text": "得分",
                },
                {
                    "home_player": "哈哈",
                    "home_val": 4,
                    "home_player_avatar": "url",
                    "away_player_avatar": "url",
                    "away_player": "啦啦",
                    "away_val": 4,
                    "text": "助攻",
                },
                {
                    "home_player": "哈哈",
                    "home_val": 4,
                    "home_player_avatar": "url",
                    "away_player_avatar": "url",
                    "away_player": "啦啦",
                    "away_val": 4,
                    "text": "篮板",
                }
            ],
            "match_history": [
                {
                    "row": ['日期', '赛事', '主队', '比分', '客队']
                },
                {
                    "match_id": "111",
                    "row": ['2018/06/09', 'NBA季后赛', '湖人队', '99:101', '勇士队']
                },
                ....
            ]
        }
    }
```

### 竞猜项列表
  
```js
    /**
     * @api {get}  live/quizList/:match_id
     * 
     * @params {String}  user_id
     * 
     * @return status        竞猜状态
     * @return title         竞猜题目
     * @return quiz_total    竞猜投注总额
     * @return rest_time     剩余时间 <剩余时间  待开奖  已结算>
     * @return options       竞猜选项
     * @return options/text  竞猜内容   
     * @return options/quiz_percent   竞猜投注率
     * @return options/quiz_odds    竞猜赔率
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "quiz_id": '1',
                "status": "已开盘",
                "title": "全场第一个三分苦力能不能投进",
                "quiz_total": 8320,
                "rest_time": '10:59:20',
                "options": [
                    {
                        "text_id": '1',
                        "text": "能投进",
                        "quiz_percent": 48,
                        "quiz_odds": 2.5
                    }
                ]
            }
        ]
    }
```

### 竞猜投注

```js
    /**
     * @api {post}  live/quiz/:match_id
     * 
     * @params {String}  quiz_id   投注项的id
     * @params {Number}  quiz_val  投注数量
     * @params {String}  quiz_text_id  选择的投注项的具体内容的id
     */
```

### 回顾

```js
    /**
     * @api {post}  live/review/:match_id
        */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "status": 2,
            "hometeam": "湖人',
            "awayteam": "勇士",
            "home_score": 100,
            "away_score": 99,
            "finish_time": 1212121212,
            "source": "NBA总冠军第四轮",
            "imgList": [
                {
                    "img": "/image/live/img00025.jpg",
                    "name": "欧文霸气绝杀!"
                },
                {
                    "img": "/image/live/img00031.jpg",
                    "name": "欧文霸气绝杀!"
                },
                {
                    "img": "/image/live/img00038.jpg",
                    "name": "欧文霸气绝杀!"
                }
            ],
            "newList": [
                {
                    "news_id": 11,
                    "title": "五大关键词解读",
                    "img_list": ["url", "url"],
                    "img_count": 4,
                    "create_time": 1122122,
                    "source": "腾讯",
                    "type": "推荐"
                }
            ]
        }
    }
```

### 热议

```js
    /**
     * @api {get}  home/comments/:match_id
     * 
     * 默认每次返回20条
     * @params {String} match_id    比赛id
     * @params {Number} page_index  页码
     * 
     * @return total_page  总页数
     * @return create_time  评论创建时间
     * @return vote_count    赞同数
     * @return author/user_type    用户类别，等级
     * @return author/gender   用户性别  <male female>
     * @return commentlist/thread_id    该条评论的父级评论id
     *         commentlist/thread_id等于comment_id
     * @return commentlist/is_answer  是否是回复别人的消息，是否@
     * @return commentlist/answer_user_name   回复的用户名字
     * @return isHot  是否为热评
     * @return index  楼层
     * @return isExpand  评论是否展开，默认都传false
     * @return isVote  是否点赞了
     * 
     * @return hot 只有page_index为1的时候返回
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "total_page": 10,
            "hot": [
                 {
                    "comment_id": 1212,
                    "author": {
                        "user_id": 1212,
                        "user_type": "normal",
                        "user_name": "Mavis",
                        "avatar_url": "url",
                        "gender": "male"
                    },
                    "content": "快快乐乐",
                    "commentlist_count": 12,
                    "commentlist": [
                        {
                            "comment_id": 1212,
                            "user_id": 111,
                            "thread_id": 1212,
                            "user_name": "MAVIS",
                            "content": "你好",
                            "create_time": 121212,
                            "is_answer": true,
                            "answer_user_name": "HIHI"
                        }
                    ],
                    "create_time": 121212,
                    "vote_count": 222,
                    "isHot": true,
                    "index": 1,
                    "isExpand": false,
                    "isVote": true
                }
            ],
            "list": [
                {
                    "comment_id": 1212,
                    "author": {
                        "user_id": 1212,
                        "user_type": "normal",
                        "user_name": "Mavis",
                        "avatar_url": "url",
                        "gender": "male"
                    },
                    "content": "快快乐乐",
                    "commentlist_count": 12,
                    "commentlist": [
                        {
                            "comment_id": 1212,
                            "user_id": 111,
                            "thread_id": 1212,
                            "user_name": "MAVIS",
                            "content": "你好",
                            "create_time": 121212,
                            "is_answer": true,
                            "answer_user_name": "HIHI"
                        }
                    ],
                    "create_time": 121212,
                    "vote_count": 222,
                    "isHot": true,
                    "index": 1
                }
            ]
        }
    }
```

---

## 我的

### 登出
  
```js
    /**
     * @api {post}  myself/logout
     * 
     * @params {String}  user_id
     */

    return {
        "status": true,
        "msg": "..."
    }
```

### 个人信息

```js
    /**
     * @api {get}  myself/info
     * 
     * @return user_id   账户Id
     * @return username   昵称
     * @return level   用户等级
     * @return g_money   G币
     * @return gender    性别  <male female secret>
     * @return avatar_img    头像链接
     * @return no_img  无图模式
     * @return auto_play_with_wifi  WIFI下自动播放
     * @return push_important_news  要闻通知
     * @return push_follow_team_games   关注球队比赛开始结束通知
     * @return push_follow_team_news   关注球队的重要新闻
     * @return push_mention    艾特@我的
     * @return push_reply    回复我的
     * @return push_no_border_in_night    夜间免打扰
     */

    return {
        "status": true,
        "msg": "",
        "data": {
            "user_id": 11,
            "username": "Mavis",
            "level": "体育达人",
            "g_money": 1000,
            "birth": "1999-09-01",
            "gender": "male",
            "avatar_img": "url",
            "mobile": 121212,
            "no_img": true,
            "auto_play_with_wifi": true,
            "push_important_news": true,
            "push_follow_team_games": true,
            "push_follow_team_news": true,
            "push_mention": true,
            "push_reply": true,
            "push_no_border_in_night": true
        }
    }
```

### 修改个人信息

```js
    /**
     * 前端只会传要修改的参数，如果需要传所有的参数也可以，需要提前沟通
     * 
     * @api {put}  myself/info
     * 
     * @params user_id   账户Id
     * @params username   昵称
     * @params level   用户等级
     * @params g_money   G币
     * @params gender    性别  <male female secret>
     * @params avatar_img    头像链接
     * ....同上
     */

    return {
        "status": true,
        "msg": ""
    }
```


### 获取最新版本

```js
    /**
     * @api {get}  myself/version
     * 
     * @return version  版本号
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "version": "1.0.0"
        }
    }
```

### 获取缓存大小

```js
    /**
     * 使用cordova相关api
     * @api {get}  myself/cache
     * 
     * @return cache  缓存大小
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "cache": "39.9MB"
        }
    }
```


### 删除缓存

```js
    /**
     * 使用cordova相关api
     * @api {delete}  myself/cache
     * 
     * @return cache  缓存大小
     */
```


<!-- ### 推送功能

```js
    /**
     * @api {get}  myself/push
     * 
     * @return important_news  要闻通知
     * @return follow_team_games   关注球队比赛开始结束通知
     * @return follow_team_news   关注球队的重要新闻
     * @return mention    艾特@我的
     * @return reply    回复我的
     * @return no_border_in_night    夜间免打扰
     */

    return {
        "status": true,
        "msg": "...",
        "data": {
            "important_news": true,
            "follow_team_games": true,
            "follow_team_news": true,
            "mention": true,
            "reply": true,
            "no_border_in_night": true
        }
    }
``` -->



### 建议优化

```js
    /**
     * @api {post}  myself/optimization
     * 
     * @params {String}  type  优化栏目
     * @params {String}  content  内容
     */

    return {
        "status": true,
        "msg": "...."
    }
```






