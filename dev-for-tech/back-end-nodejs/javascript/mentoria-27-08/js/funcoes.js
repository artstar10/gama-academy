/*  Local Storage é um recurso do HTML 5 para se armazenar dados que não são perdidos
ao fim da seção, logo, podemos fechar e abrir o browser várias vezes e as informações
gravadas permanecerão lá  */
// Inicio da Função JSON

$(function(){

	var operacao = "A"; //"A"=Adição; "E"=Edição

	var indice_selecionado = -1;
	var tbAlunos = localStorage.getItem("tbAlunos");// Recupera os dados armazenados

	tbAlunos = JSON.parse(tbAlunos); // Converte string para objeto

	if(tbAlunos == null) // Caso não haja conteúdo, iniciamos um vetor vazio
	tbAlunos = [];

	// Função para adicionar registros
	function Adicionar(){
		//variável para verificar se número de código já existe
		var alu = GetCliente("RM", $("#txtRM").val());

	// Caso existe é informado ao cliente
		if(alu != null){
			alert("RM já cadastrado.");
			return;
		}
	// caso contrário insere
		var aluno = JSON.stringify({
			RM   			: $("#txtRM").val(),
			Nome     		: $("#txtNome").val(),
			Email 			: $("#txtEmail").val(),
			Curso			: $("#selectCurso :selected").val(),
			Celular   		: $("#txtCelular").val(),
			DtCad    		: $("#txtDataCadastro").val(),
			HoraCad   		: $("#txtHoraCadastro").val(),
			DtRealizacao    : $("#txtDataRealizacao").val(),
			HoraRealizacao  : $("#txtHoraRealizacao").val()
		});

		var valida = ValidarCampos(aluno);

		if(valida){

			alert(valida);
			return false;

		}else{

			tbAlunos.push(aluno);
			localStorage.setItem("tbAlunos", JSON.stringify(tbAlunos));
			alert("Registro adicionado.");
			
			return true;
		}

		
	}
	

	// Função para editar clientes
	function Editar(){
		tbAlunos[indice_selecionado] = JSON.stringify({
				RM   			: $("#txtRM").val(),
				Nome     		: $("#txtNome").val(),
				Email 			: $("#txtEmail").val(),
				Celular   		: $("#txtCelular").val(),
				Curso			: $("#selectCurso :selected").val(),
				DtCad    		: $("#txtDataCadastro").val(),
				HoraCad   		: $("#txtHoraCadastro").val(),
				DtRealizacao    : $("#txtDataRealizacao").val(),
				HoraRealizacao  : $("#txtHoraRealizacao").val()
			});
		localStorage.setItem("tbAlunos", JSON.stringify(tbAlunos));
		alert("Informações editadas.")
		operacao = "A";
		return true;
	}
	// Função para listar clientes
	function Listar(){
		$("#tblListar").html("");
		$("#tblListar").addClass("table");
		$("#tblListar").html(
			"<thead>"+
			"	<tr>"+
			"	<th>RM</th>"+
			"	<th>Nome</th>"+
			"	<th>Celular</th>"+
			"	<th>Email</th>"+
			"	<th>Curso</th>"+
			"	<th>Data Cadastro</th></th>"+
			"	<th>Hora Cadastro</th>"+
			"	<th>Data a Realizar o Curso</th>"+
			"	<th>Hora a Realizar o Curso</th>"+
			"	<th colspan=3>Ações</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		// Malha de repetição para inserir todos os registros
		 for(var i in tbAlunos){
			var alu = JSON.parse(tbAlunos[i]);
			
			// Formatar data para o format brasileiro dia, mes, ano
			var dtfinalCad = alu.DtCad.substring(8,10) + "/" +alu.DtCad.substring(5,7)  +"/"  +alu.DtCad.substring(0,4);
			var dtfinalRealizar = alu.DtRealizacao.substring(8,10) + "/" +alu.DtRealizacao.substring(5,7)  +"/"  +alu.DtRealizacao.substring(0,4);
		  	$("#tblListar tbody").append("<tr>"+
				"	<td>"+alu.RM+"</td>" + 
				"	<td>"+alu.Nome+"</td>" + 
				"	<td>"+alu.Celular+"</td>" + 
				"	<td>"+alu.Email+"</td>" + 
				"	<td>"+alu.Curso+"</td>" + 
				"	<td>"+dtfinalCad+"</td>" + 
				"	<td>"+alu.HoraCad+"</td>" + 
				"<td>"+dtfinalRealizar+"</td>" + 
				"	<td>"+alu.HoraRealizacao+"</td>" +
				"	<td><img src='../img/edit.png' alt='"+i+"' class='btnEditar'/><img src='../img/delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
		  								 "</tr>");
		 }
	}

		// Função para excluir registros
	function Excluir(){
		tbAlunos.splice(indice_selecionado, 1);
		localStorage.setItem("tbAlunos", JSON.stringify(tbAlunos));
		confirm("Deseja realmente excluir");
		//alert("Registro excluído.");
	}

	// função par pesquisar cliente
	function GetCliente(propriedade, valor){
		var alu = null;
        for (var item in tbAlunos) {
            var i = JSON.parse(tbAlunos[item]);
            if (i[propriedade] == valor)
			alu = i;
        }
        return alu;
	}
	//função para validar os campos
	function ValidarCampos(aluno){

		var alunoJson = JSON.parse(aluno);

		if(!alunoJson.RM){
			return 'O campo RM é obrigatório!';
		}

		if(!alunoJson.Nome){
			return 'O campo Nome é obrigatório!';
		}

		if(alunoJson.Curso == ''){
			return 'O campo Curso é obrigatório!';
		}

		if( !alunoJson.DtCad || !alunoJson.HoraCad ){
			return 'Os campos Data do Cadastro e Hora do Cadastro são obrigatórios!';
		}

		if(!alunoJson.DtRealizacao || !alunoJson.HoraRealizacao){
			return 'Os campos Data da Realização do Curso e Hora da Realização do Curso são obrigatórios!';
		}

		return null;
	}
	// chamada da função listar clientes
	Listar();

	// Ação com base nos eventos de formulário
	$("#frmCadastro").on("submit",function(){
		if(operacao == "A"){
			return Adicionar();
			}else
			return Editar();		
	});
	// Ação com base nos eventos do botão Editar
	$("#tblListar").on("click", ".btnEditar", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var alu = JSON.parse(tbAlunos[indice_selecionado]);
		$("#txtRM").val(alu.RM);
		$("#txtNome").val(alu.Nome);
		$("#txtCelular").val(alu.Celular);
		$("#txtEmail").val(alu.Email);
		$("#selectCurso :selected").text(alu.Curso),
		$("#txtDataCadastro").val(alu.DtCad);
		$("#txtHoraCadastro").val(alu.HoraCad);
		$("#txtDataRealizacao").val(alu.DtRealizacao);
		$("#txtHoraRealizacao").val(alu.HoraRealizacao);
		$("#txtRM").attr("readonly","readonly");
		$("#txtNome").focus();
		$("#txtNome").attr("readonly", true);
		$("#txtEmail").attr("readonly", true);
		$("#txtCelular").attr("readonly", true);
		$("#txtDataCadastro").attr("readonly", true);
		$("#txtHoraCadastro").attr("readonly", true);
	});
	// Ação com base nos eventos do botão Excluir
	$("#tblListar").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});

	// ultimo codigo
	if (tbAlunos.length > 0){
		var ultimo = JSON.parse(tbAlunos.slice(-1));
		var ultconv = parseInt(ultimo.RM);
		$("#txtRM").val(ultconv+1);
	}
		

