function Ato(v){
	var i="E5,F5,F4,G4,E4,F3,D3,E3,D4,D2,C5,C3,B4,C4,B5,D5,C6,D6,C7,D7,C8,D8,C9,B3,A4,G6,F6,G7,F7,G8,F8,G9,G5,H6,H5,I6".split(",");Set(i[v]);if(i[v+1])setTimeout("Ato("+(v+1)+")",1000)
}