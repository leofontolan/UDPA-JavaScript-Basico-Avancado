function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('data must be a Date object');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}

try{
    const data = new Date('01-01-1970 12:45:05');
    const hora = retornaHora(11);
    console.log(hora);

}catch(err){
    // Trata erro

}finally{
    console.log("Tenha um bom dia");
}