var Oln={}
function Req(Typ,Jcd){Dft.Oln.CkN=RJC();Dft.Set=0
	var id="",req={
		ModeName:doc.title,BoardContent:"",LastActive:new Date().getTime(),CheckNum:Dft.Oln.CkN,PlayerX:"N",Message:{Content:""},PlayerCk:{O:"Y",X:"N"}
	}
	if(Jcd)id=Jcd
	if(Typ=="J"){if(!Jcd)while(!id&&id!=null)id=prompt("輸入id");Dft.Oln.Typ="X";if(id==null)return}
	else{Dft.Oln.Typ="O";if(!Jcd)id=RJC()}Dft.Oln.Id=id
	firebase.database().ref("Battle/"+id+"/PlayerX").once("value",function(r){
		if(r.val()!=null&&Typ=="R"){id=RJC();return Req(Typ,id)}
		if(Typ=="R")firebase.database().ref("Battle/"+id).update(req)
		firebase.database().ref("Battle/"+id+"/PlayerX").once("value",function(r){
			if(Typ=="R"){var url="http://squarechessgame.github.io/jndir.html?"+doc.title+"/"+id
				prompt("註冊成功,貼給朋友即可開始對戰",url)
				Id("msgr").childNodes[1].setAttribute("data-href",url);Oln.Ffb();Ini()
				Id("QR").style.background="url(http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl="+url+")"
			}else if(Typ=="J"&&r.val()=="N"){
				firebase.database().ref("Battle/"+id+"/CheckNum").once("value",function(r){
					Msg("X方已加入",1);Dft.Oln.CkN=r.val();Ini()
					firebase.database().ref("Battle/"+id).update({PlayerX:"Y",CheckNum:r.val(),LastActive:new Date().getTime()})
				})
			}else if(!r.val()){alert("此房間不存在");location.reload()
			}else {alert("進入觀賞模式");Dft.Oln.Typ="V";Ini()}
		});if(Notification&&Notification.permission!="granted")Notification.requestPermission()
	})
}
function Upl(cnt){if(Dft.Oln.Typ=="V"||!Dft.Oln.Id||!Dft.Set)return
	Dft.Set=0;var req={CheckNum:Dft.Oln.CkN,BoardContent:cnt,ModeName:Dft.Oln.MdN};Atn(Dft.Oln.MdN)
	req.LastActive=new Date().getTime()
	firebase.database().ref("Battle/"+Dft.Oln.Id).update(req);Dft.Oln.Cln=1
}
function Ini(v){Dft.System.Oln=0;Cln();Dft.System.Oln=1;Dft.Oln.Cln=0
	if(!v){location.hash=Dft.Oln.Id;if(Dft.Oln.Typ=="O")Dft.Set=1
		if(Dft.Oln.Typ!="V"){
			Cookies.set(Dft.Oln.Id,Dft.Oln.CkN+"/"+Dft.Oln.Typ,{expires:1})
			firebase.database().ref("Battle/"+Dft.Oln.Id+"/PlayerCk").on("value",function(r){
				var req={CheckNum:Dft.Oln.CkN,PlayerCk:{}}
				req.PlayerCk[Dft.Oln.Typ]="Y";req.PlayerCk[Enm(Dft.Oln.Typ)]=r.val()[Enm(Dft.Oln.Typ)]
				firebase.database().ref("Battle/"+Dft.Oln.Id).update(req)
			});Oln.Ckr()
		}
		firebase.database().ref("Battle/"+Dft.Oln.Id+"/BoardContent").on("value",function(r){var brd=r.val().split("/")
			if(brd[0].length<81&&(Dft.Oln.Cln||Dft.Oln.Typ=="V")){
				if(brd[0])alert(brd[0]);Ini(1);if(Dft.Oln.Typ=="O")Dft.Set=1;else Dft.Set=0
			}else if(brd[1]||Dft.Oln.Typ=="V"){
				Hst.Brd[brd[1]]=brd[0];Hst.Crd[brd[1]]=brd[2];Rec(brd[0]);Tn=Val(brd[1]);Rul()
				if(Dft.Oln.Typ!="V"&&Sqr.Sym[(Val(brd[1])%2)]==Dft.Oln.Typ){
					Dft.Set=1;Atn("輪到你下了");Sel.Now("N");Log()
				}else Dft.Set=0
			}
		})
		firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").on("value",function(r){
			if(r.val()&&Id("msgc").innerHTML!=r.val()){var msg=r.val().Content;if(msg=="")return
				Id("msgc").innerHTML=msg;Dft.Oln.Msg++;Atn()
				Ctl("MSw",Dft.Oln.MSw);Id("msgc").scrollTop=Id("msgc").scrollHeight
				if(msg.search('<div style="text-align:center">-X方已加入-</div>')>-1)$(".join").css("display","none")
				if(Notification){var ssm=["X方已加入","O方可能離線","X方可能離線","O方恢復房間","X方恢復房間"]
						for(var i=0;i<ssm.length;i++)while(msg.search('<div style="text-align:center">-'+ssm[i]+'-</div>')<0)msg=msg.replace('<div style="text-align:center">-'+ssm[i]+'-</div>',"")
					var m=msg.split("<br>")
					if(m.length>1&&m[m.length-2][0]!=Dft.Oln.Typ)var n=new Notification("即時訊息",{
						body:m[m.length-2],icon:"Pics/Icon.png"
					})
				}
			}
		})
	}
}
function Atn(v){
	if(v)doc.title=v
	else if(doc.title[doc.title.length-1]==")")doc.title=doc.title.split("(")[0]
	if(Dft.Oln.Msg>0)doc.title+="("+Dft.Oln.Msg+")";Tag("header")[0].innerHTML=doc.title
}
function Joi(){
	if(location.hash.length<9)Opt()
	else if(Cookies.get(location.hash.replace("#",""))){
		var Inf=Cookies.get(location.hash.replace("#","")).split("/")
		Dft.Oln.Id=location.hash.replace("#","");Dft.Oln.CkN=Inf[0]
		Dft.Oln.Typ=Inf[1];Ini();alert("已協助您恢復房間");Msg(Dft.Oln.Typ+"方恢復房間",1)
	}else Req("J",location.hash.replace("#",""))
}
Oln.Opt=function(){Id("msgr").style.opacity=0
	if(!Dft.Oln.Id){
		OpS("ORg-0/ORg","r","註冊房間",Dft.Oln.Rgt==0)
		OpS("ORg-1/ORg","r","加入房間",Dft.Oln.Rgt==1)
	}else{if(Tn<2)Id("msgr").style.opacity=1
		Id("OptionMenu").childNodes[0].innerHTML+="<label style='margin-left:10px'><input type='text' readonly value='"+Dft.Oln.Id+"' style='font-size:inherit;width:200px;text-align:center;height:21px'/></label><br>"
	}OpS("Oln-MSw","k","訊息窗彈出",Dft.Oln.MSw)
}
Oln.OpK=function(){
	if(!Dft.Oln.Id){if(Id("ORg-0").checked)Req("R");else Req("J")}
	Dft.Oln.MSw=Id("Oln-MSw").checked
}
Oln.Ffb=function(){
	(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0]
		if(d.getElementById(id))return;js=d.createElement(s);js.id=id;
		js.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		fjs.parentNode.insertBefore(js, fjs)
	}(document,'script','facebook-jssdk'))
}
Oln.Ckr=function(){
	firebase.database().ref("Battle/"+Dft.Oln.Id+"/PlayerCk").once("value",function(r){
		if(r.val()[Enm(Dft.Oln.Typ)]=="N"&&Id("msgc").innerHTML.search('<div style="text-align:center">-X方已加入-</div>')>-1)Msg(Enm(Dft.Oln.Typ)+"方可能離線",1)
		var req={CheckNum:Dft.Oln.CkN,PlayerCk:{}}
		req.PlayerCk[Enm(Dft.Oln.Typ)]="N";req.PlayerCk[Dft.Oln.Typ]=r.val()[Dft.Oln.Typ]
		firebase.database().ref("Battle/"+Dft.Oln.Id).update(req)
		setTimeout("Oln.Ckr()",10000)
	})
}
function RJC(s){var r="",t=[];if(!s)s=10;s++
	for(var i=48;i<58;i++)t.push(String.fromCharCode(i))
	for(var i=65;i<91;i++)t.push(String.fromCharCode(i))
	for(i=0;i<s;i++)r+=t[Math.floor(Math.random()*36)]
	return r
}
function Msg(msg,sys){Dft.Oln.Msg=-1
	firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").once("value",function(r){var msgo=r.val().Content
		if(!msgo)msgo="";var stp=msg+"<br>";if(sys)stp='<div style="text-align:center">-'+msg+"-</div>"
		var rms=msgo.split(stp)
		if(rms.length==1||!(rms[rms.length-1]=="")){
			if(!sys)firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").update({
				Content:msgo+Dft.Oln.Typ+":"+msg+"<br>"
			})
			else firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").update({
				Content:msgo+'<div style="text-align:center">-'+msg+"-</div>"
			})
		}
	})
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('B 8(){c s="m";n(!(s.e("d")<0))s=s.1("d","f");s=s.1("l","k");s=s.1("h","q");s=s.1("p","o");s=s.1("b","g");s=s.1("b","j");s=s.1("i","r");s=s.1("9","9-D");C s}c 7={E:8(),H:"5-6-4-2.F.3",G:"A://5-6-4-2.v.3",u:"5-6-4-2.t.3",w:"z"};y.x(7);8=a;7=a',44,44,'|replace|91|com|game|square|chess|config|cfaK|8I|null|tz|var|AA|search|AIA|tzh|yA|qh|tzxiQq|AIzaSy|AI|AAA|while|9z_UKLVGFhgEndt|9z|yAkW9zz|qh2b8||appspot|storageBucket|firebaseio|messagingSenderId|initializeApp|firebase|757542166819|https|function|return|Z2e|apiKey|firebaseapp|databaseURL|authDomain'.split('|'),0,{}))
