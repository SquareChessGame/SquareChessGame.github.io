var doc=document
function Asc(v){return v.charCodeAt()}
function Chr(v){return String.fromCharCode(v)}
function Val(v){return v*1}
function Rnd(){return Math.random()}
function Mid(v,s,e){return v.substr(s,e)}
function Instr(s,c){return s.search(c)}
function Id(v){return doc.getElementById(v)}
function Class(v){return doc.getElementsByClassName(v)}
function Tag(v){return doc.getElementsByTagName(v)}
function Name(v){return doc.getElementsByName(v)}
function Mbx(m,a,b,v){$("#Mbxt,#Mbxp,#MbxbN").css("display","none");Id("Mbxc").childNodes[0].innerHTML=m
	$("#Mbxsl").click(function(){var p=Mbx.stq.indexOf(Id("Mbxs").value)-1
		if(p<0)p=Mbx.stq.length-1;Id("Mbxs").value=Mbx.stq[p]
	})
	$("#Mbxsr").click(function(){var p=Mbx.stq.indexOf(Id("Mbxs").value)+1
		if(p>Mbx.stq.length-1)p=0;Id("Mbxs").value=Mbx.stq[p]
	})
	$("#MbxbY").click(function(){a();Id("Mbx").style.display="none"})
	if(b){
		Id("MbxbN").style.display="";$("#MbxbN").click(function(){b();Id("Mbx").style.display="none"})
	}
	switch(typeof v){
		case"string":Id("Mbxt").style.display="";Id("Mbxt").value=v;break
		case"object":Mbx.stq=v;Id("Mbxp").style.display="";Id("Mbxs").value=v[0];break
	}Id("Mbx").style.display=""
}
Mbx.stq=[]