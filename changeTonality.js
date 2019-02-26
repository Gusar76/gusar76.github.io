// =========================================================================================================
// changeAkk.js - cкрипт, изменяющий аккорды при модуляции - сделал Артем Гусев gusar76@gmail.com 2016-10-01
//
// Требования к содержанию HTML и песни: 
// 1. Основной текст песни - только на русском языке!
//    Недопустимо присутствие латинских букв и знака "#" в основном тексте (не в аккордах)
// 2. Аккорд си-бемоль - "B"
//    Аккорд си - "H"

// Примечание:
// Система знаков бемолей и диезов в аккордах дана как в нотной грамоте
// =========================================================================================================

"use strict";

//var elem = document.getElementsByClassName('song').innerHTML; ---

var elemPre = document.getElementById('pre_id').innerHTML;

// KeyTone - тональность песни
var e = document.getElementById('keyTone').innerHTML; 

//  Информация по аккордам, тональностям и ключевым знакам
//                                                |                                               |    
// C   Db  D  Eb  E   F   F#  G   Ab  A   B   H   C   Db  D   Eb  E   F   F#  G   Ab  A   B   H   C   Db  D   Eb  E   F   F#  G   Ab  A   B   H  
//            Cm  C#m Dm  D#m Em  Fm  F#m Gm  G#m Am  Bm  Hm  Cm  C#m Dm  D#m Em  Fm  F#m Gm  G#m Am  Bm  Hm
//            b   #   b   #   #   b   #   b   #   #   b   #   b   #   b   #   #   b   #   b   #   #   b   #     

// Функция изменения текста песни с аккордами - повышение тональности
function ChangeSharpText() { 

	var elemRes = "";
	
	// var k = "Fm";
	// if((k == "C")||(k == "G")){
	// 	alert("Hello");
	// } else {
	// 	alert("NoNoNo");
	// }
	
	// Условие перехода на диезы
	if((e=="Db")||(e=="Eb")||(e=="F")||(e=="F#")||(e=="Ab")||(e=="B")||(e=="H")||(e=="Bm")||(e=="Cm")||(e=="Dm")||(e=="D#m")||(e=="Fm")||(e=="Gm")||(e=="G#m")){ 
		
		var i = 0;
		for (i = 0; i < elemPre.length; i++) {
			
			switch (elemPre[i]) {
				case "A":
					if(elemPre[i+1] == "#"){
						elemRes += "H";
					} else if(elemPre[i+1] == "b") {
						elemRes += "A";
					} else {
						elemRes += "B";
					}
					break;
				case "B":
					elemRes += "H";
					break;
				case "H":
					elemRes += "C";
					break;
				case "C":
					if(elemPre[i+1] == "#") {
						elemRes += "D";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "C";
					} else {
						elemRes += "C#";
					}
					break;
				case "D":
					if(elemPre[i+1] == "#") {
						elemRes += "E";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "D";
					} else {
						elemRes += "D#";
					}
					break;
				case "E":
					if(elemPre[i+1] == 'b'){
						elemRes += "E";
					} else {
						elemRes += "F";
					}
					break;
				case "F":
					if(elemPre[i+1] == "#"){
						elemRes += "G";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "F";
					} else {
						elemRes += "F#";
					}
					break;
				case "G":
					if(elemPre[i+1] == "#"){
						elemRes += "A";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "G";
					} else {
						elemRes += "G#";
					}
					break;
				case "#":
					elemRes += "";
					break;
				case "b":
					elemRes += "";
					break;
				default:
					elemRes += elemPre[i];
					break;
							
			}
			
		}		
		
		elemPre = elemRes;

		// Запись песни с новыми аккордами в html
		document.getElementById('pre_id').innerHTML = elemRes;

	// Условие перехода на бемоли
	} else {
		
		var i = 0;
		for (i = 0; i < elemPre.length; i++) {
			
			switch (elemPre[i]) {
				case "A":
					if(elemPre[i+1] == "#"){
						elemRes += "H";
					} else if(elemPre[i+1] == "b") {
						elemRes += "A";
					} else {
						elemRes += "B";
					}
					break;
				case "B":
					elemRes += "H";
					break;
				case "H":
					elemRes += "C";
					break;
				case "C":
					if(elemPre[i+1] == "#") {
						elemRes += "D";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "C";
					} else {
						elemRes += "Db";
					}
					break;
				case "D":
					if(elemPre[i+1] == "#") {
						elemRes += "E";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "D";
					} else {
						elemRes += "Eb";
					}
					break;
				case "E":
					if(elemPre[i+1] == 'b'){
						elemRes += "E";
					} else {
						elemRes += "F";
					}
					break;
				case "F":
					if(elemPre[i+1] == "#"){
						elemRes += "G";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "F";
					} else {
						elemRes += "Gb";
					}
					break;
				case "G":
					if(elemPre[i+1] == "#"){
						elemRes += "A";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "G";
					} else {
						elemRes += "Ab";
					}
					break;
				case "#":
					elemRes += "";
					break;
				case "b":
					elemRes += "";
					break;
				default:
					elemRes += elemPre[i];
					break;
							
			}
			
		}
		
		elemPre = elemRes;

		// Запись песни с новыми аккордами в html
		document.getElementById('pre_id').innerHTML = elemRes;

	}
	
	// Изменение тональности
	switch(e) {
		case "C":
			e = "Db";
			break;
		case "Db":
			e = "D";
			break;
		case "D":
			e = "Eb";
			break;
		case "Eb":
			e = "E";
			break;
		case "E":
			e = "F";
			break;
		case "F":
			e = "F#";
			break;
		case "F#":
			e = "G";
			break;
		case "G":
			e = "Ab";
			break;
		case "Ab":
			e = "A";
			break;
		case "A":
			e = "B";
			break;
		case "B":
			e = "H";
			break;
		case "H":
			e = "C";
			break;
		case "Cm":
			e = "C#m";
			break;
		case "C#m":
			e = "Dm";
			break;
		case "Dm":
			e = "D#m";
			break;
		case "D#m":
			e = "Em";
			break;
		case "Em":
			e = "Fm";
			break;
		case "Fm":
			e = "F#m";
			break;
		case "F#m":
			e = "Gm";
			break;
		case "Gm":
			e = "G#m";
			break;
		case "G#m":
			e = "Am";
			break;
		case "Am":
			e = "Bm";
			break;
		case "Bm":
			e = "Hm";
			break;
		case "Hm":
			e = "Cm";
			break;

	}

	// Запись новойтональности в html	
	document.getElementById('keyTone').innerHTML = e;
	
 }

