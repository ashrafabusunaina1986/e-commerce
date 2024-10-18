export const formItemSControls = [
  {
    label: "Name",
    name: "name",
    commonType: "input",
    placeholder: "Enter The Name",
    type: "text",
  },
  {
    label: "Image",
    name: "image",
    commonType: "input",
    type: "file",
  },
];
export const initialFormItemsControls = {
  name: "",
  image: "",
};
export const search = {
  type: "",
};

export const productFormItemsControls = [
  {
    label: "Name Product",
    name: "nameProduct",
    commonType: "input",
    placeholder: "Enter The Name Product",
    type: "text",
  },
  {
    label: "Image",
    name: "image",
    commonType: "input",
    type: "file",
  },
  {
    label: "Price",
    name: "price",
    commonType: "input",
    placeholder: "Enter The Price",
    type: "text",
  },
  {
    label: "Description",
    name: "description",
    commonType: "textarea",
    placeholder: "Enter The Description",
    // type: "text",
  },
  {
    label: "Measurement",
    name: "measurement",
    commonType: "input",
    placeholder: "Enter The Measurement",
    type: "text",
  },
  {
    label: "Specifications",
    name: "specifications",
    commonType: "input",
    placeholder: "Enter The Specifications",
    type: "text",
  },
  {
    label: "Name Of The Producing Company",
    name: "nameOfTheProducingCompany",
    commonType: "input",
    placeholder: "Enter The Name Of The Producing Company",
    type: "text",
  },
  {
    label: "Website Of The Producing Company",
    name: "websiteOfTheProducingCompany",
    commonType: "input",
    placeholder: "Enter The Website Of The Producing Company",
    type: "text",
  },
  {
    label: "Name Of The Selling Company",
    name: "nameOfTheSellingCompany",
    commonType: "input",
    placeholder: "Enter The Name Of The Selling Company",
    type: "text",
  },
  {
    label: "The Selling Company's Website",
    name: "theSellingCompanysWebsite",
    commonType: "input",
    placeholder: "Enter The Selling Company's Website",
    type: "text",
  },
  {
    label: "Made From Country",
    name: "made",
    commonType: "input",
    placeholder: "Enter The Made From Country",
    type: "text",
  },
  {
    label: "Quality",
    name: "quality",
    commonType: "input",
    placeholder: "Enter The Quality",
    type: "text",
  },
  {
    label: "Select Type",
    name: "selectType",
    commonType: "select",
  },
];

export const initialProductFormItemsControls = {
  nameProduct: "",
  image: "",
  price: "",
  description: "",
  measurement: "",
  specifications: "",
  nameOfTheProducingCompany: "",
  websiteOfTheProducingCompany: "",
  nameOfTheSellingCompany: "",
  theSellingCompanysWebsite: "",
  made: "",
  quality: "",
  selectType: "",
};
export const options = [
  {
    l: "Housewares",
    p: "/housewares",
    s: true,
  },
  {
    l: "Sanitary ware",
    p: "/sanitary-ware",
    s: true,
  },
  {
    l: "Electrical tools",
    p: "/electrical-tools",
    s: true,
  },
  {
    l: "Cleaning tools",
    p: "/cleaning-tools",
    s: true,
  },
  {
    l: "Construction tools",
    p: "/construction-tools",
    s: true,
  },
  {
    l: "Food and drink",
    p: "/food-and-drink",
    s: true,
  },
  {
    l: "Clothes",
    p: "/clothes",
    s: true,
  },
  {
    l: "Games",
    p: "/games",
    s: true,
  },
  {
    l: "Dairy and cheese",
    p: "/dair-and-cheese",
    s: true,
  },
  { l: "Real estate", p: "/real-estate", s: true },
  {
    l: "Maintenance and decoration",
    p: "/maintenance-and-decoration",
    s: true,
  },
  { l: "Furniture", p: "/furniture", s: true },
];
export const valid = (d) => {
  return d && Object.values(d).every((item) => item.trim() !== "");
};
