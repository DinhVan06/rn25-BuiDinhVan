import logo from "./logo.svg";
import "./App.css";


// Bài toán mua xăng
  // N = 5
  // 1L : 1
  // 2L : 1
  // 1 lần 1L và 2 lần 2L => 3 đồng
  // out : 3 đồng
  

  // N = 5
  // 1L : 1
  // 2L : 3
  // 1 lần 1L và 2 lần 2L => 7 đồng
  // 5 lần 1L  => 5 đồng
  // out : 5 đồng

  // N = 7
  // 1L : 3
  // 2L : 4
  // 3 lần 2L và 1 lần 1L => 15 đồng
  // out : 15 đồng
  // lấy số lần mua 2L là lấy phần nguyên của N/2(2L) -> parseInt(N/2(2L) * 2)
  // lấy số lần mua 1L là: N - (parseInt(N/2(2L) * 2)

  // giải thuật
  // b <= 2*a thì mua b
  // N * a
  // với N là số lẻ thì bắt buộc phải mua 1 lần 1L
function App() {
  let N = 6;
  let a = 2;
  let b = 3;
  let soLanMua2L = parseInt(N / 2);
  let soLanMua1L = N - soLanMua2L * 2;
  var kq = 0;
  if (b <= 2 * a) {
    kq = soLanMua2L * b + soLanMua1L * a;
  } else {
    kq = N * a;
  }
  console.log(kq);  
}
export default App;
