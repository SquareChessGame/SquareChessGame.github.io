Shl.Ara.Divider=[];Dft.Divider={Ara:0,QJd:1}
Shl.Rul.Divider=function(){return Ara.Rul("Divider",Cnt())}
Shl.Lmt.Divider=function(crd,sym){
	var vt8=Vct("8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	for(i=0;i<8;i++){
		var lin=Sel(crd+"~"+Crd(crd,"9"+vt8[i]))
		Hst.Rut[Tn]=Hst.Rut[Tn].concat(Flt(lin,
			function(crd){var s=Qre(crd,"Sym");
				if(!Id(crd)||s!=sym&&s!=2)return 2
				else if(s==sym)return 1;return 0
			}
		));if(Hst.Rut[Tn].indexOf(crd)>-1&&MdQ.indexOf("Follow")<0)return 0
	}return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Divider=function(){Ara.Mrk("Divider")}
Shl.Brd.Divider=function(){}
Shl.Adn.Divider=function(){}
Shl.Ckr.Divider=function(crd){return Ara.Ckr("Divider",crd)}
Shl.Opt.Divider=function(){
	OpS("","1","Divider設定");Ara.Opt("Divider")
}
Shl.OpK.Divider=function(){
	Ara.OpK("Divider")
}