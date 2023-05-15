export const formValidation = (data: any) => {
  let count = 0;
  const elements = data.target.elements;
  const form = data.target;

  for (let i = 0; i < elements.length; i++) {
    const input = elements[i];
    if (input.tagName === "INPUT") {
      const id = input.id;
      if (input.value === "") {
        input.classList.add("error");
        form.querySelector(`label[for=${id}]`).classList.add("error");
        count++;
      } else {
        input.classList.remove("error");
        form.querySelector(`label[for=${id}]`).classList.remove("error");
      }
    }
  }

  if (count > 0) {
    throw new Error("All fields must be filled");
  }
};
