var inPut = [
    {"birthday":"2023-05-28T17:40:23.974Z","name":"Marlene Trantow","address":"08352","phoneNumber":"795.889.7185","gender":true,"id":"1", "image":""},
    {"birthday":"2023-05-29T01:32:28.094Z","name":"Charlotte Willms PhD","address":"527","phoneNumber":"1-674-509-4281","gender":true,"id":"2", "image":""},
    {"birthday":"2023-05-28T10:08:23.173Z","name":"Al Abernathy Sr.","address":"2506","phoneNumber":"635-220-9829 x7066","gender":true,"id":"3", "image":""},
    {"birthday":"2023-05-28T23:39:32.113Z","name":"Mr. Danny Beer","address":"5713","phoneNumber":"1-759-247-5965 x7435","gender":true,"id":"4", "image":""},
    {"birthday":"2023-05-28T07:06:55.659Z","name":"Douglas Friesen","address":"5323","phoneNumber":"787-716-6200 x84833","gender":false,"id":"5", "image":""},
    {"birthday":"2023-05-28T09:01:22.250Z","name":"Derek Konopelski","address":"7484","phoneNumber":"548-426-8396 x753","gender":false,"id":"6", "image":""},
    {"birthday":"2023-05-28T06:38:39.318Z","name":"Dr. Melanie Frami","address":"3501","phoneNumber":"1-970-656-3518","gender":false,"id":"7", "image":""},
    {"birthday":"2023-05-28T10:39:47.988Z","name":"Homer Lemke V","address":"62617","phoneNumber":"1-268-477-7594 x22729","gender":true,"id":"8", "image":""},
    {"birthday":"2023-05-28T02:21:06.381Z","name":"Stacey Wintheiser","address":"206","phoneNumber":"558.813.2124 x5305","gender":true,"id":"9", "image":""},
    {"birthday":"2023-05-28T06:14:53.320Z","name":"Dr. Marcella Leannon","address":"6703","phoneNumber":"289.222.7989","gender":false,"id":"10", "image":""}];
   

var inPutNew = JSON.parse(localStorage.getItem('data')) || [];
console.log(inPutNew)
console.log(inPut)
//console.log(inPut);
var lengthNew = inPutNew.length;
var length = inPut.length;
var body = document.querySelector('tbody');

function creatTable()
{
  if(inPutNew.length === 0){
    for(var i=0; i < length; i++)
    {
        
        var gioitinh = inPut[i].gender ? "Nam":"Nữ"
        var ngaySinh = new Date(inPut[i].birthday)
        var DinhDangNgay = ngaySinh.toLocaleDateString("vi-VN")

        body.innerHTML +=`
        <tr>
          <td>${inPut[i].id}</td>
          <td>${inPut[i].name}</td>
          <td>${DinhDangNgay}</td>
          <td>${inPut[i].address}</td>
          <td>${gioitinh}</td>
          <td>${inPut[i].phoneNumber}</td>
          <td><img src="${inPut[i].image}" id="idImage"/></td>
          <td>
            <button  onclick=Delete(${inPut[i].id}) >Delete</button>
            <button  onclick=update(${inPut[i].id})>Update</button>
          </td>
        </tr>
        `
    }
  }else{
    for(var i=0; i < lengthNew; i++)
    {
        
        var gioitinh = inPutNew[i].gender ? "Nam":"Nữ"
        var ngaySinh = new Date(inPutNew[i].birthday)
        var DinhDangNgay = ngaySinh.toLocaleDateString("vi-VN")
  
        body.innerHTML +=`
         <tr>
          <td>${inPutNew[i].id}</td>
          <td>${inPutNew[i].name}</td>
          <td>${DinhDangNgay}</td>
          <td>${inPutNew[i].address}</td>
          <td>${gioitinh}</td>
          <td>${inPutNew[i].phoneNumber}</td>
          <td><img src="${inPutNew[i].image}" id="idImage"/></td>
          <td>
            <button  onclick=Delete(${inPutNew[i].id}) >Delete</button>
            <button  onclick=update(${inPutNew[i].id})>Update</button>
          </td>
        </tr>
        `
    }
    
  }
}

creatTable();


