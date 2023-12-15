  // Exemplo de uso
  let nomeDoHeroi = "Superman";
  let experienciaDoHeroi = 7500;
  
  let nomeDoHeroi1 = "Aquaman";
  let experienciaDoHeroi1 = 5678;
  
  let nomedoheroi2 = "Orelha";
  let experienciadoheroi2=9999;
  
    
  function classificarHeroi(nome, experiencia) {
      let nivel;
  
      if (experiencia < 1000) {
          nivel = "Ferro";
      } else if (experiencia >= 1001 && experiencia <= 2000) {
          nivel = "Bronze";
      } else if (experiencia >= 2001 && experiencia <= 5000) {
          nivel = "Prata";
      } else if (experiencia >= 6001 && experiencia <= 7000) {
          nivel = "Ouro";
      } else if (experiencia >= 7001 && experiencia <= 8000) {
          nivel = "Platina";
      } else if (experiencia >= 8001 && experiencia <= 9000) {
          nivel = "Ascendente";
      } else if (experiencia >= 9001 && experiencia <= 10000) {
          nivel = "Imortal";
      } else {
          nivel = "Radiante";
      }
  
      console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  }
  
  classificarHeroi(nomedoheroi2,experienciadoheroi2)
  classificarHeroi(nomeDoHeroi,experienciaDoHeroi);
  classificarHeroi(nomeDoHeroi1,experienciaDoHeroi1);