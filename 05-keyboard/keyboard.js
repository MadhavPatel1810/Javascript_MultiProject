const insert = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
 <div class="color">
    <table style="width:100%">
        <thead>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${e?.key !== " " ? e?.key : "space"}</td>
                <td>${e?.keyCode}</td>
                <td>${e?.code}</td>
            </tr>
        </tbody>
    </table>
 </div>`;
});
