/* Generated by the Nim Compiler v1.6.6 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555121 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555124 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555130 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555130 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555130.node = NNI33555130;
NTI33555130.base = NTI33555113;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;
var NNI33555124 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555124.node = NNI33555124;
NTI33555124.base = NTI33555113;
var NNI33555121 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555121.node = NNI33555121;
NTI33555121.base = NTI33555120;

function makeNimstrLit(c_33556801) {
      var result = [];
  for (var i = 0; i < c_33556801.length; ++i) {
    result[i] = c_33556801.charCodeAt(i);
  }
  return result;
  

  
}

function mnewString(len_33556893) {
        return new Array(len_33556893);
  

  
}

function toJSStr(s_33556807) {
                    var Temporary5;
            var Temporary7;

  var result_33556808 = null;

    var res_33556842 = newSeq_33556825((s_33556807).length);
    var i_33556843 = 0;
    var j_33556844 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556843 < (s_33556807).length)) break Label2;
          var c_33556845 = s_33556807[i_33556843];
          if ((c_33556845 < 128)) {
          res_33556842[j_33556844] = String.fromCharCode(c_33556845);
          i_33556843 += 1;
          }
          else {
            var helper_33556857 = newSeq_33556825(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556858 = c_33556845.toString(16);
                  if ((((code_33556858) == null ? 0 : (code_33556858).length) == 1)) {
                  helper_33556857.push("%0");;
                  }
                  else {
                  helper_33556857.push("%");;
                  }
                  
                  helper_33556857.push(code_33556858);;
                  i_33556843 += 1;
                    if (((s_33556807).length <= i_33556843)) Temporary5 = true; else {                      Temporary5 = (s_33556807[i_33556843] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556845 = s_33556807[i_33556843];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556842[j_33556844] = decodeURIComponent(helper_33556857.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556842[j_33556844] = helper_33556857.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556844 += 1;
        }
    } while (false);
    if (res_33556842.length < j_33556844) { for (var i = res_33556842.length ; i < j_33556844 ; ++i) res_33556842.push(null); }
               else { res_33556842.length = j_33556844; };
    result_33556808 = res_33556842.join("");

  return result_33556808;

}

function raiseException(e_33556667, ename_33556668) {
    e_33556667.name = ename_33556668;
    if ((excHandler == 0)) {
    unhandledException(e_33556667);
    }
    
    throw e_33556667;

  
}

function addInt(a_33556940, b_33556941) {
        var result = a_33556940 + b_33556941;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557189, a_33557190, b_33557191) {
      var Temporary1;

  var result_33557192 = 0;

  BeforeRet: do {
      if (!(a_33557190 <= i_33557189)) Temporary1 = false; else {        Temporary1 = (i_33557189 <= b_33557191);      }    if (Temporary1) {
    result_33557192 = i_33557189;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_33557192;

}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557140, src_33557141, ti_33557142) {
  var result_33557151 = null;

    switch (ti_33557142.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557131(ti_33557142))) {
      result_33557151 = src_33557141;
      }
      else {
        result_33557151 = [src_33557141[0], src_33557141[1]];
      }
      
      break;
    case 19:
            if (dest_33557140 === null || dest_33557140 === undefined) {
        dest_33557140 = {};
      }
      else {
        for (var key in dest_33557140) { delete dest_33557140[key]; }
      }
      for (var key in src_33557141) { dest_33557140[key] = src_33557141[key]; }
      result_33557151 = dest_33557140;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557142.base == null))) {
      result_33557151 = nimCopy(dest_33557140, src_33557141, ti_33557142.base);
      }
      else {
      if ((ti_33557142.kind == 17)) {
      result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {m_type: ti_33557142} : dest_33557140;
      }
      else {
        result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {} : dest_33557140;
      }
      }
      nimCopyAux(result_33557151, src_33557141, ti_33557142.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557141 === null) {
        result_33557151 = null;
      }
      else {
        if (dest_33557140 === null || dest_33557140 === undefined || dest_33557140.length != src_33557141.length) {
          dest_33557140 = new Array(src_33557141.length);
        }
        result_33557151 = dest_33557140;
        for (var i = 0; i < src_33557141.length; ++i) {
          result_33557151[i] = nimCopy(result_33557151[i], src_33557141[i], ti_33557142.base);
        }
      }
    
      break;
    case 28:
            if (src_33557141 !== null) {
        result_33557151 = src_33557141.slice(0);
      }
    
      break;
    default: 
      result_33557151 = src_33557141;
      break;
    }

  return result_33557151;

}

function chckIndx(i_33557184, a_33557185, b_33557186) {
      var Temporary1;

  var result_33557187 = 0;

  BeforeRet: do {
      if (!(a_33557185 <= i_33557184)) Temporary1 = false; else {        Temporary1 = (i_33557184 <= b_33557186);      }    if (Temporary1) {
    result_33557187 = i_33557184;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557184, a_33557185, b_33557186);
    }
    
  } while (false);

  return result_33557187;

}

function nimCharToStr(x_33556517) {
  var result_33556518 = [];

    result_33556518 = nimCopy(null, mnewString(1), NTI33554439);
    result_33556518[0] = x_33556517;

  return result_33556518;

}

function divInt(a_33556952, b_33556953) {
        if (b_33556953 == 0) raiseDivByZero();
    if (b_33556953 == -1 && a_33556952 == 2147483647) raiseOverflow();
    return Math.trunc(a_33556952 / b_33556953);
  

  
}

function subInt(a_33556944, b_33556945) {
        var result = a_33556944 - b_33556945;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var objectID_704643234 = [0];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// From https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
var em;
function getValue(){
    var div = document.getElementById("divforvalcheck");
    div.style.height = '1em';
    return ( em = div.offsetHeight );
}


function add_33556419(x_33556420, x_33556420_Idx, y_33556421) {
          if (x_33556420[x_33556420_Idx] === null) { x_33556420[x_33556420_Idx] = []; }
      var off = x_33556420[x_33556420_Idx].length;
      x_33556420[x_33556420_Idx].length += y_33556421.length;
      for (var i = 0; i < y_33556421.length; ++i) {
        x_33556420[x_33556420_Idx][off+i] = y_33556421.charCodeAt(i);
      }
    

  
}

function newSeq_33556825(len_33556827) {
  var result_33556828 = [];

    result_33556828 = new Array(len_33556827); for (var i = 0 ; i < len_33556827 ; ++i) { result_33556828[i] = null; }
  return result_33556828;

}

function unhandledException(e_33556663) {
    var buf_33556664 = [[]];
    if (!(((e_33556663.message).length == 0))) {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556664[0].push.apply(buf_33556664[0], e_33556663.message);;
    }
    else {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit(" ["));;
    add_33556419(buf_33556664, 0, e_33556663.name);
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("]\x0A"));;
    var cbuf_33556665 = toJSStr(buf_33556664[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556665);
  }
  else {
    throw cbuf_33556665;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556938) {
        if (a_33556938 > 2147483647 || a_33556938 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI33555130, name: null, trace: [], up: null}, "RangeDefect");

  
}

function addChars_251658415(result_251658417, result_251658417_Idx, x_251658418, start_251658419, n_251658420) {
    var old_251658421 = (result_251658417[result_251658417_Idx]).length;
    (result_251658417[result_251658417_Idx].length = chckRange(addInt(old_251658421, n_251658420), 0, 2147483647));
    Label1: do {
      var iHEX60gensym4_251658435 = 0;
      var i_469762180 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762180 < n_251658420)) break Label3;
            iHEX60gensym4_251658435 = i_469762180;
            result_251658417[result_251658417_Idx][chckIndx(addInt(old_251658421, iHEX60gensym4_251658435), 0, (result_251658417[result_251658417_Idx]).length - 1)] = x_251658418.charCodeAt(chckIndx(addInt(start_251658419, iHEX60gensym4_251658435), 0, (x_251658418).length - 1));
            i_469762180 = addInt(i_469762180, 1);
          }
      } while (false);
    } while (false);

  
}

function addChars_251658411(result_251658413, result_251658413_Idx, x_251658414) {
    addChars_251658415(result_251658413, result_251658413_Idx, x_251658414, 0, ((x_251658414) == null ? 0 : (x_251658414).length));

  
}

function addInt_251658436(result_251658437, result_251658437_Idx, x_251658438) {
    addChars_251658411(result_251658437, result_251658437_Idx, ((x_251658438) + ""));

  
}

function addInt_251658457(result_251658458, result_251658458_Idx, x_251658459) {
    addInt_251658436(result_251658458, result_251658458_Idx, x_251658459);

  
}

function HEX24_335544323(x_335544324) {
  var result_335544325 = [[]];

    addInt_251658457(result_335544325, 0, x_335544324);

  return result_335544325[0];

}

function isFatPointer_33557131(ti_33557132) {
  var result_33557133 = false;

  BeforeRet: do {
    result_33557133 = !((ConstSet1[ti_33557132.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557133;

}

function nimCopyAux(dest_33557144, src_33557145, n_33557146) {
    switch (n_33557146.kind) {
    case 0:
      break;
    case 1:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557146.sons.length; i++) {
      nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i]);
    }
    
      break;
    case 3:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
      for (var i = 0; i < n_33557146.sons.length; ++i) {
        nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i][1]);
      }
    
      break;
    }

  
}

function raiseIndexError(i_33556754, a_33556755, b_33556756) {
    var Temporary1;

    if ((b_33556756 < a_33556755)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(HEX24_335544323(i_33556754) || [],makeNimstrLit(" not in ") || [],HEX24_335544323(a_33556755) || [],makeNimstrLit(" .. ") || [],HEX24_335544323(b_33556756) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function sysFatal_218103842(message_218103845) {
    raiseException({message: nimCopy(null, message_218103845, NTI33554439), m_type: NTI33555124, parent: null, name: null, trace: [], up: null}, "AssertionDefect");

  
}

function raiseAssert_218103840(msg_218103841) {
    sysFatal_218103842(msg_218103841);

  
}

function failedAssertImpl_218103864(msg_218103865) {
    raiseAssert_218103840(msg_218103865);

  
}

function raiseDivByZero() {
    raiseException({message: makeNimstrLit("division by zero"), parent: null, m_type: NTI33555121, name: null, trace: [], up: null}, "DivByZeroDefect");

  
}
async function main_469762057() {
  var result_469762059 = null;

  BeforeRet: do {
    var loadingAnimation_469762065 = document.getElementById("loadinganim");
    var maincontent_469762066 = document.getElementById("maincontainer");
    var terminal_469762067 = document.getElementById("terminal");
    var uncoverer_469762068 = document.getElementById("uncoverer");
    if (((getCookie("displaywelcome") == "") || (getCookie("displaywelcome") == "yes"))) {
    document.body.style.backgroundColor = "#000";
    terminal_469762067.appendChild(document.createTextNode("WEBCONFIG.exe disable COM0,keyboard,97"));
    terminal_469762067.appendChild(document.createElement("br"));
    terminal_469762067.appendChild(document.createTextNode("Reloading Daemon"));
    terminal_469762067.appendChild(document.createElement("br"));
    (await sleep(2000));
    terminal_469762067.appendChild(document.createTextNode("Saving Config..."));
    terminal_469762067.appendChild(document.createElement("br"));
    terminal_469762067.appendChild(document.createTextNode("Config saved to 'WEBCONF.ini'."));
    terminal_469762067.appendChild(document.createElement("br"));
    terminal_469762067.appendChild(document.createTextNode("C:\\> "));
    Label1: do {
      var x_469762073 = 0;
      var i_469762162 = 0;
      var L_469762163 = 16;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762162 < L_469762163)) break Label3;
            x_469762073 = makeNimstrLit("LOADMAINPAGE.exe")[chckIndx(i_469762162, 0, (makeNimstrLit("LOADMAINPAGE.exe")).length - 1)];
            (await sleep(50));
            terminal_469762067.appendChild(document.createTextNode(toJSStr(nimCharToStr(x_469762073))));
            i_469762162 = addInt(i_469762162, 1);
            if (!((16 == L_469762163))) {
            failedAssertImpl_218103864(makeNimstrLit("iterators.nim(258, 11) `len(a) == L` the length of the string changed while iterating over it"));
            }
            
          }
      } while (false);
    } while (false);
    terminal_469762067.appendChild(document.createElement("br"));
    terminal_469762067.appendChild(document.createTextNode("Loading "));
    Label4: do {
      var x_469762082 = 0;
      var res_469762167 = 1;
      Label5: do {
          Label6: while (true) {
          if (!(res_469762167 <= 3)) break Label6;
            x_469762082 = res_469762167;
            (await sleep(500));
            terminal_469762067.appendChild(document.createTextNode("."));
            res_469762167 = addInt(res_469762167, 1);
          }
      } while (false);
    } while (false);
    terminal_469762067.appendChild(document.createElement("br"));
    terminal_469762067.appendChild(document.createTextNode("LOADED!"));
    (await sleep(1000));
    terminal_469762067.remove();
    (await sleep(1000));
    setCookie("displaywelcome", "no", 1);
    document.body.style.backgroundColor = "var(--c1)";
    (await sleep(1000));
    uncoverer_469762068.style.display = "block";
    maincontent_469762066.style.display = "block";
    (await sleep(500));
    uncoverer_469762068.style.zIndex = "999";
    (await sleep(500));
    var emheight_469762107 = getValue();
    var h_469762108 = uncoverer_469762068.offsetHeight;
    var steps_469762109 = divInt(h_469762108, ((emheight_469762107) | 0));
    Label7: do {
      var x_469762115 = 0;
      var res_469762171 = steps_469762109;
      Label8: do {
          Label9: while (true) {
          if (!(0 <= res_469762171)) break Label9;
            x_469762115 = res_469762171;
            (await sleep(10));
            uncoverer_469762068.style.height = toJSStr((HEX24_335544323(x_469762115) || []).concat(makeNimstrLit("em") || []));
            res_469762171 = subInt(res_469762171, 1);
          }
      } while (false);
    } while (false);
    uncoverer_469762068.remove();
    document.getElementById("divforvalcheck").remove();
    }
    else {
      terminal_469762067.remove();
      maincontent_469762066.style.display = "block";
      uncoverer_469762068.style.display = "block";
      uncoverer_469762068.style.zIndex = "999";
      var emheight_469762120 = getValue();
      var h_469762121 = uncoverer_469762068.offsetHeight;
      var steps_469762122 = divInt(h_469762121, ((emheight_469762120) | 0));
      Label10: do {
        var x_469762128 = 0;
        var res_469762174 = steps_469762122;
        Label11: do {
            Label12: while (true) {
            if (!(0 <= res_469762174)) break Label12;
              x_469762128 = res_469762174;
              (await sleep(10));
              uncoverer_469762068.style.height = toJSStr((HEX24_335544323(x_469762128) || []).concat(makeNimstrLit("em") || []));
              res_469762174 = subInt(res_469762174, 1);
            }
        } while (false);
      } while (false);
      uncoverer_469762068.remove();
      document.getElementById("divforvalcheck").remove();
    }
    
    result_469762059 = undefined;
    break BeforeRet;
  } while (false);

  return result_469762059;

}
var _ = main_469762057();
