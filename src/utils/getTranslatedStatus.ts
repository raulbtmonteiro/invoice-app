export const getTranslatedStatus = (status: string, language: string) => {
  if(language === "pt-BR"){
    switch (status) {
      case "pending":
        return "Pendente";
      case "paid":
        return "Pago";
      case "draft":
        return "Rascunho";
      default:
        return "Pendente";
    }
  } else {
    return status;
  }
}