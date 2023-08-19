const salarios=[1000,4000,200,4000,6000,2000,1500,1750,650,10000]
const acrescimos=salarios.map((salario)=>{
    if (salario<2000){
        return salario= salario + salario*0.15
    }else if (salario>=2000){
        return salario= salario + salario*0.10
    }
})
const superior = acrescimos.filter(salario => {
    if(salario>2500){
        return salario
    }
});
function soma(v1, v2){
    return v1 + v2
}
const total=superior.reduce(soma)
console.log(total)
console.log(superior)
console.log(acrescimos)