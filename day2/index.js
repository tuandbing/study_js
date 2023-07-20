// alert(18 == '18'); // true 
// alert(18 === '18'); // false
// var num = 17;
// var num2 = 18;
// // alert(num > num2 && num > 15);
// alert(num && num2);

// var num1 = prompt('请输入第一个数字');
// var num2 = prompt('请输入第二个数字');
// alert(num1 > num2 ? num1 : num2);

// 1. 求1-100 所有数的总和，平均值，偶数的和，7的倍数的和

// var sum = 0;
// var even = 0;
// var i;
// var seven = 0;
// for (i = 1; i <= 100; i++) {
//     sum += i;
//     if (i % 2 == 0) {
//         even += i;
//     }
//     if (i % 7 == 0) {
//         seven += i;
//     }
// }
// var aver = sum / 100;
// alert('所有数之和为: ' + sum + '\n所有数的平均值为: ' + aver + '\n偶数之和为: ' + even + '\n所有7的倍数的和为: ' + seven);

// 2. 打印*矩阵

// var x = prompt('请输入行数');
// var y = prompt('请输入列数');
// var result = '';
// while (x--) {
//     var temp = y;
//     while (temp--) {
//         result += '*';
//     }
//     result += '\n';
// }
// alert(result);

// 3. 简易ATM
var left_money = 100;
var flag = true;
while (flag) {
    var choose = prompt('请输入您要的操作:\n1. 存钱\n2. 取钱\n3. 查询余额\n4. 退出');
    switch (parseInt(choose)) {
        case 1:
            var add = prompt('请输入您要存的数量');
            left_money += parseFloat(add);
            alert('已存入');
            break;
        case 2:
            var money = prompt('请输入您要取出的数量');
            if (money > left_money) {
                alert('余额不足,无法取出');
            } else {
                left_money -= money;
                alert('请取出');
            }
            break;
        case 3:
            alert('当前余额为: ' + left_money);
            break;
        case 4:
            flag = false;
            break;
        default:
            alert('指令错误，请重新输入');
    }

}
alert('已成功退出');