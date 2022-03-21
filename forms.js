function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function isValidForm(data) {
  return (
    data.name && ValidateEmail(data.email) && data.phoneNumber && data.city
  );
}

function postForm(data) {
  window.firebase
    .database()
    .ref("Commercial Project")
    .push()
    .set(data)
    .then((res) => {
      window.location.replace(
        "https://campaign.bramhacorp.in/business-park/thank-you.html"
      );
    });
}

function getParameter() {
  const address = window.location.search;
  const parameterList = new URLSearchParams(address);
  return {
    utmSource: parameterList.get("utm_source") || null,
    utmCampaign: parameterList.get("utm_campaign") || null,
    utmMedium: parameterList.get("utm_medium") || null,
  };
}

function submitEnquiry() {
  const pageURL = window.location.href;
  const data = {
    pageURL,
    name: document.getElementById("name01").value,
    email: document.getElementById("email01").value,
    phoneNumber: document.getElementById("phone01").value,
    city: document.getElementById("city01").value,
    message: document.getElementById("msg01").value,
    createdDt: new Date().toString(),
    projectName: "Business Park (Landing page)",
    ...getParameter(),
  };
  if (isValidForm(data)) {
    window.dataLayer.push({
      event: "Submit Button Click",
      products: [
        {
          pageURL,
        },
      ],
    });

    window.dataLayer.push({
      event: "Lead Submitted",
      products: [{
        NAME: document.getElementById("name01").value,
        email: document.getElementById("email01").value,
        phone: document.getElementById("phone01").value,
        CITY: document.getElementById("city01").value,
        message: document.getElementById("msg01").value,
        createdDt: new Date().toString(),
        projectName: "Business Park (Landing page)",
      }],
    });

    postForm(data);
  }
}

function submitEnquiryFooter() {
  const pageURL = window.location.href;
  const data = {
    pageURL,
    name: document.getElementById("name03").value,
    email: document.getElementById("email03").value,
    phoneNumber: document.getElementById("phone03").value,
    city: document.getElementById("city03").value,
    message: document.getElementById("msg03").value,
    createdDt: new Date().toString(),
    projectName: "Business Park (Landing page)",
    ...getParameter(),
  };
  if (isValidForm(data)) {
    window.dataLayer.push({
      event: "Submit Button Click",
      products: [
        {
          pageURL,
        },
      ],
    });

    window.dataLayer.push({
      event: "Lead Submitted",
      products: [{
        NAME: document.getElementById("name03").value,
        email: document.getElementById("email03").value,
        Phone: document.getElementById("phone03").value,
        CITY: document.getElementById("city03").value,
        message: document.getElementById("msg03").value,
        createdDt: new Date().toString(),
        projectName: "Business Park (Landing page)",
      }],
    });
    postForm(data);
  }
}

function submitFloorPlans() {
  const pageURL = window.location.href;
  const data = {
    pageURL,
    name: document.getElementById("name02").value,
    email: document.getElementById("email02").value,
    phoneNumber: document.getElementById("phone02").value,
    message: document.getElementById("msg02").value,
    city: " ",
    createdDt: new Date().toString(),
    projectName: "Business Park (Landing page)",
    ...getParameter(),
  };
  if (isValidForm(data)) {
    window.dataLayer.push({
      event: "Submit Button Click",
      products: [
        {
          pageURL,
        },
      ],
    });

    window.dataLayer.push({
      event: "Lead Submitted",
      products: [{
        NAME: document.getElementById("name02").value,
        email: document.getElementById("email02").value,
        Phone: document.getElementById("phone02").value,
        message: document.getElementById("msg02").value,
        CITY: " ",
        createdDt: new Date().toString(),
        projectName: "Business Park (Landing page)",
      }],
    });

    postForm(data);
  }
}

function onClickWhatsapp () {
  const pageURL = window.location.href;
  window.dataLayer.push({
    event: "Whatsapp Button Click",
    products: [
      {
        pageURL,
      },
    ],
  });
}
function onClickCall () {
  const pageURL = window.location.href;
  window.dataLayer.push({
    event : 'Call Button Click',
    products: [
      {
        pageURL,
      },
    ],
  });
}