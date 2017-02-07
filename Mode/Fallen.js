Shl.Ara.Fallen=[];Dft.Fallen={Fln:5}
Shl.Rul.Fallen=function(){
}
Shl.Lmt.Fallen=function(){}
Shl.Mrk.Fallen=function(){
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==4)return 1;return 0}),["BgC","FtC"],[12,2])
}
Shl.Brd.Fallen=function(){}
Shl.Adn.Fallen=function(){}
Shl.Ckr.Fallen=function(crd,set){var mcd=crd
	if(set&&Tn%2==Qre(crd,"Sym")&&Flt(Sel("All"),function(crd){
		if(Qre(crd,"Sym")==Tn%2)return 1
	}).length>Dft.Fallen.Fln)Mbx("去除對方符號",function(crd){
		Qre([crd,mcd],["Sym","BgC","FtC"],[4,12,2]);Tn++;
		Hst.Crd[Tn]=mcd;Rul();Hst.Brd[Tn]=Rec();Sel.Now("N");Log()
	},function(){},Flt(Sel("All"),function(crd){
		if(Qre(crd,"Sym")==(Tn+1)%2)return 1;return 0
	}));return 1
}
Shl.Opt.Fallen=function(){
	OpS("","1","Fallen設定")
	if(!Dft.System.Oln)OpS("Fallen-Fln","t","保留符號:",Dft.Fallen.Fln)
}
Shl.OpK.Fallen=function(){
	if(!Dft.System.Oln&&Val(Id("Fallen-Fln").value)!=NaN&&Id("Fallen-Fln").value!="")Dft.Fallen.Fln=Val(Id("Fallen-Fln").value)
	if(Dft.Fallen.Fln<10)Dft.Fallen.Fln=10
}