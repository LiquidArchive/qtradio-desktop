var _0x7f82=['getElementById','max-btn','addEventListener','isMaximized','maximize','close-btn','onreadystatechange','complete','electron','min-btn','click','getCurrentWindow'];(function(_0x584749,_0x125eb5){var _0x1fb443=function(_0x1bf308){while(--_0x1bf308){_0x584749['push'](_0x584749['shift']());}};_0x1fb443(++_0x125eb5);}(_0x7f82,0xc8));var _0x1fbd=function(_0x2ea018,_0x3552f5){_0x2ea018=_0x2ea018-0x0;var _0x2d4db8=_0x7f82[_0x2ea018];return _0x2d4db8;};const {remote}=require(_0x1fbd('0x0'));(()=>{const _0x1910b2=()=>{document['getElementById'](_0x1fbd('0x1'))['addEventListener'](_0x1fbd('0x2'),()=>{remote[_0x1fbd('0x3')]()['minimize']();});document[_0x1fbd('0x4')](_0x1fbd('0x5'))[_0x1fbd('0x6')](_0x1fbd('0x2'),()=>{if(!remote['getCurrentWindow']()[_0x1fbd('0x7')]())remote[_0x1fbd('0x3')]()[_0x1fbd('0x8')]();else remote[_0x1fbd('0x3')]()['unmaximize']();});document[_0x1fbd('0x4')](_0x1fbd('0x9'))[_0x1fbd('0x6')]('click',()=>{remote[_0x1fbd('0x3')]()['close']();});};document[_0x1fbd('0xa')]=()=>{if(document['readyState']===_0x1fbd('0xb'))return _0x1910b2();};})();