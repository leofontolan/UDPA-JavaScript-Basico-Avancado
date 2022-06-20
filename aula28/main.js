const userPoints = 999;

if(userPoints >= 1000){
    console.log('Você é um VIP');
}else{
    console.log('Você não é usuário normal');
}


const userType = userPoints >= 1000 ? 'VIP' : 'Normal';

console.log(userType);