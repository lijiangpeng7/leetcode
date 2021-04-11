## ping github 超时解决方案

1. 查询`github`IP 地址， http://github.global.ssl.fastly.net.ipaddress.com/
2. 打开`C:\Windows\System32\drivers\etc`中的 hosts 文件，添加如下代码

```
140.82.114.3 github.com
```
