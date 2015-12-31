define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/WxInterface/baas");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("cordova!org.apache.cordova.device");
	require("css!$UI/WxInterface/plugin/sweetalert").load();
	require("$UI/WxInterface/plugin/sweetalert.min");

	var Model = function() {
		this.callParent();
		this._deviceType = "wx";
		this._userID = "user";
		this._userDefaultName = "新用户";
		this._userDefaultAddress = "";
		this._userPhotoURL = "";
		this._userSex = "";
		this._localIds = "";
		this._serverId = "";
		this._localId = "";
		this._serverID = "";
		this._latitude = "";
		this._longitude = "";
		this._mediaid = "";
	};
	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf7e99c474fcc59f7&redirect_uri=http%3A%2F%2Fbingkuaix3.imwork.net%2Fx5%2FUI2%2FWxInterface%2Ftest.w&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
	// http%3A%2F%2Fbingkuaix3.imwork.net%2Fx5%2FUI2%2FWxInterface%2Ftest.w
	Model.prototype.modelLoad = function(event) {
		var self = this;
		var weixinCode = this.getContext().getRequestParameter("code");
		if (justep.Browser.isChat) {
			this.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");
		}
		this.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");
		$.getJSON("/WxInterfaceBaas/weixin/userinfo?code=" + weixinCode, function(weixinUser) {
			self._userID = weixinUser.openid;
			self._userDefaultName = weixinUser.nickname + "(来自微信的用户)";
			self._userDefaultAddress = weixinUser.country + weixinUser.province + weixinUser.city;
			self._userPhotoURL = weixinUser.headimgurl;
			swal({
				title : self._userDefaultName,
				text : self._userDefaultAddress + "<span style='color:#F8BB86'>" + self._userID + "<span> .",
				html : true
			});

		})
	};
	Model.prototype.PhotoBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.chooseImage({
					count : 9, // 默认9
					sizeType : [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
					sourceType : [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
					success : function(res) {
						self._localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						$("#img").show();
						$("#img").attr("src", self._localIds);
						alert(self._localIds)
					}
				});
			});
		}
	};
	Model.prototype.showBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.previewImage({
					current : 'http://bingkuaix3.imwork.net/a/2.jpg', // 当前显示图片的http链接
					urls : [ "http://bingkuaix3.imwork.net/a/1.jpg", "http://bingkuaix3.imwork.net/a/2.jpg", "http://bingkuaix3.imwork.net/a/3.jpg" ]
				// 需要预览的图片http链接列表
				});
			})
		}
	};
	Model.prototype.uploadBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			alert(self._localIds)
			this.wxApi.exec().done(function(wx) {
				wx.uploadImage({
					localId : self._localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
					isShowProgressTips : 1, // 默认为1，显示进度提示
					success : function(res) {
						self._serverId = res.serverId; // 返回图片的服务器端ID
						swal("上传成功!", self._serverId, "success")
					}
				});
			})
		}
	};
	Model.prototype.downloadBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			alert(self._serverId)
			this.wxApi.exec().done(function(wx) {
				wx.downloadImage({
					serverId : self._serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
					isShowProgressTips : 1, // 默认为1，显示进度提示
					success : function(res) {
						var localId = res.localId; // 返回图片下载后的本地ID
						swal("下载成功!", localId, "success")
					}
				});
			})
		}
	};
	Model.prototype.startrecordBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.startRecord();
			})
		}
	};
	Model.prototype.stoprecordClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.stopRecord({
					success : function(res) {
						self._localId = res.localId;
						swal("录音结束!", self._localId, "success")
					}
				});
			})
		}
	};
	Model.prototype.omBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.onVoiceRecordEnd({
					// 录音时间超过一分钟没有停止的时候会执行 complete 回调
					complete : function(res) {
						self._localId = res.localId;
						swal("1分钟录音结束!", self._localId, "success")
					}
				});
			})
		}
	};
	Model.prototype.playBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.playVoice({
					localId : self._localId
				// 需要播放的音频的本地ID，由stopRecord接口获得
				});
			})
		}
	};
	Model.prototype.pauseBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.pauseVoice({
					localId : self._localId
				// 需要暂停的音频的本地ID，由stopRecord接口获得
				});
			})
		}
	};
	Model.prototype.stopBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.stopVoice({
					localId : self._localId
				// 需要停止的音频的本地ID，由stopRecord接口获得
				});
			})
		}
	};
	Model.prototype.MOBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.onVoicePlayEnd({
					success : function(res) {
						self._localId = res.localId; // 返回音频的本地ID
						swal("播放结束!", self._localId, "success")
					}
				});
			})
		}
	};
	Model.prototype.button9Click = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.uploadVoice({
					localId : self._localId, // 需要上传的音频的本地ID，由stopRecord接口获得
					isShowProgressTips : 1, // 默认为1，显示进度提示
					success : function(res) {
						self._serverID = res.serverId; // 返回音频的服务器端ID
						swal("上传成功!", self._serverID, "success")
					}
				});
			})
		}
	};
	Model.prototype.button10Click = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.downloadVoice({
					serverId : self._serverID, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
					isShowProgressTips : 1, // 默认为1，显示进度提示
					success : function(res) {
						self._localId = res.localId; // 返回音频的本地ID
						swal("下载成功!", self._localId, "success")
					}
				});
			})
		}
	};
	Model.prototype.delBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.translateVoice({
					localId : self._localId, // 需要识别的音频的本地Id，由录音相关接口获得
					isShowProgressTips : 1, // 默认为1，显示进度提示
					success : function(res) {
						alert(res.translateResult); // 语音识别的结果
					}
				});
			})
		}
	};
	Model.prototype.recognitionClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.getNetworkType({
					success : function(res) {
						alert(res.networkType)
					}
				});
			})
		}
	};
	Model.prototype.getLocationBtnClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.getLocation({
					type : 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					success : function(res) {
						self._latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						self._longitude = res.longitude; // 经度，浮点数，范围为180 ~
						// -180。
						var speed = res.speed; // 速度，以米/每秒计
						var accuracy = res.accuracy; // 位置精度
						swal("获取位置成功!", "维度：" + self._latitude + "精度：" + self._longitude + "速度：" + speed + "位置精度：" + accuracy, "success")
					}
				});
			})
		}
	};
	Model.prototype.openlocationClick = function(event) {
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.openLocation({
					latitude : self._latitude, // 纬度，浮点数，范围为90 ~ -90
					longitude : self._longitude, // 经度，浮点数，范围为180 ~ -180。
					name : '我的位置', // 位置名
					address : '单位', // 地址详情说明
					scale : 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
					infoUrl : 'www.baidu.com' // 在查看位置界面底部显示的超链接,可点击跳转
				});

			})
		}
	};
	Model.prototype.hideBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.hideOptionMenu();
			})
		}
	};
	Model.prototype.showClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.showOptionMenu();
			})
		}
	};
	Model.prototype.closewindowBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.closeWindow();
			})
		}
	};
	Model.prototype.hidesClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.hideMenuItems({
					menuList : [ "menuItem:share:appMessage", "menuItem:openWithSafari" ]
				// 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
				});
			})
		}
	};
	Model.prototype.showsClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.showMenuItems({
					menuList : [ "menuItem:share:appMessage", "menuItem:openWithSafari" ]
				// 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
				});
			})
		}
	};
	Model.prototype.hideAllBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.hideAllNonBaseMenuItem();
			})
		}
	};
	Model.prototype.showALLBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.showAllNonBaseMenuItem();
			})
		}
	};
	Model.prototype.scanBtnClick = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.scanQRCode({
					needResult : 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
					scanType : [ "qrCode", "barCode" ], // 可以指定扫二维码还是一维码，默认二者都有
					success : function(res) {
						var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
						swal("扫描成功!", result, "success");
					}
				});
			})
		}
	};
	Model.prototype.UploadBtnClick = function(event) {
		var self = this;
		baas.sendRequest({
			"url" : "/WxInterfaceBaas",
			"action" : "mediaUpload",
			"params" : "",
			"success" : function(resultData, xhr) {
				self._mediaid = resultData.mediaid;
				swal("上传成功!", "mediaid:" + self._mediaid, "success");
			}
		})
	};
	Model.prototype.mediadownloadBtnClick = function(event) {
		var self = this;
		baas.sendRequest({
			"url" : "/WxInterfaceBaas",
			"action" : "mediadownload",
			"params" : {
				"mediaid" : self._mediaid
			},
			"success" : function(resultData, xhr) {
			swal("下载成功!", "记录你的每时每刻", "success");
			}
		})
	};
	return Model;
});