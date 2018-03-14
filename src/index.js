module.exports = function solveSudoku(matrix) {

 		var matrixString = [];
		var pustoySymbol = 0;	
		var matrixTotal	 = [];

		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				matrixString.push(matrix[i][j]);
			}
		}

		function validate(curPos){
			if(curPos == 81 ){
				return true;
			}
			if(matrixString[curPos]!=pustoySymbol){
				return validate(curPos+1);
			}
			for (var i = 1; i <= 9; i++) {
				if (checkCurPos(i, curPos % 9, Math.floor(curPos/9))){
					matrixString[curPos] = i;
					if (validate(curPos + 1)) {
                    	return true;
                	}else{
                		matrixString[curPos] = 0;
                	}
				}
			}
		}

		function checkCurPos(znach , x, y){
			for (var j = 0; j <9 ; j++) {
				if (matrixString[y*9 + j] == znach || matrixString[j*9 + x] == znach){
					return false;
				}
			}

			var qvadrantX	= Math.floor(Math.floor(x/3)*3);
			var qvadrantY	= Math.floor(Math.floor(y/3)*3);
			for (var i = qvadrantY; i < qvadrantY+3; i++) {
				for (var n = qvadrantX; n < qvadrantX+3; n++) {
					if (matrixString[i*9+n] == znach){
						return false;
					}
				}
			}
			return true;
		}

		validate (0);

		for (var i = 0; i < matrixString.length; i += 9) {
            matrixTotal.push(matrixString.slice(i, i + 9));
        }

		return matrixTotal;
}
