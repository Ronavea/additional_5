module.exports = function check(str, bracketsConfig) {
  let mas = "";
  let stroka = str;
  let n = bracketsConfig.length + 1;
  
  while(n--) {
	for(let i = 0; i < bracketsConfig.length; i++) {
	  for(let j = 0; j < 2; j++) {
		mas += bracketsConfig[i][j];                  //запись скобок в переменную
	  }

	  for(let k = 0; k < str.length/2; k++) {         //при совпадении скобок
		stroka = stroka.replace(mas, "");             //удаление скобок в строке
	  }
	  mas = "";
	}
  }

  return (stroka == "") ? true : false;
}
