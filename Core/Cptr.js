function StB(v){var cds=Sel("All"),bst={crd:[],lth:[],ltl:[]}
	for(var i=0;i<cds.length;i++){
		if(Ckr(cds[i])){bst.crd.push(cds[i])
			Set(cds[i]);var p=[Shl.Ara.Connect.O,Shl.Ara.Connect.X],l=[0,0],s=[0,0]
			if(!v){console.log(cds[i]);StB(1)}
			for(var j=0;j<2;j++){
				for(var k=0;k<p[j].length;k++)if(p[j][k].length==0){l[j]=k;s[j]=p[j][k-1].length;break}
			}bst.lth.push(l[Tn%2]-l[(Tn+1)%2]);bst.ltl.push(s[Tn%2]-s[(Tn+1)%2]);Ctl("Udo")
		}
	}console.log(bst)
}