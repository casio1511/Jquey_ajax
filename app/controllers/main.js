$(document).ready(function () {
    var nguoiDungService = new NguoiDungService();

    layDanhSachNguoiDung();
    function getInput(title, btnTitle, btnID) {

        $(".modal-title").html("Thêm người dùng")
        var footer = `
        <button id="${btnID}" type="button" class="btn btn-success">${btnTitle}</button>
        <button id="btnClose" data-dismiss="modal" class="btn btn-danger">Close</button>
      `
        $(".modal-footer").html(footer);

    }

    function moiTaoBranch(){
        
    }

    //Thêm người dùng click function
    $("#btnThemNguoiDung").click(function () {
        getInput("Thêm người dùng", "Thêm", "btnThem");
    })


    $("body").delegate(".btnSua", "click", function () {
        getInput("Sửa người dùng", "Cập Nhật", "btnCapNhat");
    })


    $("body").delegate(".btnXoa", "click", function () {
   
        var taiKhoan= $(this).data('taikhoan');
        nguoiDungService.xoaNguoiDung(taiKhoan)
        .done(function(){
             
        })
        .fail(function(){

        })
    })
    

    $("#txtTimKiem").keyUp(function(){
        var mangTimKiem=  [];
        var ds= nguoiDungService.layDanhSachNguoiDung();
        var keyword= $("#txtTimKiem").val();
        mangTimKiem
    })

    //Lấy value từ form
    // $("#btnThem").click(function(){
    //     var taiKhoan= $('#TaiKhoan').val();
    //     console("taiKhoan",taiKhoan);

    // })
    $("body").delegate(".btnSua","click",function(){
        var taiKhoan= $(this).data('taikhoan');
        // var viTri = nguoiDungService.layDanhSachNguoiDung(taiKhoan);
        // var danhSachNguoiDung= JSON.parse(localStorage.get("danhSachNguoiDung"));
        
        //cách 2 - ko tìm vị trí mà tìm thẳng thằng cần tìm

        var nguoiDung = nguoiDungService.layDanhSachNguoiDung2(taiKhoan);
        console.log("người dùng" + nguoiDung);

        $('#TaiKhoan').val(taiKhoan);
        $('#HoTen').val(nguoiDung.HoTen);
        $('#MatKhau').val(nguoiDung.MatKhau);
        $('#Email').val(nguoiDung.Email);
        $('#SoDienThoai').val(nguoiDung.SoDT);


        //console.log(viTri);
        // $('#TaiKhoan').val(taiKhoan);
        // $('#HoTen').val(danhSachNguoiDung[vitri].HoTen);
        // $('#MatKhau').val(danhSachNguoiDung[vitri].MatKhau);
        // $('#Email').val(danhSachNguoiDung[vitri].Email);
        // $('#SoDienThoai').val(danhSachNguoiDung[vitri].SoDT);
    })

    $("body").delegate("#btnThem","click", function(){
        var taiKhoan= $('#TaiKhoan').val();
        var hoTen= $('#HoTen').val();
        var matKhau= $('#MatKhau').val();
        var email= $('#Email').val();
        var soDT= $('#SoDienThoai').val();
        var loaiNguoiDung= $('#loaiNguoiDung').val();

        var nguoiDung = new NguoiDung (taiKhoan,matKhau, hoTen, email, soDT, loaiNguoiDung);
        nguoiDungService.themNguoiDung(nguoiDung)
        .done(function(result){
            if(result==="tai khoan da ton tai!"){
                alert(result);
            }
            else{
                location.href="";    
            }
        })
        .fail(function(err){
            console.log(err);
        })
    })


    function layDanhSachNguoiDung() {
        nguoiDungService.layDanhSachNguoiDung()
            .done(function (result) {
                taoBang(result);
                localStorage.setItem("danhSachNguoiDung",JSON.stringify(result));
            })
            .fail(function (err) {
                console.log(err);
            })
    }


    
})



function taoBang(DSND) {
    var tblBody = "";
    //duyệt map như forEach
    DSND.map(function (item, index) {

        console.log(item);
        tblBody += `
           <tr>
             <td>${index + 1}</td>
             <td>${item.TaiKhoan}</td>
             <td>${item.MatKhau}</td>
             <td>${item.HoTen}</td>
             <td>${item.Email}</td>
             <td>${item.SoDT}</td>
             <td>${item.TenLoaiNguoiDung}</td>
             <td>
                <button  type="button" class="btn btn-success btnSua" data-toggle="modal" data-target="#myModal">Sửa</button>
                <button  type="button" class="btn btn-warning btnXoa" data-taikhoan="${item.TaiKhoan}">Xóa</button>
             </td>
             </tr>`
    });


    $("#tblDanhSachNguoiDung").html(tblBody);
}

