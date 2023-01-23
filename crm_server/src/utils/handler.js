const error_code = require('./error_code.json');

module.exports = {
	errorHandler : (err) => {
		let code = 1;
		if(err.code){
			code = err.code;
		} else {
			if(err.name){
				if(err.name.includes('TokenExpireError')){
					code = 2;
				}else if(err.name.includes('JsonWebTokenError')){
					code = 5;
				}else {
					code = 1;
				}
			}
		}
		return { code, error : error_code[code] };
	},
	responseHandler : () => {
		return {};
	}
}