var _0x1b94=['MediaPlayPause','handleClick();','webContents','executeJavaScript','setVolume(','document.getElementById(\x22vol-control\x22).value=','about','loadFile','public/about.html','close','setHighlightMode','options','public/options.html','editRpc','rpc','enabled','stringify','You\x20need\x20to\x20restart\x20the\x20qtradio\x20desktop\x20app\x20to\x20make\x20the\x20change\x20effective!','editNtf','notifier','Failed\x20to\x20write\x20changes\x20to\x20config','error','editTray','editServer','server','./tray.js','./util.js','electron','exports','win','tray','icon','config','winSize','default','width','height','#A782DE','public/index.html','preventDefault','hide','isQuitting','exit','always','closed','register'];(function(_0x33160f,_0x275fd3){var _0x3f0e4c=function(_0xc11149){while(--_0xc11149){_0x33160f['push'](_0x33160f['shift']());}};_0x3f0e4c(++_0x275fd3);}(_0x1b94,0x15b));var _0x5bd3=function(_0x195c6c,_0x5f314b){_0x195c6c=_0x195c6c-0x0;var _0x29f18f=_0x1b94[_0x195c6c];return _0x29f18f;};let optWin;let aboutWin;let optWinOpen=![];let aboutWinOpen=![];const createTray=require(_0x5bd3('0x0'));const {writeFileSync}=require('fs');const {notify,getConfig}=require(_0x5bd3('0x1'));const {app,ipcMain,BrowserWindow,globalShortcut}=require(_0x5bd3('0x2'));let config2=getConfig();module[_0x5bd3('0x3')]={'setValues':(_0x412f72,_0x1186dd,_0xd5e06c,_0x50108b)=>{this[_0x5bd3('0x4')]=_0x412f72;this[_0x5bd3('0x5')]=_0xd5e06c;this[_0x5bd3('0x6')]=_0x1186dd;this[_0x5bd3('0x7')]=_0x50108b;app['isQuitting']=![];},'createMainWindow':()=>{this[_0x5bd3('0x4')]=new BrowserWindow({'width':this[_0x5bd3('0x7')][_0x5bd3('0x8')][_0x5bd3('0x9')][_0x5bd3('0xa')],'height':this[_0x5bd3('0x7')][_0x5bd3('0x8')][_0x5bd3('0x9')][_0x5bd3('0xb')],'icon':this[_0x5bd3('0x6')],'frame':![],'backgroundColor':_0x5bd3('0xc')});if(config2[_0x5bd3('0x5')])this['tray']=createTray(this[_0x5bd3('0x7')][_0x5bd3('0x5')],this['icon'],this[_0x5bd3('0x4')],this['openOptWin']);this[_0x5bd3('0x4')]['loadFile'](_0x5bd3('0xd'));this['win']['on']('close',_0x156880=>{_0x156880[_0x5bd3('0xe')]();if(config2[_0x5bd3('0x5')])this[_0x5bd3('0x4')][_0x5bd3('0xf')]();else if(!config2[_0x5bd3('0x5')]){app[_0x5bd3('0x10')]=!![];this[_0x5bd3('0x4')]['close']();process[_0x5bd3('0x11')](0x3);}});this[_0x5bd3('0x4')]['on']('show',()=>this[_0x5bd3('0x5')]['setHighlightMode'](_0x5bd3('0x12')));this[_0x5bd3('0x4')]['on'](_0x5bd3('0x13'),()=>this[_0x5bd3('0x4')]=null);globalShortcut[_0x5bd3('0x14')](_0x5bd3('0x15'),()=>this[_0x5bd3('0x4')]['webContents']['executeJavaScript'](_0x5bd3('0x16')));return this[_0x5bd3('0x4')];},'togglePlayback':()=>{return this[_0x5bd3('0x4')][_0x5bd3('0x17')][_0x5bd3('0x18')]('handleClick();');},'changeVolume':_0xc3a5cb=>{this[_0x5bd3('0x4')]['webContents']['executeJavaScript'](_0x5bd3('0x19')+_0xc3a5cb+');');return this[_0x5bd3('0x4')][_0x5bd3('0x17')]['executeJavaScript'](_0x5bd3('0x1a')+_0xc3a5cb+';');},'openAboutWin':()=>{if(aboutWinOpen)return;aboutWin=new BrowserWindow({'width':this['config'][_0x5bd3('0x8')][_0x5bd3('0x1b')][_0x5bd3('0xa')],'height':this[_0x5bd3('0x7')]['winSize'][_0x5bd3('0x1b')][_0x5bd3('0xb')],'icon':this[_0x5bd3('0x6')],'frame':![]});aboutWin[_0x5bd3('0x1c')](_0x5bd3('0x1d'));aboutWinOpen=!![];aboutWin['on'](_0x5bd3('0x1e'),_0x5e0862=>{_0x5e0862[_0x5bd3('0xe')]();aboutWin[_0x5bd3('0xf')]();aboutWinOpen=![];});aboutWin['on']('show',()=>this[_0x5bd3('0x5')][_0x5bd3('0x1f')](_0x5bd3('0x12')));aboutWin['on'](_0x5bd3('0x13'),()=>aboutWin=null);},'openOptWin':()=>{if(optWinOpen)return;optWin=new BrowserWindow({'width':this['config'][_0x5bd3('0x8')]['options'][_0x5bd3('0xa')],'height':this[_0x5bd3('0x7')][_0x5bd3('0x8')][_0x5bd3('0x20')]['height'],'icon':this[_0x5bd3('0x6')],'frame':![]});optWin[_0x5bd3('0x1c')](_0x5bd3('0x21'));optWinOpen=!![];optWin['on'](_0x5bd3('0x1e'),_0x3dd3e6=>{_0x3dd3e6[_0x5bd3('0xe')]();optWin['hide']();optWinOpen=![];});optWin['on']('show',()=>this[_0x5bd3('0x5')]['setHighlightMode']('always'));optWin['on'](_0x5bd3('0x13'),()=>optWin=null);ipcMain['on'](_0x5bd3('0x22'),(_0x4b7bbd,_0x407f05)=>{this[_0x5bd3('0x7')][_0x5bd3('0x23')][_0x5bd3('0x24')]=_0x407f05;const _0x13cb0a=JSON[_0x5bd3('0x25')](this['config'],null,0x2);try{writeFileSync(config2,_0x13cb0a);}catch(_0x33b37d){notify('Failed\x20to\x20write\x20changes\x20to\x20config');console['error'](_0x33b37d);}notify(_0x5bd3('0x26'));});ipcMain['on'](_0x5bd3('0x27'),(_0x1b39f2,_0xff3dd6)=>{this[_0x5bd3('0x7')][_0x5bd3('0x28')]=_0xff3dd6;const _0x4b0f6d=JSON['stringify'](this[_0x5bd3('0x7')],null,0x2);try{writeFileSync(config2,_0x4b0f6d);}catch(_0x3d6347){notify(_0x5bd3('0x29'));console[_0x5bd3('0x2a')](_0x3d6347);}notify(_0x5bd3('0x26'));});ipcMain['on'](_0x5bd3('0x2b'),(_0x49e025,_0x31198f)=>{this[_0x5bd3('0x7')][_0x5bd3('0x5')]=_0x31198f;const _0x46cfc7=JSON['stringify'](this[_0x5bd3('0x7')],null,0x2);try{writeFileSync(config2,_0x46cfc7);}catch(_0x35b318){notify(_0x5bd3('0x29'));console[_0x5bd3('0x2a')](_0x35b318);}notify(_0x5bd3('0x26'));});ipcMain['on'](_0x5bd3('0x2c'),(_0x348a08,_0xbc5386)=>{this['config'][_0x5bd3('0x2d')][_0x5bd3('0x24')]=_0xbc5386;const _0x1576ea=JSON[_0x5bd3('0x25')](this[_0x5bd3('0x7')],null,0x2);try{writeFileSync(config2,_0x1576ea);}catch(_0x1ba8c5){notify(_0x5bd3('0x29'));console[_0x5bd3('0x2a')](_0x1ba8c5);}notify(_0x5bd3('0x26'));});}};