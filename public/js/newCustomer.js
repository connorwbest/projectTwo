$(document).ready(function() {
  $("#addCustomer").alpaca({
    data: {
      tel: ""
    },
    schema: {
      title: "New Customer",
      description: "What do you think about Alpaca?",
      type: "object",
      properties: {
        firstname: {
          type: "string",
          required: true,
          title: "Firstname",
          minLength: 2
        },
        lastname: {
          type: "string",
          title: "Lastname",
          required: true
        },
        businessName: {
          type: "string",
          title: "Business Name",
          required: true
        },
        address: {
          type: "string",
          title: "Address",
          required: true
        },
        workTel: {
          type: "string",
          title: "Work Phone",
          format: "phone",
          required: true
        },
        mobileTel: {
          type: "string",
          title: "Mobile Phone",
          format: "phone",
          required: true
        },
        email: {
          type: "string",
          title: "Email",
          format: "email",
          required: true
        }
      }
    },
    options: {
      form: {
        attributes: {
          action: "/api/customer",
          method: "post"
        },
        buttons: {
          submit: {
            click: function() {
              console.log(
                $("#addCustomer")
                  .alpaca("get")
                  .childrenByPropertyId["address"].getValue()
              );
              console.log("post route being called to create new customer");
            }
          }
        }
      },
      fields: {
        firstname: {
          size: 20
        },
        lastname: {
          size: 20
        },
        address: {
          size: 20
        },
        phone: {
          size: 20,
          maskString: "(999)-999-9999"
        }
      }
    },
    view: "bootstrap-edit"
  });
});
