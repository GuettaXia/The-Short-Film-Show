
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ height: 100%; width: 100%; }\n.",[1],"background{ color: #8A6DE9; }\n.",[1],"picbox{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; width: 100%; background-color: #000000; height: ",[0,360],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"profilepic{ width: ",[0,120],"; height: ",[0,120],"; border-radius: ",[0,60],"; }\n.",[1],"change{ color: white; font-size: x-small; margin-top: ",[0,20],"; }\n.",[1],"information{ margin-top: ",[0,100],"; color: #007AFF; }\n.",[1],"infoline{ height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"info-title{ color: #888888; margin-left: ",[0,20],"; font-size: x-small; }\n.",[1],"info-content{ color: white; margin-left: ",[0,50],"; font-size: small; }\n",],undefined,{path:"./pages/profile/profile.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/profile/profile.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      