export function sanitizeName(inputString: string = "") {
  // Mapa de caracteres acentuados a sus equivalentes sin acento
  const mapaAcentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    ñ: "n",
    Ñ: "N",
    ü: "u",
    Ü: "U",
  } as const;

  // Reemplazar cada carácter usando el mapa de acentos
  inputString = inputString.replace(/[áéíóúÁÉÍÓÚñÑüÜ]/g, function (caracter) {
    return mapaAcentos[caracter as keyof typeof mapaAcentos] || caracter;
  });

  const sanitizedString = inputString
    .trim()
    .replace(/[^\w\s]/g, "")
    .replace(/\s/g, "-")
    .replace(/["']/g, "");
  const trimmedString = sanitizedString.slice(0, 1000).trim();
  const folderName = trimmedString;
  return folderName.toLocaleLowerCase();
}
