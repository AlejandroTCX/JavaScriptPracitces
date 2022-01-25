function validar() {
  var usuario = document.getElementById('usuario').value;
  var Contraseña = document.getElementById('pass').value;
  console.log(usuario);

  if (usuario == 'edgard' && Contraseña == '1234') {
    alert('Usuario y Contraseña validos');
  } else {
    alert('Verifique sus credenciales');
  }
}
