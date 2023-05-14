interface IFormElements extends HTMLFormControlsCollection {
  createdAt: HTMLInputElement;
  description: HTMLInputElement;
  clientName: HTMLInputElement;
  clientEmail: HTMLInputElement;
  senderAddressStreet: HTMLInputElement;
  senderAddressCity: HTMLInputElement;
  senderAddressPostCode: HTMLInputElement;
  senderAddressCountry: HTMLInputElement;
  clientAddressStreet: HTMLInputElement;
  clientAddressCity: HTMLInputElement;
  clientAddressPostCode: HTMLInputElement;
  clientAddressCountry: HTMLInputElement;
}

class Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: { name: string; quantity: number; price: number; total: number }[];
  total: number;
  constructor(data: HTMLFormElement, id: string, status: string) {
    this.id = id;
    const initialDate = new Date(data.createdAt.value);
    this.createdAt = initialDate.toISOString().split("T")[0];
    const dueDate = new Date(data.createdAt.value);
    dueDate.setDate(initialDate.getDate() + parseInt(data.paymentTerms.value));
    this.paymentDue = dueDate.toISOString().split("T")[0];
    this.description = data.description.value;
    this.paymentTerms = parseInt(data.paymentTerms.value);
    this.clientName = data.clientName.value;
    this.clientEmail = data.clientEmail.value;
    this.status = status;
    this.senderAddress = {
      street: data.senderAddressStreet.value,
      city: data.senderAddressCity.value,
      postCode: data.senderAddressPostCode.value,
      country: data.senderAddressCountry.value,
    };
    this.clientAddress = {
      street: data.clientAddressStreet.value,
      city: data.clientAddressCity.value,
      postCode: data.clientAddressPostCode.value,
      country: data.clientAddressCountry.value,
    };
    if (data.itemName.length === undefined) {
      this.items = [
        {
          name: data.itemName.value,
          quantity: parseInt(data.itemQty.value),
          price: parseFloat(data.itemPrice.value),
          total:
            parseInt(data.itemQty.value) * parseFloat(data.itemPrice.value),
        },
      ];
    } else {
      this.items = [];
      for (let i = 0; i < data.itemName.length; i++) {
        this.items.push({
          name: data.itemName[i].value,
          quantity: parseInt(data.itemQty[i].value),
          price: parseFloat(data.itemPrice[i].value),
          total:
            parseInt(data.itemQty[i].value) *
            parseFloat(data.itemPrice[i].value),
        });
      }
    }
    this.total = this.items.reduce((acc, item) => acc + item.total, 0);
  }

  toPrint() {
    console.log(
      `A nota ${this.id} é referente a ${this.description} e possui o valor total de ${this.total} para pagamento no dia ${this.paymentDue}, criada em ${this.createdAt}`
    );
  }

  toUpload() {
    const oldData = JSON.parse(localStorage.getItem("invoices") || "[]");
    const newData = oldData.map((invoice: Invoice) => {
      if (invoice.id === this.id) {
        return this;
      }
      return invoice;
    });
    localStorage.setItem("invoices", JSON.stringify(newData));
  }

  toSave() {
    const data = JSON.parse(localStorage.getItem("invoices") || "[]");
    data.push(this);
    localStorage.setItem("invoices", JSON.stringify(data));
  }
}

export const InvoiceFactory = (
  data: HTMLFormElement,
  id: string,
  status: string
) => {
  return new Invoice(data, id, status);
};