function Delete(id) {
    var getTR = Array.from(document.getElementsByTagName("tr"));
    if(inPutNew.length === 0){
      for(var i=0; i<length; i++)
      {
        if(inPut[i].id == id)
        {
          inPut.splice(i,1);
          getTR[i+1].remove();
        }
     }
     localStorage.setItem('data', JSON.stringify(inPut)); 
    }
    else{
      for(var i=0; i<lengthNew; i++)
      {
        if(inPutNew[i].id == id)
        {
          inPutNew.splice(i,1);
          getTR[i+1].remove();
        }
     }
     localStorage.setItem('data', JSON.stringify(inPutNew)); 
    }
    
}

var img = document.getElementById("idImage");
var hoTen = document.getElementById("name");
var ngaySinh = document.getElementById("birthday");
var diaChi = document.getElementById("address");
var sdt = document.getElementById("phonenumber");
var Nam = document.getElementById("nam");
var Nu = document.getElementById("nu");

function update(id){
    var i=0;
    if(inPutNew.length ===0){
    for(; i< length; i++)
    {
       var date = new Date(inPut[i].birthday)
       //var ngayDinhDang = date.toLocaleDateString("vi-VN")
        var ngay = date.getDate();
        var thang = date.getMonth()+1;
        var nam = date.getFullYear();
        var DinhDangNgay = `${thang}/${ngay}/${nam}`;
        if(inPut[i].id  == id)
        {
            hoTen.value = inPut[i].name;
            ngaySinh.value = DinhDangNgay;
            diaChi.value = inPut[i].address;
            sdt.value = inPut[i].phoneNumber;
            if( inPut[i].gender == true)
              Nam.checked = true;
            else
              Nu.checked = true;

              var BUTTONSUA = document.getElementById("buttonSua");
              BUTTONSUA.setAttribute("onclick", `update1(${inPut[i].id})`);
          }
         
        }
       
      }else{
        for(; i< lengthNew; i++)
        {
          var date = new Date(inPutNew[i].birthday)
          //var ngayDinhDang = date.toLocaleDateString("vi-VN")
            var ngay = date.getDate();
            var thang = date.getMonth()+1;
            var nam = date.getFullYear();
            var DinhDangNgay = `${thang}/${ngay}/${nam}`;
            if(inPutNew[i].id  == id)
            {
                hoTen.value = inPutNew[i].name;
                ngaySinh.value = DinhDangNgay;
                diaChi.value = inPutNew[i].address;
                sdt.value = inPutNew[i].phoneNumber;
                if( inPutNew[i].gender == true)
                  Nam.checked = true;
                else
                  Nu.checked = true;

                  var BUTTONSUA = document.getElementById("buttonSua");
              BUTTONSUA.setAttribute("onclick", `update1(${inPutNew[i].id})`);
              }
              
            }
       
      }
    }
      
      function update1(id)
      {
        //CheckData();
        var i=0
        if(inPutNew.length === 0){
          for(; i<length; i++)
          {
            if(inPut[i].id == id)
            {
              inPut[i].name=hoTen.value
              inPut[i].birthday=ngaySinh.value;
              inPut[i].address=diaChi.value;
              inPut[i].phoneNumber=sdt.value;
              var gioitinh = Nam.checked ? "Nam":"Nữ"
              inPut[i].gender = gioitinh;
              img.src = parseImage;
              inPut[i].image = parseImage;
              break;
            }
          
           }
           console.log(inPut)
           localStorage.setItem('data', JSON.stringify(inPut)); 
        }else{
          for(; i<lengthNew; i++)
          {
            if(inPutNew[i].id == id)
            {
              inPutNew[i].name=hoTen.value
              inPutNew[i].birthday=ngaySinh.value;
              inPutNew[i].address=diaChi.value;
              inPutNew[i].phoneNumber=sdt.value;
              var gioitinh = Nam.checked ? "Nam":"Nữ"
              inPutNew[i].gender = gioitinh;
              img.src = parseImage;
              inPutNew[i].image = parseImage;
              break;
            }
          }
          console.log(inPut)
          localStorage.setItem('data', JSON.stringify(inPutNew)); 
        }
        //console.log(parseImage);
        
          

        var checkValidate = true;
        var check = document.querySelectorAll('input');
        Array.from(check).forEach(function(checkData){
            if(!checkValidate){
              return;
            }
            if(checkData.value ==='' && checkData.name ==="hoten"){
                alert('Vui lòng nhập trường họ tên');
                checkValidate = false;
                return
            }
            if(checkData.value ==='' && checkData.name ==="diachi"){
                alert('Vui lòng nhập trường địa chỉ');
                checkValidate = false;
                return
            }
            if(checkData.value ==='' && checkData.name ==="ngaysinh"){
                alert('Vui lòng nhập trường ngày sinh');
                checkValidate = false;
                return
            }
            if(checkData.value ==='' && checkData.name ==="sodt"){
              alert('Vui lòng nhập trường số điện thoại');
              checkValidate = false;
              return
            }

        })

        //console.log(check);
        if(checkValidate){
          var date = new Date(inPut[i].birthday)
          var ngay = date.getDate();
          var thang = date.getMonth()+1;
          var nam = date.getFullYear();
          var DinhDangNgay = `${thang}/${ngay}/${nam}`;
          
          var updateLate = document.querySelectorAll("tr")[id].querySelectorAll("td")
          updateLate[1].innerHTML = `${hoTen.value}`
          updateLate[2].innerHTML =`${DinhDangNgay}`
          updateLate[3].innerHTML = `${diaChi.value}`
          updateLate[5].innerHTML = `${sdt.value}`
          updateLate[4].innerHTML = `${gioitinh}`
          updateLate[6].innerHTML = `<img src="${parseImage}"/>`
        }
        
      }

    //   function CheckData(){
    //     var check = document.querySelectorAll('input[type ="text"]');
    //     if(check.value === ''){
    //         alert('1233');
    //     }

    //     console.log(check);
    //   }

    var newID = inPutNew.length === 0 ? inPut.length + 1 : inPutNew.length+1;

      function Add(){
        var img = document.getElementById("idImage");
        var hoTen = document.getElementById("name");
        var ngaySinh = document.getElementById("birthday");
        var diaChi = document.getElementById("address");
        var sdt = document.getElementById("phonenumber");
        var Nam = document.getElementById("nam");
        var gioitinh = Nam.checked ? "nam":"nu";
        var ns = new Date(ngaySinh.value);
        var DinhDangNgay = ns.toLocaleDateString("vi-VN")
        if(inPutNew.length === 0){
          inPut.push({
            birthday: DinhDangNgay,
            name: hoTen.value,
            address: diaChi.value,
            phoneNumber: sdt.value,
            gender: Nam.checked,
            id: newID,
            image: parseImage
        })

        localStorage.setItem('data', JSON.stringify(inPut));
        }else{
          inPutNew.push({
            birthday: DinhDangNgay,
            name: hoTen.value,
            address: diaChi.value,
            phoneNumber: sdt.value,
            gender: Nam.checked,
            id: newID,
            image: parseImage
        })

      localStorage.setItem('data', JSON.stringify(inPutNew));
        }
          

        console.log(inPut)
      
          body.innerHTML +=` 
          <tr>
            <td>${newID}</td>
            <td>${hoTen.value}</td>
            <td>${DinhDangNgay}</td>
            <td>${diaChi.value}</td>
            <td>${gioitinh}</td>
            <td>${sdt.value}</td>
            <td><img src="${parseImage}" /></td>
          <td>
            <button onclick=delete(${inPut.length})>Delete</button>
            <button onclick=update(${inPut.length}) >Update</button>
          
          </td>
          </tr>`
          newID++;
        }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
    
    var imageElement;
    var parseImage;
    var inputImage = document.querySelector('input[type="file"]');
    
    inputImage.onchange = function (e) {
        var dataImage = e.target.files;
    
        if (dataImage.length > 0) {
             var imageElement = dataImage[0];
            
            toBase64(imageElement)
                .then(result => {
                    parseImage = result;
                    // console.log(parseImage);
                })
                .catch(error => {
                    console.error("Lỗi khi chuyển đổi thành chuỗi base64", error);
                });
        }
    };

            
        
        

        

