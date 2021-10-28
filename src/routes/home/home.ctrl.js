"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    home :  (req, res) => {
        res.render("home/index");
    }, 
    login : (req, res) =>{
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
};



const process = {
    login : async(req, res) =>{

        var i,j;
        //npm install read-excel-file --save

        const xlsxFile = require('read-excel-file/node');
        
        const map = {
            '공급자': 'supplier',
            '공급자사업자번호': 'businessNumber',
            '공급자 이메일': 'emailAdderss',
            '본사': 'headOffice',
            '수거기사': 'collectionEngineer',
            '배출업체': 'dischargeCompany',
            '마감일': 'duedate',
            '종류': 'kind',
            '단가': 'unitPrice',
            '사업자번호': 'registrationNumber',
            '계산서 주소': 'billAddress',
            '사업장 주소': 'workplaceAddress',
            '관리자': 'supervisor',
            '관리자 이메일': 'supervisorEmail',
            '전화번호': 'phoneNumber',
        }
            
        xlsxFile('./Input Ex_file.xlsx', { map }).then(({ rows }) => {
            rows === [{
                supplier: '홍길동',
                businessNumber: '123-124-444',
                emailAdderss: 'asky2034@naver.com',
                headOffice: '사랑실업',
                collectionEngineer: '가나다',
                dischargeCompany: 'KK',
                duedate: new Date(2021,10,28),
                kind: '종량제', //If there's two kind for this selection, makes it boolean
                unitPrice: 180,
                registrationNumber: '123-14-12520',
                billAddress: ' ',
                workplaceAddress: ' ',
                supervisor: '홍길동',
                supervisorEmail: 'asky2034@naver.com',
                phoneNumber: '01000000001'
            }]
        })

        function clientlist(){ //왜 해당 값이 읽히지 않는 건가요?? map관련 것들을 주석 처리해도 그렇습니다.
            var supplier = '홍길동';
            var businessNumber = '123-124-444';
            var emailAdderss = 'asky2034@naver.com';
            var headOffice = '사랑실업';
            var collectionEngineer = '가나다';
            var dischargeCompany = 'KK';
            var duedate = new Date(2021,10,28);
            var kind = '종량제' ;//If there's two kind for this selection, makes it boolean
            var unitPrice = 180;
            var registrationNumber = '123-14-12520';
            var billAddress = ' ';
            var workplaceAddress = ' ';
            var supervisor = '홍길동';
            var supervisorEmail = 'asky2034@naver.com';
            var phoneNumber = '01000000001';
        }
        
        var input_clientlist = new Array(100); //입력 row에 따라 조절

        xlsxFile('./Input Ex_file - 복사본.xlsx').then((rows) => {
            console.table(rows);
            for(var i in rows){
                for(var j in rows[i]){
                    input_clientlist[i] = new clientlist();
                    if ( j == 0) input_clientlist[i].supplier = rows[i][j];
                    if ( j == 1) input_clientlist[i].businessNumber = rows[i][j];
                    if ( j == 2) input_clientlist[i].emailAdderss = rows[i][j];
                    if ( j == 3) input_clientlist[i].headOffice = rows[i][j];
                    if ( j == 4) input_clientlist[i].collectionEngineer = rows[i][j];
                    if ( j == 5) input_clientlist[i].dischargeCompany = rows[i][j];
                    if ( j == 6) input_clientlist[i].duedate = rows[i][j];
                    if ( j == 7) input_clientlist[i].kind = rows[i][j];
                    if ( j == 8) input_clientlist[i].unitPrice = rows[i][j];
                    if ( j == 9) input_clientlist[i].registrationNumber = rows[i][j];
                    if ( j == 10) input_clientlist[i].billAddress = rows[i][j];
                    if ( j == 11) input_clientlist[i].workplaceAddress = rows[i][j];
                    if ( j == 12) input_clientlist[i].supervisor = rows[i][j];
                    if ( j == 14) input_clientlist[i].supervisorEmail = rows[i][j];
                    if ( j == 15) input_clientlist[i].phoneNumber = rows[i][j];
                    //console.log를 통해 출력이 되는 것은 보았으나, input_clientlist[0].~~~는 출력이가능한데 i의 값이 1이상으로 올라갔을때 출력이 되지않습니다. 그리고 이를 지역에서 전역으로 바꿔주고 싶은데
                    //각 값들을 전부 for문안에서 받는 것이라 어떻게 바꿔야 할지 잘 모르겠습니다!
                }
            }
        })

    },
    register : (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};


module.exports = {
    output,
    process,
};
