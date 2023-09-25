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



### React `useState`



### React `map`



### React `useEffect`