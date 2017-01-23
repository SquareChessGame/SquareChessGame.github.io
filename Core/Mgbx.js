function Mbx(m,a,b,v,s){$("#Mbxt,#Mbxp,#MbxbN").css("display","none");Id("Mbxc").childNodes[0].innerHTML=m;console.log(v)
	Id("Mbxt").addEventListener("change",function(){Mbx.inp=this.value})
	$("#MbxbY").click(function(){Id("Mbxt").blur();a(Mbx.inp);Id("Mbx").style.display="none"})
	if(b){Id("MbxbN").style.display="";$("#MbxbN").click(function(){b();Id("Mbx").style.display="none"})}
	switch(typeof v){
		case"string":Id("Mbxt").style.display="";Id("Mbxt").value=v;break
		case"object":Mbx.stq=v;Id("Mbxp").style.display="";if(!s)s=0;Id("Mbxs").value=v[s];break
	}Id("Mbx").style.display=""
}
Mbx.Rsz=function(){$("#Mbx").css("top",($(window).height()/2-100)+"px").css("left",($(window).width()/2-200)+"px")}
Mbx.stq=[];Mbx.inp="";Mbx.Rsz()
$("#Mbxsl").click(function(){var p=Mbx.stq.indexOf(Id("Mbxs").value)-1
		if(p<0)p=Mbx.stq.length-1;Id("Mbxs").value=Mbx.stq[p];Mbx.inp=Mbx.stq[p]
})
$("#Mbxsr").click(function(){var p=Mbx.stq.indexOf(Id("Mbxs").value)+1
	if(p>Mbx.stq.length-1)p=0;Id("Mbxs").value=Mbx.stq[p];Mbx.inp=Mbx.stq[p]
})