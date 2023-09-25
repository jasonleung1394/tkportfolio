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

