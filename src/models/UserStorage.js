"use strict"

const fs = require("fs").promises;

class UserStorage{

    static #getUserInfo(data, id){
        const users =JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{ // => id ,psword, name
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }

    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{ //reduce가 제대로 뭔지 확인 필요!!
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            } //newUsers 는 초기값
            return newUsers;
        }, {});
        return newUsers;
        
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/client.json")
            .then((data) => {
            return this.#getUserInfo(data, id);
        }) //성공했을떄
        .catch(console.error); //실패햇을때
    }
    

    static save(userInfo){
       const data = "a";
        fs.writeFile("./src/databases/users.json", data);

    }
}

module.exports = UserStorage;