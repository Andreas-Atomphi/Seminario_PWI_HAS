var cpf;
var cpfAlert;
var passAlert;
function checkCPF(x) {
    var Igual;
    cpfAlert = document.getElementById("alert");
    cpf = x + x.substring(0, 1);
    cpfAlert.style.color = '#FF0';
    Igual = 0;
    if (x == '') {
    	return "Campo vazio";
    }
  	for (var i = 0; i < 11; i ++)
  	{
  		if (cpf.substring(i, i+1) == cpf.substring(i + 1, i + 2))
  		{
  			Igual ++;
  		}
  		console.log (Igual);
 	}
 	if (Igual == 11)
 	{
 		return "Números repetidos";
 	}
 	else
 	{
 		return valCPF (x);
 	}
}
function valCPF(strCPF)
{
	var Soma;
    var Resto;
	Soma = 0;
	for (var i=1; i<=9; i++)
	{
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	}
	Resto = (Soma * 10) % 11;
	if ((Resto == 10) || (Resto == 11))
	{
		Resto = 0;
	}
    if (Resto != parseInt(strCPF.substring(9, 10)) )
    {
    	cpfAlert.style.color = '#F00';
    	return "CPF inválido";
   	}
	Soma = 0;
   	for (var i = 1; i <= 10; i++)
   	{
   		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
   	}
   	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))
	{
		Resto = 0;
	}
	if (Resto != parseInt(strCPF.substring(10, 11) ) )
	{
		cpfAlert.style.color = '#F00';
		return "CPF inválido";
	}
	return "";
}

function checkPasswd(x, y)
{
   passAlert = document.getElementById("alertpass");
   if (x != y) {
      passAlert.style.color = "#F00";
      return "Senhas não coincidem";
   }
   else if (x == y && (x != "" && y != ""))
   {
      passAlert.style.color = "#0F0";
      return "Ok.";
   }
   else if (x == "" && y == "")
   {
      return ""
   }
}