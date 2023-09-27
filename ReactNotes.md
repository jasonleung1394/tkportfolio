# NodeJS 部分

基于谷歌引擎的一个JavaScript Runtime. 使得JavaScript可被用于开发后端环境。

#### pros

- all JS, know JS, Know Node
- 高并发能力 （high concurrency），高性能服务器 
  - **多路复用**，multiplexing: 创建一个监听socket, 当当时事件在内核完成后会有返回，然后接受data进入后续的事件循环。新的事件会被加入到epoll的list当中去等待回复
  - **非阻塞性** asynchronous IO 经典异步？: 轮询内核，未完成就返回错误/promise之类的东西，适用于不及时响应开发
  - 信号驱动IO: 发起操作时在内核存放一个信号处理函数，完成时内核返回信号，进程再回来内核调用
  - 异步IO: 发起IO请求，内核接受并返回不阻塞，内核完成直接返回信号给进程。
- 周期短，成本低

# MongoDB 部分





# ExpressJS 部分



# React 部分



### 响应式布局

REM: JS动态计算屏幕百分比。



### React 生命周期

- Mounting 挂载

​	将元素放进DOM

		1. `constructor()` 构造器:

永远是最先执行的， 要用`super(props)` 使得构造器可以直接继承他的父类构造器 -- 即`React.Component`

2. `getDerivedStateFromProps()`

3. `render()` 渲染: 必要条件

4. `componentDidMount()`

可以当作渲染后步骤使用，例如页面渲染成功后调用`componentDidMount()`, 将下一步动作延后

```jsx
componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
//change the color to yellow after a second
```

- Updating 更新



- Ummounting 卸载







### React 对象

### React `DOM `(virtual/real)

### React `props`

### React `Child`

### React `map`



## React Hook 是什么

为组件引入外部功能，用use当作前缀



### React `useState`

```javascript
const  [buttonText, setButtonText] =  useState("Click me,   please");
```

`buttonText` 就是value， 后面`useState()`赋予了初始值

`setButtonText` 可以在后续的函数中被调用，改变buttonText的值

### React `useContext()`

当前用户管理，可以将当前状态分到别的组件中去，比如导航栏和对话框共享当前用户名



### React `useReducer()`



### React `useEffect`

触发异步的hook

```javascript
useEffect(()  =>  {
  // Async Action
}, [dependencies])
```

当下面的那个dependencies变量发生改变时，useEffect里面的code会跑

