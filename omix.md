1.create.Page(store, option) 创建页面， store 从页面注入，可跨页面跨组件共享, 如果 option 定义了 data，store 的 data 会挂载在 this.data.$ 下面
2.create.Component(option) 创建组件
3.create.Component(store, option) 创建组件页面
4.this.store.data 全局 store 和 data，页面和页面所有组件可以拿到， 操作 data 会自动更新视图