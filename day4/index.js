// 使用函数求一个数组中所有元素为奇数的平均值
// var arr = [1, 2, 3, 4, 5, 6];

// function getAver(arr) {
//     var sum = 0;
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += arr[i];
//             count++;
//         }
//     }
//     return sum / count;
// }

// alert(getAver(arr));

// 判断函数中传入参数是否为质数

// var num = parseInt(prompt('请输入一个大于1的整数'));

// function judge(num) {

//     if (num < 2) {
//         alert('输入错误，不存在小于2的质数');
//     } else {
//         var flag = true;
//         for (var i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) {
//             alert(num + "是一个质数");
//         } else {
//             alert(num + '不是一个质数');
//         }
//     }

// }
// judge(num);

// 利用函数求任意个数的最大值

// function getMax() {
//     var max = arguments[0];
//     for (var i = 1; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// alert(getMax(1, 2, 3, 4, 5, 6, 7, 8, 9));

var num = 10;

function fun() {
    alert(num);
    var num;
}
fun();