// Tìm ra phần tử lặp lại nhiều nhất và số lần lặp lại của nó
const Input = [1, 2, 4, 3, 9, 6, 6, 1, 6, 9, 1, 9, 2, 4];

const output = (arr) => {
  const kq = arr.filter((val, index) => {
    return index === arr.indexOf(val);
  });
  return kq;
};

const output2 = (arr) => {
  let mang = [];
  let max = 0;
  output(arr).forEach((val, idx) => {
    let dem = 0;
    arr.filter((value, index) => {
      if (val == value) {
        dem++;
      }
    });
    if (dem >= max) {
      max = dem;
      console.log(
        "Phan tu xuat hien nhieu nhat la: " + val + "\nso lan xuat hien:" + max
      );
    } else {
      dem = 0;
    }
  });
};

console.log(output2(Input));

// Input.forEach((val) => console.log(val));
