Shl.Ara.Connect=[];Dft.Connect={Ara:0,QJd:1,Rul:0,Ori:0,Map:[]}
Shl.Rul.Connect=function(){return Ara.Rul("Connect",Cnt("Connect"))}
Shl.Lmt.Connect=function(crd,sym){var mcd=crd
	var cd8=Crd(crd,"8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	Hst.Rut[Tn]=Flt(Crd(crd,"8"),function(crd){
		if(Id(crd)){
			if(Dft.Connect.Ori){if(!Dft.Connect.Map.length)Dft.Connect.Map=Map(Hst.Crd[(Tn%2)+1],(Tn%2),"8")
				if(Dft.Connect.Map.indexOf(crd)>-1)return 1
			}else if(Qre(crd,"Sym")==sym)return 1;return 0
		}
	});return !Hst.Rut[Tn].length>0
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
Shl.Ckr.Connect=function(crd){Dft.Connect.Map=[];return Ara.Ckr("Connect",crd)}
Shl.Opt.Connect=function(){
	OpS("","1","Connect設定")
	if(!Dft.System.Oln){OpS("","2","固定設置")
		OpS("Connect-Ori","k","原生規則",Dft.Connect.Ori)
		OpS("Connect-Rul-0/Connect-Rul","r","無設置",Dft.Connect.Rul==0)
		OpS("Connect-Rul-1/Connect-Rul","r","隨機設置一型",Dft.Connect.Rul==1)
		OpS("Connect-Rul-2/Connect-Rul","r","隨機設置二型",Dft.Connect.Rul==2)
	}Ara.Opt("Connect")
}
Shl.OpK.Connect=function(){
	if(!Dft.System.Oln){Dft.Connect.Ori=Id("Connect-Ori").checked
		for(var i=0;i<3;i++)if(Id("Connect-Rul-"+i).checked)Dft.Connect.Rul=i
	}
	Ara.OpK("Connect")
}