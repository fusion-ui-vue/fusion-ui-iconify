#  Iconify
 


👋 [Iconify](ttps://icon-sets.iconify.design/) 图标 集成千个图标，支持自定义颜色 大小

🏃 Icon Iconify integrates thousands of icons and supports custom color size


## 🌱 安装

```
npm install fusion-ui-iconify
```
```
yarn add fusion-ui-iconify
```
```
pnpm add fusion-ui-iconify
```

## 🌱 注册

```main.ts```

```
 import Icon from 'fusion-ui-iconify'

 app.use(Icon).mount('#app');
```

##  🌱 使用

1. Iconify 进入官网选择需要的图标 复制图标名称 例如：```eos-icons:bubble-loading```

2. 在页面中使用

```

<template>
    <Icon icon="eos-icons:bubble-loading" color="green"  size="50" />
    <br>  
    <Icon icon="line-md:uploading-loop" color="green"  size="50" />
    <br>  
    <Icon icon="line-md:downloading-loop" color="pink"  size="50" />
    <br>  
    <Icon icon="logos:woocommerce-icon" color="pink"  size="50" />
    <br> 
    <Icon icon="icon-park-twotone:setting-web" color='red' size="50" />
    <br>
    <Icon icon="svg-spinners:clock" color='#744aaa' size="50" />
    <br>
    <Icon icon="devicon:vuejs" color="red" size="50" />
</template>
```

##  🌱 显示

![显示](https://img-blog.csdnimg.cn/0604ab6979274291b98463b0fd5429ea.gif)
