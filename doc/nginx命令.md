## 需要在nginx的安装目录下执行命令

* 启动 start nginx
* 停止 nginx -s stop
* 重启 nginx -s reload
* 去关闭所有nginx进程 taskkill /IM  nginx.exe  /F

## 解决vue项目部署到nginx刷新找不到页面
```
vim vue_8000.conf     -- 进入配置文件
输入命令 i 进入编辑模式,在指定位置添加代码
location / {
    root ...
    index ...
    try_files $uri $uri/ /index.html; -- 解决页面刷新404问题
}
esc
:wq                    -- 保存并退出
nginx -s reload        -- 重启nginx
```