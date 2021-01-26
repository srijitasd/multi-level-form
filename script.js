window.addEventListener("load", (e) => {
  // selectors

  var serviceType = document.getElementById("helpType");
  var myProduct = document.getElementById("my");
  var subProject = document.getElementById("btnOne");

  var formTwoHeading = document.getElementById("formTwoHeading");
  var projectName = document.getElementById("projectName");
  var projectDescrip = document.getElementById("projectDescrip");
  var webUrl = document.getElementById("webUrl");
  var projectDetailSubmit = document.getElementById("btnTwo");

  var formThreeHeading = document.getElementById("formThreeHeading");

  // empty variables
  var serviceTypeValue;
  var productTypeValue;
  var projectNameValue;
  var projectDescripValue;
  var webUrlValue;

  // first form data
  var services = [
    {
      type: "Social media marketing",
      option: [
        "All Social media",
        "Youtube Ads",
        "Facebook Ads",
        "Snapchat Ads",
      ],
    },
    {
      type: "Website design",
      option: [
        "Single page website",
        "corporate website",
        "Ecommerce website",
        "Web Application",
      ],
    },
    {
      type: "Google Ads",
      option: [
        "Google search",
        "Display Ads",
        "Remarketing Ads",
        "Full Ecommerce Ads",
      ],
    },
    {
      type: "Landing page development",
      option: [
        "Single landing page",
        "2 Page landing page",
        "5 Page landing page",
        "Ecommerce landing page",
      ],
    },
    {
      type: "Search engine optimisation",
      option: ["Blog SEO", "Corporate SEO", "Enterprise SEO", "Ecommerce SEO"],
    },
    {
      type: "Funnel development",
      option: [
        "Webinar funnel",
        "Lead magnet funnel",
        "Free shopping sales funnel",
        "High end product sales funnel",
        "Affiliate sales funnel",
      ],
    },
  ];

  // evemts
  serviceType.addEventListener("click", (e) => {
    serviceTypeValue = serviceType.value;
    if (serviceTypeValue !== "select") {
      myProduct.removeAttribute("disabled");
      var reqData = services.filter((service) => {
        if (service.type == serviceTypeValue) {
          return service.option;
        }
      })[0];

      myProduct.innerHTML = "";
      const myProductOptions = document.createElement("option");
      myProductOptions.setAttribute("value", "select");
      myProductOptions.textContent = "select";
      myProduct.appendChild(myProductOptions);

      populateMySelect(reqData);
    } else {
      myProduct.setAttribute("disabled", true);
      myProduct.innerHTML = "";
    }
  });

  myProduct.addEventListener("click", (e) => {
    productTypeValue = myProduct.value;
    disabledSubmit(productTypeValue, subProject);
  });

  subProject.addEventListener("click", (e) => {
    fadeForm("#formOne", "#formTwo");
    formTwoHeading.textContent += serviceTypeValue;
    console.log(serviceTypeValue);
    console.log(productTypeValue);
  });

  projectName.addEventListener("change", (e) => {
    projectNameValue = projectName.value;
    if (projectNameValue.length > 10) {
      projectDescrip.removeAttribute("disabled");
    } else {
      projectDescrip.setAttribute("disabled", true);
    }
  });

  projectDescrip.addEventListener("change", (e) => {
    projectDescripValue = projectDescrip.value;
    if (projectDescrip.value.length > 20) {
      projectDetailSubmit.removeAttribute("disabled");
      gsap.to("#btnTwo", {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        cursor: "default",
        pointerEvents: "all",
      });
      projectDetailSubmit.addEventListener("click", (e) => {
        projectNameValue = projectName.value;
        projectDescripValue = projectDescrip.value;
        webUrlValue = webUrl.value;
        console.log(projectNameValue, projectDescripValue, webUrlValue);
        fadeForm("#formTwo", "#formThree");
        formThreeHeading.textContent += serviceTypeValue;
      });
    } else {
      projectDetailSubmit.setAttribute("disabled", true);
      gsap.to("#btnTwo", {
        backgroundColor: "rgba(53, 53, 53, 0.8)",
        cursor: "not-allowed",
        pointerEvents: "none",
      });
    }
  });

  // fumctions
  const populateMySelect = (datas) => {
    return datas.option.forEach((data) => {
      const myProductOptions = document.createElement("option");
      myProductOptions.setAttribute("value", data);
      myProductOptions.textContent = data;
      myProduct.appendChild(myProductOptions);
    });
  };

  const disabledSubmit = (lastInput, formButton) => {
    if (lastInput == "select" || typeof lastInput == "undefined") {
      formButton.setAttribute("disabled", true);
      formButton.style.cursor = "not-allowed";
      formButton.style.backgroundColor = "rgba(53, 53, 53, 0.8);";
    } else {
      formButton.removeAttribute("disabled");
      formButton.style.cursor = "default";
      formButton.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
  };

  //animations

  const fadeForm = (element, elementTwo) => {
    gsap.to(element, {
      duration: 0.5,
      x: -200,
      opacity: 0,
      onComplete: showForm(elementTwo),
    });
  };
  const showForm = (element) => {
    gsap.fromTo(
      element,
      { duration: 0.5, x: 100, display: "none", opacity: 0 },
      { x: 0, delay: 0.3, display: "flex", opacity: 1 }
    );
  };
});
