(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{428:function(t,s,a){"use strict";a.r(s);var e=a(7),i=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),s("h2",{attrs:{id:"整机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整机"}},[t._v("#")]),t._v(" 整机")]),t._v(" "),s("ul",[s("li",[t._v("top\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317101241.png",alt:"20210317101241"}}),t._v(" "),s("ul",[s("li",[t._v("uptime，系统性能命令的精简版")])])])]),t._v(" "),s("h2",{attrs:{id:"cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),s("ul",[s("li",[t._v("vmstat\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317101634.png",alt:"20210317101634"}}),t._v(" "),s("ul",[s("li",[t._v("查看cpu（包含不限于）\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317101720.png",alt:"20210317101720"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317101932.png",alt:"20210317101932"}})]),t._v(" "),s("li",[t._v("查看额外\n"),s("ul",[s("li",[t._v("查看所有cpu核信息\n"),s("ul",[s("li",[t._v("mpstat -P ALL 2 - 每两秒采样一次")])])]),t._v(" "),s("li",[t._v("每个进程使用cpu的用量分解信息\n"),s("ul",[s("li",[t._v("pidstat -u 1 -p 进程编号 - 先使用ps -ef|grep java查看进程号")])])])])])])])]),t._v(" "),s("h2",{attrs:{id:"内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[t._v("#")]),t._v(" 内存")]),t._v(" "),s("ul",[s("li",[t._v("free\nfree 以byte为单位\nfree -g 以G为单位\nfree -m 以M为单位\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317103028.png",alt:"20210317103028"}}),t._v(" "),s("ul",[s("li",[t._v("应用程序可用内存数")]),t._v(" "),s("li",[t._v("查看额外\n"),s("ul",[s("li",[t._v("pidstat -p 进程号 -r 采样间隔秒数")])])])])])]),t._v(" "),s("h2",{attrs:{id:"硬盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬盘"}},[t._v("#")]),t._v(" 硬盘")]),t._v(" "),s("ul",[s("li",[t._v("df\ndf 以byte为单位\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317103125.png",alt:"20210317103125"}}),t._v("\ndf -h 以G,M,K为单位\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317103142.png",alt:"20210317103142"}})])]),t._v(" "),s("h2",{attrs:{id:"磁盘io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘io"}},[t._v("#")]),t._v(" 磁盘IO")]),t._v(" "),s("ul",[s("li",[t._v("iostat\n"),s("ul",[s("li",[t._v("磁盘IO性能评估\n"),s("ul",[s("li",[t._v("iostat -xdk 2 3\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317103818.png",alt:"20210317103818"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210317103748.png",alt:"20210317103748"}})])])]),t._v(" "),s("li",[t._v("查看额外\n"),s("ul",[s("li",[t._v("pidstat -d 采样间隔秒数 -p 进程号")])])])])])]),t._v(" "),s("h2",{attrs:{id:"网络io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络io"}},[t._v("#")]),t._v(" 网络IO")]),t._v(" "),s("ul",[s("li",[t._v("ifstat----查看网络IO\n"),s("ul",[s("li",[t._v("默认本地没有，下载ifstat\n"),s("ul",[s("li",[t._v("wget "),s("a",{attrs:{href:"http://gael.roualland.free.fr/ifstat/ifstat-1.1.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gael.roualland.free.fr/ifstat/ifstat-1.1.tar.gz"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("tar xzvf ifstat-1.1.tar.gz")]),t._v(" "),s("li",[t._v("cd ifstat-1.1")]),t._v(" "),s("li",[t._v("./configure")]),t._v(" "),s("li",[t._v("make")]),t._v(" "),s("li",[t._v("make install")])])]),t._v(" "),s("li",[t._v("查看网络IO\n"),s("ul",[s("li",[t._v("ifstat 1\n"),s("ul",[s("li",[t._v("各个网卡的in、out")]),t._v(" "),s("li",[t._v("观察网络负载情况")]),t._v(" "),s("li",[t._v("程序网络读写是否正常")]),t._v(" "),s("li",[t._v("程序网络I/O优化")]),t._v(" "),s("li",[t._v("增加网络I/O带宽")])])])])])])]),t._v(" "),s("li",[t._v("netstat -anp----查看端口占用\n"),s("ul",[s("li",[t._v("可以加上管道符号进行过滤，即netstat -anp | grep java")])])])]),t._v(" "),s("h2",{attrs:{id:"防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[t._v("#")]),t._v(" 防火墙")]),t._v(" "),s("ul",[s("li",[t._v("firewall\n"),s("ul",[s("li",[t._v("查看端口\n"),s("ul",[s("li",[t._v("firewall-cmd --list-all")]),t._v(" "),s("li",[t._v("firewall-cmd --list-ports")])])]),t._v(" "),s("li",[t._v("添加端口\n"),s("ul",[s("li",[t._v("#Web管理端口默认为8161，通讯端口默认为61616")]),t._v(" "),s("li",[t._v("firewall-cmd --zone=public --add-port=8161/tcp --permanent")]),t._v(" "),s("li",[t._v("firewall-cmd --zone=public --add-port=61616/tcp --permanent")])])]),t._v(" "),s("li",[t._v("重启防火墙\n"),s("ul",[s("li",[t._v("systemctl restart firewalld.service")]),t._v(" "),s("li",[t._v("firewall-cmd --reload")])])]),t._v(" "),s("li",[t._v("或者直接关闭防火墙\n"),s("ul",[s("li",[t._v("systemctl stop firewalld.service")])])])])])]),t._v(" "),s("h2",{attrs:{id:"自启动-以activemq为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自启动-以activemq为例"}},[t._v("#")]),t._v(" 自启动（以activemq为例）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用vim创建一个systemd服务文件")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("vi /usr/lib/systemd/system/activemq.service")])]),t._v(" "),s("li",[s("p",[t._v("填入以下内容")]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("[Unit]\nDescription=ActiveMQ service\nAfter=network.target\n\n[Service]\nType=forking\nExecStart=/var/activemq/bin/activemq start\nExecStop=/var/activemq/bin/activemq stop\nUser=root\nGroup=root\nRestart=always\nRestartSec=9\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=activemq\n\n[Install]\nWantedBy=multi-user.target\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])])]),t._v(" "),s("li",[s("p",[t._v("修改/var/activemq/bin/env配置，找到最后\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210512000329.png",alt:"20210512000329"}})]),t._v(" "),s("ul",[s("li",[t._v("将JAVA_HOME注释取消，填入jdk安装路径("),s("strong",[t._v("使用whereis java命令查找安装路径")]),t._v(")\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qouson/my-pic-bed/pic/20210512000422.png",alt:"20210512000422"}})]),t._v(" "),s("li",[t._v("启动ActiveMQ服务\n"),s("ul",[s("li",[t._v("systemctl start activemq")])])]),t._v(" "),s("li",[t._v("查看服务状态\n"),s("ul",[s("li",[t._v("systemctl status activemq")])])]),t._v(" "),s("li",[t._v("设置开机自启动\n"),s("ul",[s("li",[t._v("ln -s /usr/lib/systemd/system/activemq.service /etc/systemd/system/multi-user.target.wants/activemq.service")]),t._v(" "),s("li",[t._v("systemctl enable activemq")]),t._v(" "),s("li",[t._v("检测是否自启动systemctl list-unit-files | grep activemq")])])]),t._v(" "),s("li",[s("strong",[t._v("防火墙添加ActiveMQ端口")]),t._v(" "),s("ul",[s("li",[t._v("查看端口\n"),s("ul",[s("li",[t._v("firewall-cmd --list-ports")])])]),t._v(" "),s("li",[t._v("添加端口\n"),s("ul",[s("li",[t._v("#Web管理端口默认为8161，通讯端口默认为61616")]),t._v(" "),s("li",[t._v("firewall-cmd --zone=public --add-port=8161/tcp --permanent")]),t._v(" "),s("li",[t._v("firewall-cmd --zone=public --add-port=61616/tcp --permanent")])])]),t._v(" "),s("li",[t._v("重启防火墙\n"),s("ul",[s("li",[t._v("systemctl restart firewalld.service")]),t._v(" "),s("li",[t._v("firewall-cmd --reload")])])]),t._v(" "),s("li",[t._v("或者直接关闭防火墙\n"),s("ul",[s("li",[t._v("systemctl stop firewalld.service")])])])])])])])]),t._v(" "),s("h2",{attrs:{id:"远程复制-以复制hosts文件为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程复制-以复制hosts文件为例"}},[t._v("#")]),t._v(" 远程复制（以复制hosts文件为例）")]),t._v(" "),s("ul",[s("li",[t._v("sudo scp /etc/hosts root@node2:/etc/\n"),s("ul",[s("li",[t._v("命令中的root是目标机器的用户名，命令执行后可能会提示需要输入密码，输入对应用户的密码就行了")])])])]),t._v(" "),s("h2",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" host")]),t._v(" "),s("ul",[s("li",[t._v("1.修改主机名")])]),t._v(" "),s("div",{staticClass:"language-linux line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo vim /etc/hostname\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("修改/etc/hostname\n192.168.0.105 修改为 node1\n192.168.0.106 修改为 node2")]),t._v(" "),s("p",[t._v("或者\n分别在两台主机执行命令")]),t._v(" "),s("div",{staticClass:"language-linux line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hostnamectl set-hostname node1\nhostnamectl set-hostname node2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("修改完毕后用远程工具重新连接")]),t._v(" "),s("ul",[s("li",[t._v("2.修改192.168.0.105机器上的/etc/hosts文件")])]),t._v(" "),s("div",{staticClass:"language-linux line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo vim /etc/hosts\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),s("ul",[s("li",[t._v("kill -9 杀进程")])])])}),[],!1,null,null,null);s.default=i.exports}}]);