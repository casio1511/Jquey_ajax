//Tạo file > Tạo function 
var DSND = [];
function NguoiDungService (){
   
     this.DsNguoiDung=[];
    //tạo phương thức lấy danh sách người dùng
    this.layDanhSachNguoiDung = function (){
       //Cách 2 dùng return 
        return $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
       //Cách 1 xử dụng done, fail ( ko xài return Ajax)
        // .done(function(result){
        
        //     // DSND = result;
            
        // })
        // .fail(function(err){
        //     console.log(err);
        // })



        //thêm người dùng
      
    }
    this.themNguoiDung = function(nguoiDung){
        return $.ajax({
             url:"http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
             type:"POST",
             data: nguoiDung
         })
        
     }

     this.xoaNguoiDung = function (taiKhoan){
       return  $.ajax({
             url:`http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taikhoan}`,
             type:"DELETE"
         })
     }

     this.timKiemNguoiDung = function (keyword){
         var mangTimKiem =[];
       var dsnd =  JSON.parse(localStorage.getItem("danhSachNguoiDung"));

       dsnd.map(function(item){
           if(item.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase())>-1)
           {
               mangTimKiem.push(item);
           }
       })
       return mangTimKiem;
     }
}



// function taoBang(){
//     var tblBody = "";
//     console.log(DSND);
   
//     for (var i = 0; i < DSND.length; i++){
//       tblBody += `
//           <tr>
//             <td>${i}</td>
//             <td>${DSND[i].TaiKhoan}</td>
//             <td>${DSND[i].MatKhau}</td>
//             <td>${DSND[i].HoTen}</td>
//             <td>${DSND[i].Email}</td>
//             <td>${DSND[i].SoDT}</td>
//             <td>${DSND[i].TenLoaiNguoiDung}</td>
//             </tr>
//       `
//     }
//     $("#tblDanhSachNguoiDung").html(tblBody);
//    }

//    function taoBang(){
//     var tblBody = "";
//    //duyệt map như forEach
//     DSND.map(function(item,index){
     
//      console.log(item);
//      tblBody += `
//            <tr>
//              <td>${index + 1}</td>
//              <td>${item.TaiKhoan}</td>
//              <td>${item.MatKhau}</td>
//              <td>${item.HoTen}</td>
//              <td>${item.Email}</td>
//              <td>${item.SoDT}</td>
//              <td>${item.TenLoaiNguoiDung}</td>
//              <td>
//                 <button id="btnSua" type="button" class="btn btn-success">Sửa</button>
//                 <button id="btnXoa" type="button" class="btn btn-warning">Xóa</button>
//              </td>
//              </tr>`
//     });
   
    
//     $("#tblDanhSachNguoiDung").html(tblBody);
//    }
