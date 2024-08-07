<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud</title>
</head>

<body>
    <div align="center">
        <h2>Add User</h2>
        <form>
            Name : <input type="text" id="name">
            Phone : <input type="text" id="phone"><br><br>
            <input type="button" id="add" onclick="saveRecord()" value="submit">
            <input type="button" id="edit" onclick="saveRecord()" value="Edit">

        </form>

        <h2>View User</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody id="users"></tbody>
        </table>
    </div>

    <script type="text/javascript">
        let record = [];
        const saveRecord = () => {
            let username = document.getElementById("name").value;
            let userphone = document.getElementById("phone").value;

            if (!username || !userphone) {
                alert("all field is required");
                return false;
            }

            let obj = {
                userid: Math.floor(Math.random() * 10000),
                name: username,
                phone: userphone,
            };
            record.push(obj);
            alert("record submit");
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            viewRecord();
        };
        const viewRecord = () => {
            document.getElementById('add').style.display = "block"
            document.getElementById('edit').style.display = "none"
            let tbl = "";
            record.map((val, index) => {
                tbl += `
                            <tr>
                                <td>${val.userid}</td>
                                <td>${val.name}</td>
                                <td>${val.phone}</td>
                                <td>
                                    <button onclick="deleteRecord(${val.userid})">Delete</button>
                                    <button onclick="editRecord(${val.userid})">Edit</button>
                                </td>

                            </tr>
                        `;
            });
            document.getElementById("users").innerHTML = tbl;
        };
        viewRecord();
        const deleteRecord = (id) => {
            let deletedata = record.filter((item) => item.userid != id);
            record = deletedata;
            alert("record delete");
            viewRecord();
        };

        const editRecord = (id) => {
            document.getElementById('add').style.display = "none"
            document.getElementById('edit').style.display = "block"
            let single = record.find(val => val.userid == id)
            document.getElementById('name').value = single.name
            document.getElementById('phone').value = single.phone

        }
    </script>
</body>

</html>
