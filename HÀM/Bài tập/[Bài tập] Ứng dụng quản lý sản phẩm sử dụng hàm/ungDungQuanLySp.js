let proName = ["Sony Xperia", "SamsungGalaxy", "Nokia 6", "Xiaomi Redmi Note4", "Apple iPhone 6S",
            "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppp A71"]
        function creatTable() {
            let txt = '';
            for (i = 0; i < proName.length; i++) {
                txt += '<tr>';
                txt += '<td>' + proName[i] + '</td>';
                txt += '<td>' + "<button class='changetButton' onclick = 'myEdit(" + i + ")'>Edit</button>" + '</td>';
                txt += '<td>' + "<button class='changetButton' onclick = 'del(" + i + ")'>Delete</button>" + '</td>';
                txt += '</tr>';
            }
            document.getElementById('creatTable').innerHTML = txt;
            document.getElementById('amount').innerHTML = proName.length + " Products";
        }
        creatTable();

        function myEdit(i) {
            let edit1 = prompt("import your goods change: ");
            proName[i] = edit1;
            creatTable();
        }
        function del(i) {
            proName.splice(i, 1);
            creatTable();
        }
        function sumit() {
            let myAdd = document.getElementById('goods').value;
            proName.push(myAdd);
            creatTable();
        }