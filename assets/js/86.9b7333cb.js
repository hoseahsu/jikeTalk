(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{421:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-通过-lua-redis-实现动态封禁-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-通过-lua-redis-实现动态封禁-ip"}},[s._v("#")]),s._v(" Nginx 通过 Lua + Redis 实现动态封禁 IP")]),s._v(" "),t("p",[s._v("为了封禁某些爬虫或者恶意用户对服务器的请求，我们需要建立一个动态的 IP 黑名单。对于黑名单之内的 IP ，拒绝提供服务。")]),s._v(" "),t("h2",{attrs:{id:"安装-nginx-lua模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx-lua模块"}},[s._v("#")]),s._v(" 安装 Nginx+Lua模块")]),s._v(" "),t("p",[s._v("推荐使用 OpenResty，这是一个集成了各种 Lua 模块的 Nginx 服务器")]),s._v(" "),t("p",[s._v("安装方法在"),t("a",{attrs:{href:"http://openresty.org/cn/linux-packages.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("OpenResty官网"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("我用的是Ubuntu server，这里记录一下：")]),s._v(" "),t("p",[s._v("你可以在你的 Ubuntu 系统中添加我们的 APT 仓库，这样就可以便于未来安装或更新我们的软件包（通过 apt-get update 命令）。 运行下面的命令就可以添加仓库（每个系统只需要运行一次）：")]),s._v(" "),t("ol",[t("li",[s._v("安装导入 GPG 公钥时所需的几个依赖包（整个安装过程完成后可以随时删除它们）：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-install-recommends "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" gnupg ca-certificates\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("导入 GPG 密钥：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" - https://openresty.org/package/pubkey.gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("添加官方 APT 仓库")])]),s._v(" "),t("p",[s._v("对于 "),t("code",[s._v("x86_64")]),s._v(" 或 "),t("code",[s._v("amd64")]),s._v(" 系统，可以使用下面的命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://openresty.org/package/ubuntu '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sc")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' main"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/openresty.list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("更新 APT 索引 并通过 APT 安装openresty：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openresty\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("ps:\n这个包同时也推荐安装 openresty-opm 和 openresty-restydoc 包，所以后面两个包会缺省安装上。 如果你不想自动关联安装，可以用下面方法关闭自动关联安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-install-recommends openresty\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置-nginx-示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-示例"}},[s._v("#")]),s._v(" 配置 Nginx 示例：")]),s._v(" "),t("p",[s._v("Nginx 配置")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lua_share_dict")]),s._v(" ip_blacklist "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1m")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("servername")]),s._v(" localhost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_by_lua_file")]),s._v(" lua/ip_blacklist.lua")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /opt/webroot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html index.htm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("其中")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lua_shared_dict")]),s._v(" ip_blacklist "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1m")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由 Nginx 进程分配一块 1M 大小的共享内存空间，用来缓存 IP 黑名单，参见：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_by_lua_file")]),s._v(" lua/ip_blacklist.lua")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("ip_blacklist.lua")]),s._v("文件内容如下：")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- a quick LUA access script for nginx to check IP addresses against an")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- `ip_blacklist` set in Redis, and if a match is found send a HTTP 403.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- allows for a common blacklist to be shared between a bunch of nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- web servers using a remote redis instance. lookups are cached for a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- configurable period of time.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- block an ip:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--   redis-cli SADD ip_blacklist 10.1.1.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- remove an ip:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--   redis-cli SREM ip_blacklist 10.1.1.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- also requires lua-resty-redis from:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--   https://github.com/agentzh/lua-resty-redis")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- your nginx http context should contain something similar to the")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- below: (assumes resty/redis.lua exists in /etc/nginx/lua/)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--   lua_package_path "/etc/nginx/lua/?.lua;;";')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--   lua_shared_dict ip_blacklist 1m;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- you can then use the below (adjust path where necessary) to check")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- against the blacklist in a http, server, location, if context:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- access_by_lua_file /etc/nginx/lua/ip_blacklist.lua;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- from https://gist.github.com/chrisboulton/6043871")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- modify by Ceelog")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" redis_host    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" redis_port    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- connection timeout for redis in ms. don't set this too high!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" redis_connection_timeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- check a set with this key for blacklist entries")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" redis_key     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip_blacklist"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- cache lookups for this many seconds")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" cache_ttl     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- end configuration")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ip                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote_addr\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ip_blacklist      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ip_blacklist\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" last_update_time \t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_update_time"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- only update ip_blacklist from Redis once every cache_ttl seconds:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" last_update_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" last_update_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" cache_ttl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" redis "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resty.redis"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" red "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set_timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redis_connect_timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" ok"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redis_host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" redis_port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" ok "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Redis connection error while retrieving ip_blacklist: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" new_ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("smembers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redis_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Redis read error while retrieving ip_blacklist: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- replace the locally stored ip_blacklist with the updated values:")]),s._v("\n      ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("flush_all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" banned_ip "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ipairs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new_ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("banned_ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- update time")]),s._v("\n      ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_update_time"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ip_blacklist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Banned IP detected and refused access: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("..")]),s._v(" ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HTTP_FORBIDDEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br")])]),t("h2",{attrs:{id:"更新ip-blacklist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新ip-blacklist"}},[s._v("#")]),s._v(" 更新"),t("code",[s._v("ip_blacklist")])]),s._v(" "),t("p",[s._v("在 Redis 服务器上新建 "),t("code",[s._v("Set")]),s._v(" 类型的数据"),t("code",[s._v("ip_blacklist")]),s._v("，并加入最新的 IP 黑名单。")]),s._v(" "),t("p",[s._v("完成以上步骤后，重新加载 nginx，配置便开始生效了")]),s._v(" "),t("p",[s._v("这时访问服务器，如果你的 IP 地址在黑名单内的话，将出现拒绝访问：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2021/11/24/mDpvYj94sokJq6d.png",alt:"image-20211124090354820"}})]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("以上，便是 Nginx+Lua+Redis 实现的 IP 黑名单功能，具有如下优点：")]),s._v(" "),t("p",[s._v("1、配置简单、轻量，几乎对服务器性能不产生影响；")]),s._v(" "),t("p",[s._v("2、多台服务器可以通过Redis实例共享黑名单；")]),s._v(" "),t("p",[s._v("3、动态配置，可以手工或者通过某种自动化的方式设置 Redis 中的黑名单。")])])}),[],!1,null,null,null);t.default=e.exports}}]);