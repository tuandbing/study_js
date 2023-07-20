// 创建数组的方式
// var arr = new Array();

// var arr2 = [];

// var arr3 = [1, 2, '馒头', 'teacher'];

// alert(arr3);

// var week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

// for (var i = 0; i < week.length; i++) {
//     console.log(week[i]);
// }

// 求数组中的最大值

// var arr = [2, 6, 1, 77, 23, 12, 34, 45, 64];
// var max = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// alert(max);

// 增加数组元素
//1. 修改数组长度 arr.length = 10
//2. 修改索引号，追加数组元素 arr[4] = '馒头'

// var arr = [2, 6, 1, 77, 23, 12, 34, 45, 64];
// var arr2 = [];
// var j = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//         arr2[j++] = arr[i];
//     }
// }
// alert(arr2);

// var arr = [2, 6, 1, 77, 23, 12, 34, 45, 64];
// var arr2 = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//         arr2[arr2.length] = arr[i];
//     }
// }
// alert(arr2);

//对 arr数组中的元素，进行从大到小的排序。
// var arr = [220, 190, 140, 160, 150, 180, 170, 50, 150, 88, 108];
// var temp;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// alert(arr);