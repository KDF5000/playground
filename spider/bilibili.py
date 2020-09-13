#!/usr/bin/env python
# encoding: utf-8

import requests
import re
import os
import sys
import json
import time
import argparse

reload(sys)                      # reload 才能调用 setdefaultencoding 方法
sys.setdefaultencoding('utf-8')  # 设置 'utf-8'

API_SEARCH_MID_AVS = "https://api.bilibili.com/x/space/arc/search?mid={}&ps={}&tid=0&pn={}&order=pubdate&jsonp=jsonp"
API_COMMENT_LIST = "https://api.bilibili.com/x/v2/reply?&oid={}&jsonp=jsonp&pn={}&type=1&sort=0"
API_REPLY_REPLY = "https://api.bilibili.com/x/v2/reply/reply?jsonp=jsonp&pn=1&type=1&oid=841988360&ps=10&root=3451325223"

class BiliSpider:
    # mid
    upper_id = ""
    current_video_id = ""
    comments_list = []

    def __init__(self, upper_id):
        self.upper_id = upper_id

    def get_all_av(self, page=1, size=1):
        url = "https://api.bilibili.com/x/space/arc/search?mid=%s&ps=%d&tid=0&pn=%d&order=pubdate&jsonp=jsonp" % (self.upper_id, size, page)
        r = requests.get(url)
        text = r.text
        json_text = json.loads(text)
        if json_text["code"] != 0:
            print "get_all_av error, %s" % json_text["message"]
            return

        vlist = json_text["data"]["list"]["vlist"]
        if len(vlist) <= 0:
            print "no video list for upper %s" % self.upper_id_
            return
        return vlist

    def get_reply_replies(self, reply, ps=10):
        if not reply["replies"]:
            return

        root_rpid = reply["rpid"]
        oid = reply["oid"]
        reply_count = reply["rcount"]
        total_page = reply_count // ps + 1
        for pn in range(1, total_page+1):
            time.sleep(0.02)
            url = "https://api.bilibili.com/x/v2/reply/reply?jsonp=jsonp&pn=%d&ps=%d&type=1&oid=%s&root=%s" % (pn, ps, oid, root_rpid)
            req = requests.get(url)
            text = req.text
            json_text_list = json.loads(text)
            if json_text_list["code"] != 0:
                print "failed to get all replies for reply %s, %s" % (root_rpid, json_text["message"])
                return

            for rep in json_text_list["data"]["replies"]:
                self.comments_list.append((rep["root"], rep["parent"], rep["rpid"], rep["member"]["uname"], rep["content"]["message"]))
                # just have two level reply
                # if rep["replies"]:
                #     self.get_replies(rep)

    def get_all_comments(self, av_id, ps=20):
        self.current_video_id = av_id
        url = "https://api.bilibili.com/x/v2/reply?&oid=%s&jsonp=jsonp&pn=%d&ps=1&type=1&sort=0" %(av_id, 1)
        r = requests.get(url)
        numtext = r.text
        json_text = json.loads(numtext)
        if json_text["code"] != 0:
            print "failed to get all comments for video %s, %s" % (av_id, json_text["message"])
            return

        comments_count = json_text["data"]["page"]["count"]
        # comments_all_count = json_text["data"]["page"]["acount"]
        # print comments_all_count
        total_page = comments_count // ps + 1
        for pn in range(1, total_page+1):
            time.sleep(0.02)
            url = "https://api.bilibili.com/x/v2/reply?&oid=%s&jsonp=jsonp&pn=%d&ps=%d&type=1&sort=0" %(av_id, pn, ps)
            req = requests.get(url)
            text = req.text
            json_text_list = json.loads(text)
            if "replies" not in json_text_list["data"] or not json_text_list["data"]["replies"]:
                return

            for reply in json_text_list["data"]["replies"]:
                self.comments_list.append((reply["root"], reply["parent"], reply["rpid"], reply["member"]["uname"], reply["content"]["message"]))
                if reply["replies"]:
                    self.get_reply_replies(reply)

    def dump_comments(self, file_name):
        if file_name:
            with open(file_name, "w") as fd:
                fd.write("root | parent | reply_id | username | comment_content\n")
                for comment in self.comments_list:
                    fd.write("%s | %s | %s | %s | %s\n" %(comment[0], comment[1], comment[2], comment[3], comment[4].replace("\n", " ")))
            return

        print "root | parent | reply_id | username | comment_content"
        for comment in self.comments_list:
            print "%s | %s | %s | %s | %s" %(comment[0], comment[1], comment[2], comment[3], comment[4].replace("\n", " "))

def convert_ts_date(ts):
    time_local = time.localtime(ts)
    date = time.strftime("%Y-%m-%d %H:%M:%S",time_local)
    return date

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='a tool to get comments on bilili')
    parser.add_argument("--upper_id", help="upper id")
    parser.add_argument("--page", default=1, type=int, help="page number of all videos of upper")
    parser.add_argument("--page_size", default=1, type=int, help="page number of all videos of upper")
    args = parser.parse_args()
    if not args.upper_id:
        print "invalid upper id"
        exit(0)

    spider = BiliSpider(args.upper_id)
    vlist = spider.get_all_av(page=args.page, size=args.page_size)
    # {u'comment': 392, u'typeid': 124, u'play': 40132, u'bvid': u'BV1Ri4y1M7XR', u'subtitle': u'', u'description': ', u'copyright': u'', u'title': ', u'review': 0, u'pic': u'//i1.hdslb.com/bfs/archive/f04f298470bfb72cdf81e3ddb1f1357b2de4205b.jpg', u'mid': 386364189, u'is_union_video': 0, u'created': 1599814810, u'length': u'11:08', u'video_review': 436, u'author': u'\u771f\u6211\u5fc3\u7406BeMyself', u'aid': 542011100, u'hide_click': False, u'is_pay': 0}

    for av in vlist:
        print "\n------------------------------------------------"
        print "| Upper ID: %s" % av['mid']
        print "| Video ID: %s" % av['aid']
        print "| Author: %s" % av["author"]
        print "| Title: %s" % av["title"]
        print "| Subtitle: %s" % av["subtitle"]
        print "| Description: %s" % av["description"]
        print "| Comments: %d" % av["comment"]
        print "| Video Review: %d" % av["video_review"]
        print "| Post Date: %s" % convert_ts_date(av["created"])
        print "------------------------------------------------\n"

    aid = raw_input("请输入需要获取评论的视频ID或者Ctrl+C退出:")
    spider.get_all_comments(aid)
    print "成功获取%d条评论!" % len(spider.comments_list)

    output = raw_input("请输入保存的文件名:")
    spider.dump_comments(output)
