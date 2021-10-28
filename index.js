//npm install read-excel-file --save

const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./Input Ex_file - 복사본.xlsx').then((rows) => {
    console.log(rows);
    console.table(rows);
    console.log(rows[1][2]);
})

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
  
//   // This function will only be called for a non-empty cell.
// type: (value) => {
//     try {
//       return parseValue(value)
//     } catch (error) {
//       console.error(error)
//       throw new Error('invalid')
//     }
//   }