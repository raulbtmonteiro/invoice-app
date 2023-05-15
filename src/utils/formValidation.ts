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

  count = 0;

  for (let i = 0; i < elements.length; i++) {
    const input = elements[i];
    if (input.tagName === "INPUT") {
      input.id === "itemName" ? count++ : null;
    }
  }

  if (count === 0) {
    throw new Error("An item must be added");
  }
};
