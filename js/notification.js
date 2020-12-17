function notifyMe(_0x6463x2, _0x6463x3, _0x6463x4) {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else {
    if (Notification.permission === "granted") {
      var _0x6463x5 = {
        body: _0x6463x2,
        icon: "images/logo.png",
        dir: "auto",
      };
      var _0x6463x6 = new Notification(
        "[Email Marketing] " + _0x6463x3,
        _0x6463x5
      );
    } else {
      if (Notification.permission !== "denied") {
        Notification.requestPermission(function (_0x6463x7) {
          if (!("permission" in Notification)) {
            Notification.permission = _0x6463x7;
          }
          if (_0x6463x7 === "granted") {
            var _0x6463x5 = {
              body: _0x6463x4,
              icon: "images/logo.png",
              dir: "auto",
            };
            var _0x6463x6 = new Notification(
              "[Email Marketing] " + _0x6463x3,
              _0x6463x5
            );
          }
        });
      }
    }
  }
}
var audio = new Audio("sound/blop.mp3");
var audio2 = new Audio("sound/bot.mp3");

function limpar() {
  var _0x6463xb = $("#ccs").val();
  if (_0x6463xb.length == 0) {
    document.getElementById("demo").innerHTML =
      '<div class="label label-warning label-dismissible">Carregue a lista antes de limpa-la!</div>';
    notifyMe(
      "Nós não consiguimos limpar algo que já está limpo!",
      "Erro a limpar a lista."
    );
    audio2.play();
    return;
  } else {
    document.getElementById("ccs").value = "";
    document.getElementById("demo").innerHTML =
      '<div class="label label-warning label-dismissible">Lista limpa.</div>';
    audio.play();
    notifyMe(
      "Todas os e-mails que estavam na sua lista foram limpos!",
      "Lista limpa."
    );
  }
}

function rmLinha(_0x6463xd) {
  var _0x6463xe = $(_0x6463xd).val().split("\n");
  _0x6463xe.splice(0, 1);
  $(_0x6463xd).val(_0x6463xe.join("\n"));
}

function start() {
  var _0x6463xb = $("#ccs").val();
  if (_0x6463xb.length == 0) {
    document.getElementById("demo").innerHTML =
      '<div class="label label-warning label-dismissible">Carregue a lista!</div>';
    notifyMe(
      "Você precisa carregar uma lista antes de iniciar!",
      "Erro ao iniciar."
    );
    audio2.play();
    return;
  } else {
    document.getElementById("demo").innerHTML =
      '<div class="label label-warning label-dismissible">Iniciado.</div>';
    audio.play();
    notifyMe(
      "Seus e-mails foram enviados com sucesso, estamos iniciando!",
      "Iniciando."
    );
  }
  var _0x6463x10;
  var _0x6463xb = $("#ccs").val();
  var _0x6463x11 = _0x6463xb.split("\n");
  for (_0x6463x10 = 0; _0x6463x10 < _0x6463x11.length; _0x6463x10++) {
    var _0x6463x13 = _0x6463x11[_0x6463x10];
    var _0x6463xd = _0x6463x10;
    check(_0x6463x13, _0x6463xd);
  }

  function _0x6463x14() {
    document.getElementById("demo").innerHTML =
      '<div class="label label-warning label-dismissible">Carregue a lista!</div>';
    notifyMe(
      "Você precisa carregar uma lista antes de iniciar!",
      "Erro ao iniciar."
    );
    audio2.play();
  }
  var _0x6463x15 = document.getElementById("ccs").value;
  var _0x6463x16 = _0x6463x15.split("\n");
  var _0x6463x17 = count(_0x6463x16, "COUNT_RECURSIVE");
  var _0x6463x18 = _0x6463x15;
  var _0x6463x19 = listToArray(_0x6463x18, "\n");
  document.getElementById("carregada").innerHTML = _0x6463x17;
  for (var _0x6463x10 = 0; _0x6463x10 < _0x6463x17; _0x6463x10++) {
    var _0x6463x1a = _0x6463x19[_0x6463x10];
    var _0x6463x1b = _0x6463x1a.split("|");
    var _0x6463x1c = "csid_" + _0x6463x10;
    var _0x6463x1d = "ccid_" + _0x6463x10;
    var _0x6463x1e = document.getElementById("ccs").value;
    var _0x6463x1f = _0x6463xb.split("\n");
    for (var _0x6463x10 = _0x6463x1f.length; _0x6463x10 < 0; _0x6463x10++) {
      var _0x6463x20 = _0x6463x1f[_0x6463x10].split("|");
    }
    _0x6463x1e = _0x6463x1e.replace(_0x6463x1a, "");
    _0x6463x1e = _0x6463x1e.replace("\n", "");
    document.getElementById("ccs").innerHTML = _0x6463x1e;
  }
}

function check(_0x6463x13, _0x6463xd) {
  var email = $("#email").val();
  var senha = $("#senha").val();
  var nome = $("#nome").val();
  var assunto = $("#assunto").val();
  var conteudo = $("#conteudo").val();
  setTimeout(function () {
    $.ajax({
      type: "GET",
      url: "app/api.php",
      dataType: "html",
      data: {
        send: "cc",
        ccs: _0x6463x13,
        email: email,
        senha: senha,
        nome: nome,
        assunto: assunto,
        conteudo: conteudo,
      },
    });
  }, _0x6463xd * 2000);
}

function SelectAll(_0x6463xd) {
  document.getElementById(_0x6463xd).focus();
  document.getElementById(_0x6463xd).select();
}

function listToArray(_0x6463x25, _0x6463x26) {
  var _0x6463x27 = [];
  if (_0x6463x25 !== undefined) {
    if (_0x6463x25.indexOf(_0x6463x26) == -1) {
      _0x6463x27.push(_0x6463x25);
    } else {
      _0x6463x27 = _0x6463x25.split(_0x6463x26);
    }
  }
  return _0x6463x27;
}

function count(_0x6463x29, _0x6463x2a) {
  var _0x6463x2b,
    _0x6463x2c = 0;
  if (_0x6463x29 === null || typeof _0x6463x29 === "undefined") {
    return 0;
  } else {
    if (_0x6463x29.constructor !== Array && _0x6463x29.constructor !== Object) {
      return 1;
    }
  }
  if (_0x6463x2a === "COUNT_RECURSIVE") {
    _0x6463x2a = 1;
  }
  if (_0x6463x2a != 1) {
    _0x6463x2a = 0;
  }
  for (_0x6463x2b in _0x6463x29) {
    if (_0x6463x29.hasOwnProperty(_0x6463x2b)) {
      _0x6463x2c++;
      if (
        _0x6463x2a == 1 &&
        _0x6463x29[_0x6463x2b] &&
        (_0x6463x29[_0x6463x2b].constructor === Array ||
          _0x6463x29[_0x6463x2b].constructor === Object)
      ) {
        _0x6463x2c += this.count(_0x6463x29[_0x6463x2b], 1);
      }
    }
  }
  return _0x6463x2c;
}

function pushcsB(_0x6463x2e, _0x6463x2f) {
  document.getElementById(_0x6463x2f).innerHTML =
    document.getElementById(_0x6463x2f).innerHTML + _0x6463x2e + "\n<br>";
}