// status 
$("#txtNome").change(function () {
	//alert( $( this ).val() );
	var pessoa = $(this).val();

	if (pessoa == "Wilson") {
		$("#txtStatus").val('Em aberto');
	} else
		$("#txtStatus").val('Em andamento');
});

// Obtém a data/hora atual
	
	var data = new Date();
	
	// Guarda cada pedaço em uma variável
	var dia     = data.getDate();           // 1-31
	var dia_sem = data.getDay();            // 0-6 (zero=domingo)
	var mes     = data.getMonth();          // 0-11 (zero=janeiro)
	var ano2    = data.getYear();           // 2 dígitos
	var ano4    = data.getFullYear();       // 4 dígitos
	var hora    = data.getHours();          // 0-23
	var min     = data.getMinutes();        // 0-59
	var seg     = data.getSeconds();        // 0-59
	var mseg    = data.getMilliseconds();   // 0-999
	var tz      = data.getTimezoneOffset(); // em minutos
	
	if(dia<10) {
		dia = '0'+dia;
	} 
  
	if(mes<10) {
		mes = '0'+ (mes+1);
	} 

	// Formata a data e a hora (note o mês + 1)
	var str_data = dia + '/' + (mes+1) + '/' + ano4; // Brasil
	var str_data_Brazil = ano4 + '-' + mes + '-' + dia; // europeu
	var hora_geral = hora + ':'+ min;
	//var str_hora = hora + ':' + min + ':' + seg;

	// Mostra o resultado
	//alert('Hoje é ' + str_data_Brazil + ' às ' + hora_geral);
	$("#txtDataCadastro").val(str_data_Brazil);
	$("#txtHoraCadastro").val(hora_geral);
	$("#txtDataRealizacao").val(str_data_Brazil);
	$("#txtHoraRealizacao").val(hora_geral);

	//alert(hora_geral);

});
