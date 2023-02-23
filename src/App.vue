<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");

  // #ifdef APP-PLUS  
  let appid: string = plus.runtime.appid ?? ""
  plus.runtime.getProperty(appid, function(widgetInfo) {  
      uni.request({  
          url: 'http://www.example.com/update/',  
          data: {  
              version: widgetInfo.version,  
              name: widgetInfo.name  
          },  
          success: (result) => {  
              let data:any = result.data;
              if (data.update && data.wgtUrl) {  
                  uni.downloadFile({  
                      url: data.wgtUrl,  
                      success: (downloadResult) => {  
                          if (downloadResult.statusCode === 200) {  
                              plus.runtime.install(downloadResult.tempFilePath, {  
                                  force: false  //是否校验版本 true不校验
                              }, function() {  
                                  console.log('install success...');  
                                  plus.runtime.restart();  //热更新要重新启动才能生效
                              }, function(e) {  
                                  console.error('install fail...');  
                              });  
                          }  
                      }  
                  });  
              }  
          }  
      });  
  });  
  // #endif

  //#ifdef APP-PLUS  
    var server = "https://www.example.com/update"; //检查更新地址  
    var req = { //升级检测数据  
        "appid": plus.runtime.appid,  
        "version": plus.runtime.version  
    };  
    uni.request({  
        url: server,  
        data: req,  
        success: (res) => {  
            if (res.statusCode == 200 && res.data.status === 1) {  
                uni.showModal({ //提醒用户更新  
                    title: "更新提示",  
                    content: res.data.note,  
                    success: (res) => {  
                        if (res.confirm) {  
                            plus.runtime.openURL(res.data.url);  
                        }  
                    }  
                })  
            }  
        }  
    })  
    //#endif  
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
