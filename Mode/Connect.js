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
Shl.Ato.Connect=function(typ){
	var cds=Sel("All"),mn=Cnt(),nx=[],crd=[],ctl={O:[],X:[]},ext=[]
	for(var i=0;i<cds.length;i++){if(!Ckr(cds[i]))continue
		crd.push(cds[i]);Qre(cds[i],"Sym",Tn%2);var s=Cnt();Qre(cds[i],"Sym",2);nx.push(s)
		for(var j=0;j<2;j++){var n=0
			for(var k=0;k<s[Sqr.Sym[j]].length;k++)n+=s[Sqr.Sym[j]][k].length*(k+1);ctl[Sqr.Sym[j]].push(n)
		}
	}
	if(!typ){if(mn[Sqr.Sym[Tn%2]].length<mn[Sqr.Sym[(Tn+1)%2]].length)typ="A";else typ="D"}
	while(ext.length!=crd.length){var r=0,k=0
		for(var i=0;i<nx.length;i++){if(ext.indexOf(i)>-1)continue
			if(!k){r=i;k=1;continue}
			var tk0c=nx[i][Sqr.Sym[Tn%2]].All.length-nx[i][Sqr.Sym[(Tn+1)%2]].All.length,
				tk0m=nx[r][Sqr.Sym[Tn%2]].All.length-nx[r][Sqr.Sym[(Tn+1)%2]].All.length,
				tk1c=ctl[Sqr.Sym[Tn%2]][i],tk1m=ctl[Sqr.Sym[Tn%2]][r],
				tk2c=ctl[Sqr.Sym[(Tn+1)%2]][i],tk2m=ctl[Sqr.Sym[(Tn+1)%2]][r]
			if(tk0c>tk0m)r=i
			else if(tk0c==tk0m){
				if(typ=="A"){
					if(tk1c>tk1m)r=i;else if(tk1c==tk1m&&(tk2c>tk2m||tk2c==tk2m))r=i
				}else{
					if(tk2c>tk2m)r=i;else if(tk2c==tk2m&&(tk1c>tk1m||tk1c==tk1m))r=i
				}
			}
		}ext.push(r)
	}if(typ=="A")ext.reverse()
	return {mn,nx,crd,ext,ctl,typ,set:crd[ext[0]]}
}