<script>
function myAge(name, date){
	this.name = name;
	this.date = date;
	this.getAge = calculate;
};
function calculate (){
	return 2016 - date;
}
myAge.getAge("Oluwatobiloba", 1996);
windows.load();
</script>