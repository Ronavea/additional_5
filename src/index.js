module.exports = function check(str, bracketsConfig) {
	let mas = "";
	let stroka = str;
	
	for(let n=0; n<=bracketsConfig.length; n++){		//перезапуск цикла
		for (let i=0; i<bracketsConfig.length; i++){
			for (let j=0; j<2; j++){
			mas += bracketsConfig[i][j];				//запись скобок в переменную
			}	
			for(let k=0; k<str.length/2; k++){			//при совпадение скобок
				stroka = stroka.replace( mas, "");		//удаление скобок в строке		
			}
			mas = ""; 
		}	
	}
	if (stroka == ""){
		return true;
	}	
	else {
		return false;
	}
}
