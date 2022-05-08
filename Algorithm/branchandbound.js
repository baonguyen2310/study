//Bai toan nguoi du lich

var n = 4;
var maxC = 10000;
var C = new Array(n);
for (let i = 1; i <= n; i++){
    C[i] = new Array(n);
}

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
        if (i == j) {
            C[i][j] = 0;
        } else {
            C[i][j] = maxC;
        }
    }
}

C[1][2] = 3;
C[1][3] = 2;
C[1][4] = 1;
C[2][3] = 1;
C[2][4] = 2;
C[3][4] = 4;

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){  
        C[j][i] = C[i][j];
    }
}

console.log(C);

//Khoi tao, di tu thanh pho 1
var minSpending = maxC; //gia tri tot nhat
var bestWay = new Array(n+1);
var x = new Array(n+1); //cau hinh
var t = new Array(n+1); //tong chi phi
var free = new Array(n+1).fill(true); //chua di qua

free[1] = false; //da di qua thanh pho 1
x[1] = 1; //xuat phat tu thanh pho 1
t[1] = 0; //chi phi tai thanh pho 1

//main function
function travelingSalesman(i) {
    for (let j = 2; j <= n; j++){
        if (free[j]) {
            x[i] = j;
            t[i] = t[i-1] + C[x[i-1]][j]; //Chi phi tu thanh pho truoc do den thanh pho j
            if (t[i] < minSpending) { //branch and bound
                if (i < n) {
                    free[j] = false; //danh dau j da duoc di qua
                    console.log(j, 'false');

                    travelingSalesman(i + 1); 

                    free[j] = true; //khong di vao sau hon duoc nua thi quay lui, tra lai free[j]
                    console.log(j, 'true');
                } else {
                    if ((t[n] + C[x[n]][1]) < minSpending) {
                        minSpending = t[n] + C[x[n]][1];
                        console.log(x, minSpending);
                        bestWay = [...x]; //do cung tro ve 1 vung nho
                    }
                }
            }
        } 
    }
}

travelingSalesman(2);
console.log(bestWay);