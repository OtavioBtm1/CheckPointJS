const salarios=[1000,4000,200,4000,6000,2000,1500,1750,650,10000]
const acrescimos=salarios.map((salario)=>{
    if (salario<2000){
        return salario*0.15
    }else if (salario>=2000){
        return salario*0.10
    }
})
console.log(acrescimos)