// Функция изменения текста песни с аккордами - понижение тональности
function ChangeFlatText() {

	var elemRes = "";

	// Условие перехода на диезы
	if((e=="Db")||(e=="Eb")||(e=="F")||(e=="F#")||(e=="Ab")||(e=="B")||(e=="H")||(e=="Bm")||(e=="Cm")||(e=="Dm")||(e=="D#m")||(e=="Fm")||(e=="Gm")||(e=="G#m")){ 
		
		var elemRes = "";
		var i = 0;
		for (i = 0; i < elemPre.length; i++) {
			
			switch (elemPre[i]) {
				case "A":
					if(elemPre[i+1] == "#"){
						elemRes += "A";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "G";
					} else {
						elemRes += "G#";
					}
					break;
				case "B":
					elemRes += "A";
					break;
				case "H":
					elemRes += "B";
					break;
				case "C":
					if(elemPre[i+1] == "#"){
						elemRes += "C";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "B";
					} else {
						elemRes += "H";
					}
					break;
				case "D":
					if(elemPre[i+1] == "#"){
						elemRes += "D";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "C";
					} else {
						elemRes += "C#";
					}
					break;
				case "E":
					if(elemPre[i+1] == 'b'){
						elemRes += "D";
					} else {
						elemRes += "D#";
					}
					break;
				case "F":
					if(elemPre[i+1] == "#"){
						elemRes += "F";
					} else {
						elemRes += "E";
					}
					break;
				case "G":
					if(elemPre[i+1] == "#"){
						elemRes += "G";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "F";
					} else {
						elemRes += "F#";
					}
					break;
				case "#":
					elemRes += "";
					break;
				case "b":
					elemRes += "";
					break;
				default:
					elemRes += elemPre[i];
					break;
							
			}
		
		}
		
		elemPre = elemRes;

		// Запись песни с новыми аккордами в html
		document.getElementById('pre_id').innerHTML = elemRes;

	// Условие перехода на бемоли
	} else {

		var i = 0;
		for (i = 0; i < elemPre.length; i++) {
			
			switch (elemPre[i]) {
				case "A":
					if(elemPre[i+1] == "#"){
						elemRes += "A";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "G";
					} else {
						elemRes += "Ab";
					}
					break;
				case "B":
					elemRes += "A";
					break;
				case "H":
					elemRes += "B";
					break;
				case "C":
					if(elemPre[i+1] == "#"){
						elemRes += "C";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "B";
					} else {
						elemRes += "H";
					}
					break;
				case "D":
					if(elemPre[i+1] == "#"){
						elemRes += "D";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "C";
					} else {
						elemRes += "Db";
					}
					break;
				case "E":
					if(elemPre[i+1] == 'b'){
						elemRes += "D";
					} else {
						elemRes += "Eb";
					}
					break;
				case "F":
					if(elemPre[i+1] == "#"){
						elemRes += "F";
					} else {
						elemRes += "E";
					}
					break;
				case "G":
					if(elemPre[i+1] == "#"){
						elemRes += "G";
					} else if(elemPre[i+1] == 'b') {
						elemRes += "F";
					} else {
						elemRes += "Gb";
					}
					break;
				case "#":
					elemRes += "";
					break;
				case "b":
					elemRes += "";
					break;
				default:
					elemRes += elemPre[i];
					break;
							
			}
			
		}
	
		elemPre = elemRes;

		// Запись песни с новыми аккордами в html
		document.getElementById('pre_id').innerHTML = elemRes;

	}

	// Изменение тональности
	switch(e) {
		case "C":
			e = "H";
			break;
		case "Db":
			e = "C";
			break;
		case "D":
			e = "Db";
			break;
		case "Eb":
			e = "D";
			break;
		case "E":
			e = "Eb";
			break;
		case "F":
			e = "E";
			break;
		case "F#":
			e = "F";
			break;
		case "G":
			e = "F#";
			break;
		case "Ab":
			e = "G";
			break;
		case "A":
			e = "Ab";
			break;
		case "B":
			e = "A";
			break;
		case "H":
			e = "B";
			break;
		case "Cm":
			e = "Hm";
			break;
		case "C#m":
			e = "Cm";
			break;
		case "Dm":
			e = "C#m";
			break;
		case "D#m":
			e = "Dm";
			break;
		case "Em":
			e = "D#m";
			break;
		case "Fm":
			e = "Em";
			break;
		case "F#m":
			e = "Fm";
			break;
		case "Gm":
			e = "F#m";
			break;
		case "G#m":
			e = "Gm";
			break;
		case "Am":
			e = "G#m";
			break;
		case "Bm":
			e = "Am";
			break;
		case "Hm":
			e = "Bm";
			break;

	}
	
	// Запись песни с новыми аккордами в html
	document.getElementById('keyTone').innerHTML = e;
	
}
