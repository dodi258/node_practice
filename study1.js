// 화살표 함수 이다. 

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'xero', 'sero'],
    logFriends: function() {
        var that = this; 
        this.friends.forEach(friend => {
            console.log(that.name, friend); 
        }); 
        // this.friends.forEach(function (friend) {
        //     console.log(that.name, friend); 
        // }); 
    },
}; 

relationship1.logFriends(); 


// 프로미스 
const condition = true; // true 이면 resolve, false 면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패'); 
    }
}); 

promise
.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message); 
    })
})
.then((message2) => {
    console.log(message2); 
    return new Promise((resolve, reject) => {
        resolve(ressage2); 
    }); 
})
.then((message3) => {
    console.log(message3); 
})
.catch((error) => {
    console.error(error); 
}); 

// async/await --> promise가 콜백 지옥을 해결하기는 하지만, 코드가 장황함 그것을 해결

//ajax - asynchronous javascript and xml
//페이지 이동 없이 서버에 요청을 보내고 응답을 받는 기술입니다. 


