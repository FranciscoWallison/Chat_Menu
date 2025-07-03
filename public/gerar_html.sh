#!/usr/bin/env bash
pages=(
  buscar-dentistas dentistas-favoritos financeiro irpf reembolso
  minha-cobertura perguntas-frequentes adicionar-dependente fale-conosco
  meus-tratamentos extrato-de-protocolos beneficios redes-sociais
  odontoconecta dentista-online navegacao-guiada
)

for P in "${pages[@]}"; do
  # converte slug em título: "minha-cobertura" → "Minha Cobertura"
  title=$(echo "$P" | sed -E 's/-/ /g; s/(^| )([a-z])/\U\2/g')

  cat > "${P}.html" <<EOF
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>$title</title>
</head>
<body>
  <h1>$title</h1>
</body>
</html>
EOF

  echo "Criado ${P}.html"
done
