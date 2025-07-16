function sanitizeName(inputString = "") {
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
    Ü: "U"
  };
  inputString = inputString.replace(/[áéíóúÁÉÍÓÚñÑüÜ]/g, function(caracter) {
    return mapaAcentos[caracter] || caracter;
  });
  const sanitizedString = inputString.trim().replace(/[^\w\s]/g, "").replace(/\s/g, "-").replace(/["']/g, "");
  const trimmedString = sanitizedString.slice(0, 1e3).trim();
  const folderName = trimmedString;
  return folderName.toLocaleLowerCase();
}

export { sanitizeName as s };
