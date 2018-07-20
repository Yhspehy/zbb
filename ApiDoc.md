<!-- TOC -->

- [所有api的格式要求](#所有api的格式要求)
- [启动页](#启动页)
    - [获取所有的联赛列表](#获取所有的联赛列表)
    - [获取已经订阅的联赛](#获取已经订阅的联赛)
    - [订阅联赛](#订阅联赛)
    - [获取某联赛所有球队列表](#获取某联赛所有球队列表)
    - [获取订阅的球队](#获取订阅的球队)
    - [订阅联赛中的球队](#订阅联赛中的球队)

<!-- /TOC -->


## 所有api的格式要求

```js
    状态：status {Boolean} <true or false>
    信息：msg {String}
```

--------
## 启动页

### 获取所有的联赛列表

```js
    /**
     * @api {get}  subPage/leagueList
     */

    return {
      "status": true,
      "msg": "获取联赛列表成功!",
      "data": ["NBA", "CBA", ...]
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
      "data": ["NBA", "CBA"]
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
      "data": ["勇士", "骑士", ...]
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
      "data": ["勇士", "骑士"]
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

