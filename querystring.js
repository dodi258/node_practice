const url = require('url'); 
const querystring = require('querystring'); 

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'); 
const query = querystring.parse(parseUrl.query); 
console.log('querystring.parse():', query); 
console.log('querystring.stringify():', querystring.stringify(query)); 

//querystring.parse(쿼리) = > url의 query 부분을 자바스크립트 객체로 분해해 줍니다.
//querystring.stringify(객체) => 분해된 객체를 다시 문자열로 조립해줍니다. 

const crypto = require('crypto'); 
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64')); 
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex')); 
console.log('base64', crypto.createHash('sha512').update('비밀번호2').digest('base64')); 
        