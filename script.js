// fungsi untuk menampilkan table history

function history(){

    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var hobby = document.getElementById("hobby").value;
    var agama = document.getElementById("agama").value;
    var pesan = document.getElementById("pesan").value;

        document.getElementById("historyName").innerHTML = name;
        document.getElementById("historyBirthday").innerHTML = birthday;
        document.getElementById("historyGender").innerHTML = gender;
        document.getElementById("historyHobby").innerHTML = hobby;
        document.getElementById("historyAgama").innerHTML = agama;
        document.getElementById("historyPesan").innerHTML = pesan;
        document.getElementById("table").style.history = "table";
}