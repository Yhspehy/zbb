<!-- TOC -->

- [所有api的格式要求](#所有api的格式要求)
- [启动页](#启动页)
    - [获取所有的联赛列表](#获取所有的联赛列表)
    - [获取已经订阅的联赛](#获取已经订阅的联赛)
    - [订阅联赛](#订阅联赛)
    - [获取某联赛所有球队列表](#获取某联赛所有球队列表)
    - [获取订阅的球队](#获取订阅的球队)
    - [订阅联赛中的球队](#订阅联赛中的球队)
- [首页-公共接口](#首页-公共接口)
    - [新闻列表](#新闻列表)
    - [新闻详情页](#新闻详情页)
    - [评论](#评论)
- [首页-推荐](#首页-推荐)
    - [获取头部图片swiper](#获取头部图片swiper)
    - [获取比赛卡片swiper](#获取比赛卡片swiper)
    - [获取今日热门比赛场数](#获取今日热门比赛场数)
    - [直播预告区](#直播预告区)
- [集锦](#集锦)
    - [获取集锦视频列表](#获取集锦视频列表)
    - [获取集锦视频评论列表](#获取集锦视频评论列表)
- [首页-二级标题](#首页-二级标题)
    - [header swiper图片展示栏](#header-swiper图片展示栏)
- [赛程](#赛程)
    - [热门赛程](#热门赛程)
    - [获取一个月的赛程](#获取一个月的赛程)

<!-- /TOC -->


## 所有api的格式要求

```js
    每个接口必须要传的参数：
    token（带时间戳和特定算法算出来的code拿，token有失效时间，调api若token失效报"msg":"expired token"）

    每个接口必须带的两个参数：
    状态：status {Boolean} <true or false>
    信息：msg {String}
    
    若某属性的值不存在且没有默认值时，返回null，不要返回'', 0, [], {};比如，新闻时间戳没有，不要返回0,应该返回null，因为0代表1970年1月1号。
    如果值不存在，但有默认值，则返回默认值，比如: "", [], {}, 0;
    区别就是要注意返回默认值的时候是否在判断会出现错误；
    返回时间的时候，一律返回时间戳，以s为单位的;

    接口注释中，<代表接口可能的参数>
```

---

## 启动页

### 获取所有的联赛列表

```js
    /**
     * @api {get}  subPage/leagueList
     */

    return {
        "status": true,
        "msg": "获取联赛列表成功!",
        "data": [
            {
                "league_id": 11,
                "league_name": "NBA"
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
            }
        ]
    }
```

### 订阅联赛

```js
    /**
     * @api {post}  subPage/league
     * @params {Array}  subList  订阅列表
     */

    return {
      "status": true,
      "msg": "订阅联赛成功!"
    }
```

### 获取某联赛所有球队列表

```js
    /**
     * @api {get}  subPage/teamList
     * @params {String} league  联赛名称
     */

    return {
        "status": true,
        "msg": "获取球队列表成功!",
        "data": [
            {
                "team_id": 11,
                "team_name": "勇士"
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
                "league_id": 11,
                "league_name": "NBA"
            }
        ]
    }

```


### 订阅联赛中的球队

```js
    /**
     * @api {post}  subPage/team
     * @params {String} league  联赛名称
     * @params {Array}  subList  订阅列表
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
     * @params {Number} type_id   类目的id
     * @params {Number} page_index	 
     *
     * @return title  新闻标题
     * @return create_time  新闻发布时间
     * @return source   新闻来源
     * @return type   新闻所属类别(指的是我们应用的类别)
     * @return update_count  更新条数
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
                "type": "推荐",
                "update_count": 8
            }
        ]
    }
```   


### 新闻详情页

```js
    /**
     * @api {get}  home/news
     * @params {Number} news_id   新闻的id
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

### 获取头部图片swiper

```js
    /**
     * @api {get}  home/recommend/header
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
     * @return score 默认为主场:客场
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
            "score": "99:101",
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
     * @params {String} date  日期  <2018-7-23>
     * 
     * @return type   直播类型  <game program>  如有别的类型再进行添加
     *         type为game的时候主客场名字和img要返回值，多余的字段传""
     *         type为program的时候programName要返回值，多余的字段传""
     * @return sourse   直播的来源
     * @return program_name   节目名字
     * @return is_trail   是否预约
     * @return status    比赛状态  <已开始  未开始  已结束>
     * @return start_time  比赛开始时间
     * @return highlights_url   集锦链接
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "trail_id": 111,
                "type": "game",
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
                "score": "99:101"  
            }
        ]
    }
```  

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

### 获取集锦视频评论列表

```js
    /**
     * @api {get}  home/highLights/comment
     * 
     * @params {string} id    视频id
     * 
     * @return create_time  评论创建时间
     * @return vote_count    赞同数
     * @return author/user_type    用户类别，等级
     * @return author/gender   用户性别  <male female>
     * @return commentlist/thread_id    该条评论的父级评论id
     *         commentlist/thread_id等于comment_id
     * @return commentlist/is_answer  是否是回复别人的消息，是否@
     * @return commentlist/answer_user_name   回复的用户名字
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
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
                "vote_count": 222
            }
        ]
    }
```   



## 首页-二级标题

### header swiper图片展示栏

```js
    /**
     * @api {get}  home/otherType/header
     * @params {Number}  type_id  类目的id
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


## 赛程

### 热门赛程

```js
    /**
     * 沟通，预计返回一周的数据,倒序排列
     * @api {get}  schedule/popular
     * 
     * @return details_url   如果比赛结束了，返回集锦或者回放的url，不然返回''
     * @return score  如果比赛结束了，则返回比赛比分,不然返回''
     * @return media  直播平台
     * @return live_type  直播类型 <文字直播  视频直播>
     * @return end_description_word  比赛结束后链接描述词  <集锦 详情 回看>
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            "2018-07-23": [
                {
                    "hometeam": "热火",
                    "awayteam": "老鹰",
                    "hometeam_img": "url",
                    "awayteam_img": "url",
                    "start_time": 1211212,
                    "source": "NBA夏季联赛",
                    "status": "已结束",
                    "details_url": "url"，
                    "score": "100:99",
                    "live_type": "文字直播",
                    "end_description_word": "集锦"
                }
            ]
        ]
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
     * @return details_url   如果比赛结束了，返回集锦或者回放的url
     */

    return {
        "status": true,
        "msg": "...",
        "data": [
            {
                "date": "2018-7-23",
                "match_count": 4,
                "match_list": [
                    "match_name": "美国 VS 克罗地亚",
                    "start_time": 1211212,
                    "source": "篮球公园第88期",
                    "status": "已结束",
                    "details_url": "url"
                ]
            }
        ]
    }
```







