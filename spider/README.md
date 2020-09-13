获取B站指定up主的视频的所有评论，单前版本不包括获取弹幕评论

## 使用方法
该脚本使用python开发， 并且只兼容2，还没有兼容Python3，如有需要可以自行修改
```
# 使用下面命令查看当前支持的参数
# python2 bilibili.py -h
usage: bilibili.py [-h] [--upper_id UPPER_ID] [--page PAGE]
                   [--page_size PAGE_SIZE]

a tool to get comments on bilili

optional arguments:
  -h, --help            show this help message and exit
  --upper_id UPPER_ID   upper id
  --page PAGE           page number of all videos of upper
  --page_size PAGE_SIZE
                        page number of all videos of upper
```
需要知道up主的id，这个很简单，到up主的个人信息页面，url里的最后一个数字串即up主的id。获取id后执行脚本，可以通过page和page_size两个参数来调整需要获取到哦Up主的视频列表，然后脚本执行过程中会让选择一个视频，然后获取该视频的所有评论，最后会让输入保存的文件名字，并将评论保存到文件里.

下面以[真我心理BeMyself](https://space.bilibili.com/386364189)这个Up主为例，获取指定视频的评论
[![asciicast](https://asciinema.org/a/p6phpRIS592uSeN965UHvcjlS.svg)](https://asciinema.org/a/p6phpRIS592uSeN965UHvcjlS)
