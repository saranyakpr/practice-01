   // variable
   
    export const name = "react"
	
	// function
	
	export const fun=()=>{
		return name;
	};
	
	// default
	
	export default()=>{
		return name;
	}
	
	// class
	
	class obj{
		fun=()=>{
			console.log("hi");
		}
	}
	
	const obj1 = new obj();
	obj1.fun();