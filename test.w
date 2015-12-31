<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="微信接口测试"> 
        <div class="x-titlebar-left" xid="div1"/>  
        <div class="x-titlebar-title" xid="div2">微信接口测试</div>  
        <div class="x-titlebar-right reverse" xid="div3"/>
      </div>
    </div>  
    <div class="x-panel-content" xid="content1">
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="imagebuttonGroup1">
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          label="拍照" xid="PhotoBtn" onClick="PhotoBtnClick"> 
          <i xid="i1"/>  
          <span xid="span1">拍照</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          label="预览图片" xid="showBtn" onClick="showBtnClick"> 
          <i xid="i2"/>  
          <span xid="span2">预览图片</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          label="上传" xid="uploadBtn" onClick="uploadBtnClick"> 
          <i xid="i3"/>  
          <span xid="span3">上传</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          label="下载" xid="downloadBtn" onClick="downloadBtnClick"> 
          <i xid="i4"/>  
          <span xid="span4">下载</span>
        </a>
      </div>  
      
    <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="audiobuttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="开始录音" xid="startrecordBtn" onClick="startrecordBtnClick">
   <i xid="i6"></i>
   <span xid="span6">开始录音</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="停止录音" xid="stoprecord" onClick="stoprecordClick">
   <i xid="i7"></i>
   <span xid="span7">停止录音</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="1分钟录音" xid="omBtn" onClick="omBtnClick">
   <i xid="i8"></i>
   <span xid="span8">1分钟录音</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="播放" xid="playBtn" onClick="playBtnClick">
   <i xid="i9"></i>
   <span xid="span9">播放</span></a>
  
  
  
  
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="暂停" xid="pauseBtn" onClick="pauseBtnClick">
   <i xid="i10"></i>
   <span xid="span10">暂停</span></a>
  </div><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup2"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="智能判断" xid="delBtn" onClick="delBtnClick">
   <i xid="i15"></i>
   <span xid="span15">智能判断</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="下载录音" xid="button10" onClick="button10Click">
   <i xid="i14"></i>
   <span xid="span14">下载录音</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="上传录音" xid="button9" onClick="button9Click">
   <i xid="i13"></i>
   <span xid="span13">上传录音</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="监听结束" xid="MOBtn" onClick="MOBtnClick">
   <i xid="i12"></i>
   <span xid="span12">监听结束</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="停止" xid="stopBtn" onClick="stopBtnClick">
   <i xid="i11"></i>
   <span xid="span11">停止</span></a></div><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup3"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="判断网络" xid="recognition" onClick="recognitionClick">
   <i xid="i16"></i>
   <span xid="span16">判断网络</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="获取位置" xid="getLocationBtn" onClick="getLocationBtnClick">
   <i xid="i17"></i>
   <span xid="span17">获取位置</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="查看位置" xid="openlocation" onClick="openlocationClick">
   <i xid="i18"></i>
   <span xid="span18">查看位置</span></a>
  </div><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup4"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="隐藏右上角" xid="hideBtn" onClick="hideBtnClick">
   <i xid="i21"></i>
   <span xid="span21">隐藏右上角</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="显示右上角" xid="show" onClick="showClick">
   <i xid="i22"></i>
   <span xid="span22">显示右上角</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="关闭页面" xid="closewindowBtn" onClick="closewindowBtnClick">
   <i xid="i23"></i>
   <span xid="span23">关闭页面</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="批量隐藏" xid="hides" onClick="hidesClick">
   <i xid="i24"></i>
   <span xid="span24">批量隐藏</span></a></div><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup5"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="批量显示" xid="shows" onClick="showsClick">
   <i xid="i25"></i>
   <span xid="span25">批量显示</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="隐藏所有" xid="hideAllBtn" onClick="hideAllBtnClick">
   <i xid="i26"></i>
   <span xid="span26">隐藏所有</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="显示所有" xid="showALLBtn" onClick="showALLBtnClick">
   <i xid="i27"></i>
   <span xid="span27">显示所有</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="扫一扫" xid="scanBtn" onClick="scanBtnClick">
   <i xid="i28"></i>
   <span xid="span28">扫一扫</span></a></div><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup6"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="多媒体上传" xid="UploadBtn" onClick="UploadBtnClick">
   <i xid="i29"></i>
   <span xid="span29">多媒体上传</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="多媒体下载" xid="mediadownloadBtn" onClick="mediadownloadBtnClick">
   <i xid="i30"></i>
   <span xid="span30">多媒体下载</span></a></div><img src="" alt="" xid="image1" id="img" style="height:373px;width:426px;display:none" ></img>
  
  </div>  
    <div class="x-panel-bottom" xid="bottom1"></div>
  </div>
</div>
