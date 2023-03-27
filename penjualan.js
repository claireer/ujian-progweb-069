function hasil() {
	var barang=parseInt(document.getElementById("barang").value);
	var harga=parseInt(document.getElementById("harga").value);
	var jumlah=parseInt(document.getElementById("jumlah").value);
	var total=harga*jumlah;
	document.getElementById("total").innerHTML=total;
}