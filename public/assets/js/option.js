var _0x1ca4=['tray-btn','Tray:\x20Off','editTray','Tray:\x20On','electron','../config.json','rpc','getElementById','href','javascript:RpcOn()','innerHTML','send','editRpc','rpc-btn','Discord\x20RPC:\x20Off','javascript:RpcOff()','Discord\x20RPC:\x20On','notifier','ntf-btn','javascript:NtfOn()','editNtf','Notifications:\x20Off','javascript:NtfOff()','tray'];(function(_0x2d6a57,_0x3de194){var _0x1f9cf6=function(_0x25393b){while(--_0x25393b){_0x2d6a57['push'](_0x2d6a57['shift']());}};_0x1f9cf6(++_0x3de194);}(_0x1ca4,0x1cc));var _0x929d=function(_0x1f8fa2,_0x542dfb){_0x1f8fa2=_0x1f8fa2-0x0;var _0x2a8fb0=_0x1ca4[_0x1f8fa2];return _0x2a8fb0;};const {ipcRenderer}=require(_0x929d('0x0'));let config=require(_0x929d('0x1'));RpcCheck();NtcCheck();trayCheck();function RpcCheck(){if(config[_0x929d('0x2')]===![]){document[_0x929d('0x3')]('rpc-btn')[_0x929d('0x4')]=_0x929d('0x5');document['getElementById']('rpc-btn')[_0x929d('0x6')]='Discord\x20RPC:\x20Off';}}function RpcOff(){ipcRenderer[_0x929d('0x7')](_0x929d('0x8'),![]);document['getElementById'](_0x929d('0x9'))[_0x929d('0x4')]=_0x929d('0x5');document[_0x929d('0x3')](_0x929d('0x9'))[_0x929d('0x6')]=_0x929d('0xa');}function RpcOn(){ipcRenderer['send'](_0x929d('0x8'),!![]);document[_0x929d('0x3')]('rpc-btn')[_0x929d('0x4')]=_0x929d('0xb');document['getElementById'](_0x929d('0x9'))[_0x929d('0x6')]=_0x929d('0xc');}function NtcCheck(){if(config[_0x929d('0xd')]===![]){document[_0x929d('0x3')](_0x929d('0xe'))[_0x929d('0x4')]=_0x929d('0xf');document[_0x929d('0x3')](_0x929d('0xe'))['innerHTML']='Notifications:\x20Off';}}function NtfOff(){ipcRenderer[_0x929d('0x7')](_0x929d('0x10'),![]);document[_0x929d('0x3')](_0x929d('0xe'))[_0x929d('0x4')]=_0x929d('0xf');document[_0x929d('0x3')]('ntf-btn')[_0x929d('0x6')]=_0x929d('0x11');}function NtfOn(){ipcRenderer[_0x929d('0x7')]('editNtf',!![]);document[_0x929d('0x3')](_0x929d('0xe'))[_0x929d('0x4')]=_0x929d('0x12');document[_0x929d('0x3')](_0x929d('0xe'))[_0x929d('0x6')]='Notifications:\x20On';}function trayCheck(){if(config[_0x929d('0x13')]===![]){document[_0x929d('0x3')](_0x929d('0x14'))[_0x929d('0x4')]='javascript:trayOn()';document[_0x929d('0x3')]('tray-btn')[_0x929d('0x6')]=_0x929d('0x15');}}function trayOff(){ipcRenderer[_0x929d('0x7')](_0x929d('0x16'),![]);document[_0x929d('0x3')]('tray-btn')[_0x929d('0x4')]='javascript:trayOn()';document[_0x929d('0x3')](_0x929d('0x14'))[_0x929d('0x6')]=_0x929d('0x15');}function trayOn(){ipcRenderer['send']('editTray',!![]);document[_0x929d('0x3')](_0x929d('0x14'))[_0x929d('0x4')]='javascript:trayOff()';document[_0x929d('0x3')](_0x929d('0x14'))[_0x929d('0x6')]=_0x929d('0x17');}