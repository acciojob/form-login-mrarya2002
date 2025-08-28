function getFormvalue() {
    //Write your code here
	let fname =  document.getElementById("form1").elements[0].value;
	let lname =  document.getElementById("form1").elements[1].value;
	let name = fname+" "+lname;
	alert(name);
}
