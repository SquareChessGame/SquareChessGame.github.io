Shl.Ara.Connect=[];Dft.Connect={Ara:0,QJd:1,Rul:0}
Shl.Rul.Connect=function(){return Ara.Rul("Connect",Cnt())}
Shl.Lmt.Connect=function(crd,sym){
	var cd8=Crd(crd,"8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	Hst.Rut[Tn]=Flt(Crd(crd,"8"),function(crd){if(Id(crd))if(Qre(crd,"Sym")==sym)return 1;return 0})
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Connect=function(){Ara.Mrk("Connect")}
Shl.Brd.Connect=function(){}
Shl.Adn.Connect=function(){Tn+=2
	switch(Dft.Connect.Rul){
		case 0:Tn=0;break
		case 1:var Os=Crd("E5","4")[Math.floor(Rnd()*4)],Xs=Crd("E5","X")[Math.floor(Rnd()*4)]
			Hst.Crd[1]=Os;Qre(Os,"Sym",0);Hst.Crd[2]=Xs;Qre(Xs,"Sym",1);break
		case 2:var s=Crd("E5",Vct("24")),Os=s[Math.floor(Rnd()*4)]
			Qre(Os,"Sym",0);Hst.Crd[1]=Os
			while(1){var crd=s[Math.floor(Rnd()*4)];
				if(Qre(crd,"Sym")!=0){Qre(crd,"Sym",1);Hst.Crd[2]=Os;break}
			}
	}
}
Shl.Ckr.Connect=function(crd){return Ara.Ckr("Connect",crd)}
Shl.Opt.Connect=function(){
	OpS("","1","Connect設定")
	if(!Dft.System.Oln){OpS("","2","固定設置")
		OpS("Connect-Rul-0/Connect-Rul","r","無設置",Dft.Connect.Rul==0)
		OpS("Connect-Rul-1/Connect-Rul","r","隨機設置一型",Dft.Connect.Rul==1)
		OpS("Connect-Rul-2/Connect-Rul","r","隨機設置二型",Dft.Connect.Rul==2)
	}Ara.Opt("Connect")
}
Shl.OpK.Connect=function(){
	if(!Dft.System.Oln)for(var i=0;i<3;i++)if(Id("Connect-Rul-"+i).checked)Dft.Connect.Rul=i
	Ara.OpK("Connect")
}
Shl.Ato.Connect=function(typ){var cds=Sel("All"),set=[],ara={O:[],X:[]},ctl={O:[],X:[]},clv={O:[],X:[]},ext=[]
	for(var i=0;i<cds.length;i++){if(!Ckr(cds[i]))continue
		set.push(cds[i]);Qre(cds[i],"Sym",Tn%2);var s=Cnt();Qre(cds[i],"Sym",2)
		for(var j=0;j<2;j++){var n=0;clv[Sqr.Sym[j]].push(s[Sqr.Sym[j]].length-1)
			for(var h=0;h<s[Sqr.Sym[j]].length;h++)n+=s[Sqr.Sym[j]][h].length*(h+1)
			ara[Sqr.Sym[j]].push(s[Sqr.Sym[j]].All.length);ctl[Sqr.Sym[j]].push(n)
		}
	}
	while(ext.length!=set.length){var row=0,ckr=0
		for(var i=0;i<set.length;i++){if(ext.indexOf(i)>-1)continue
			var tk0c=ara[Sqr.Sym[Tn%2]][i]-ara[Sqr.Sym[(Tn+1)%2]][i],
				tk0m=ara[Sqr.Sym[Tn%2]][row]-ara[Sqr.Sym[(Tn+1)%2]][row],
				tk1c=ctl[Sqr.Sym[Tn%2]][i],tk1m=ctl[Sqr.Sym[Tn%2]][row],
				tk2c=ctl[Sqr.Sym[(Tn+1)%2]][i],tk2m=ctl[Sqr.Sym[(Tn+1)%2]][row]
			if(!ckr){tk0m=0;tk1m=0;tk2m=0}
			if(tk0c>tk0m){row=i;ckr=1}else if(tk0c==tk0m){
				if(typ=="D"){
					if(tk1c>tk1m){row=i;ckr=1}else if(tk1c==tk1m&&(tk2c>tk2m||tk2c==tk2m)){row=i;ckr=1}
				}else{
					if(tk2c>tk2m){row=i;ckr=1}else if(tk2c==tk2m&&(tk1c>tk1m||tk1c==tk1m)){row=i;ckr=1}
				}
			}
		}ext.push(row)
	}ext=ext.reverse()
	return {set:ext,crd:set,ara:ara,ctl:ctl,clv:clv}
}
function Bst(){
	var A=Shl.Ato.Connect(),D=Shl.Ato.Connect("D");
	for(var i=0;i<A.set.length;i++){
		A.set[i]=A.crd[A.set[i]];D.set[i]=D.crd[D.set[i]]
	}return {A:A,D:D}
}