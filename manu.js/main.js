function tinhKetQua() {
    let diemChuan = parseFloat(document.getElementById("diemChuan").value);
    let diem1 = parseFloat(document.getElementById("diem1").value);
    let diem2 = parseFloat(document.getElementById("diem2").value);
    let diem3 = parseFloat(document.getElementById("diem3").value);
    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = parseInt(document.getElementById("doiTuong").value);

    // Kiểm tra nhập liệu
    if (isNaN(diemChuan) || isNaN(diem1) || isNaN(diem2) || isNaN(diem3)) {
        alert("Vui lòng nhập đầy đủ các điểm số.");
        return;
    }

    // Điểm ưu tiên theo khu vực
    let diemUuTienKhuVuc = 0;
    switch (khuVuc) {
        case "A": diemUuTienKhuVuc = 2; break;
        case "B": diemUuTienKhuVuc = 1; break;
        case "C": diemUuTienKhuVuc = 0.5; break;
        default: diemUuTienKhuVuc = 0;
    }

    // Điểm ưu tiên theo đối tượng
    let diemUuTienDoiTuong = 0;
    switch (doiTuong) {
        case 1: diemUuTienDoiTuong = 2.5; break;
        case 2: diemUuTienDoiTuong = 1.5; break;
        case 3: diemUuTienDoiTuong = 1; break;
        default: diemUuTienDoiTuong = 0;
    }

    let diemUuTien = diemUuTienKhuVuc + diemUuTienDoiTuong;
    let tongDiem = diem1 + diem2 + diem3 + diemUuTien;

    let ketQua = (diem1 > 0 && diem2 > 0 && diem3 > 0 && tongDiem >= diemChuan) ? "ĐẬU" : "RỚT";

    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML = `
        <strong>Kết quả:</strong> ${ketQua}<br/>
        <strong>Tổng điểm:</strong> ${tongDiem}
      `;
}


function tinhTienDien() {
    const ten = document.getElementById("tenNguoiDung").value.trim();
    const soKw = parseFloat(document.getElementById("soKw").value);
    let tien = 0;

    if (ten === "" || isNaN(soKw) || soKw < 0) {
        alert("Vui lòng nhập đúng tên và số Kw hợp lệ!");
        return;
    }

    let kwConLai = soKw;

    if (kwConLai > 0) {
        let bac = Math.min(kwConLai, 50);
        tien += bac * 500;
        kwConLai -= bac;
    }

    if (kwConLai > 0) {
        let bac = Math.min(kwConLai, 50);
        tien += bac * 650;
        kwConLai -= bac;
    }

    if (kwConLai > 0) {
        let bac = Math.min(kwConLai, 100);
        tien += bac * 850;
        kwConLai -= bac;
    }

    if (kwConLai > 0) {
        let bac = Math.min(kwConLai, 150);
        tien += bac * 1100;
        kwConLai -= bac;
    }

    if (kwConLai > 0) {
        tien += kwConLai * 1300;
    }

    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML = `
        <strong> Tên:</strong> ${ten}<br/>
        <strong> Số Kw:</strong> ${soKw} Kw<br/>
        <strong> Tiền phải trả:</strong> ${tien.toLocaleString()} đồng
      `;
}


function toggleKetNoi() {
      const loai = document.getElementById("loaiKhachHang").value;
      const ketNoiGroup = document.getElementById("ketNoiGroup");
      ketNoiGroup.style.display = (loai === "doanhNghiep") ? "block" : "none";
    }

    