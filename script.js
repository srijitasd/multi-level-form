window.addEventListener("load", (e) => {
  // selectors

  var StartAProject = document.getElementById("StartAProject");

  var serviceType = document.getElementById("helpType");
  var myProduct = document.getElementById("my");
  var subProject = document.getElementById("btnOne");

  var formTwoHeading = document.getElementById("formTwoHeading");
  var projectName = document.getElementById("projectName");
  var projectDescrip = document.getElementById("projectDescrip");
  var webUrl = document.getElementById("webUrl");
  var projectDetailSubmit = document.getElementById("btnTwo");

  var formThreeHeading = document.getElementById("formThreeHeading");
  var ClientName = document.getElementById("ClientName");
  var ClientNumber = document.getElementById("ClientNumber");
  var ClientCountry = document.getElementById("ClientCountry");
  var complexityType = document.getElementById("complexityType");
  var finalSubmit = document.getElementById("btnThree");

  var backToHome = document.getElementById("backToHome");
  var back = document.getElementById("back");
  var backTwo = document.getElementById("backtwo");
  var progressBar = document.getElementById("progress-bar");
  var infos = document.querySelectorAll(".info");
  var infoDivs = document.querySelectorAll(".info-div");

  // empty variables
  var serviceTypeValue;
  var productTypeValue;
  var projectNameValue;
  var projectDescripValue;
  var webUrlValue;
  var clientNameValue;
  var clientNumberValue;
  var clientCountryValue;
  var complexityTypeValue;

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

  //events

  backToHome.addEventListener("click", () => {
    gsap.fromTo(
      "#landing-div",
      {
        display: "none",
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "fade",
      },
      {
        display: "grid",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "fade",
      }
    );
    gsap.fromTo(
      ".mat-form-container",
      {
        display: "block",
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "fade",
      },
      { display: "none", opacity: 0, duration: 0.5, ease: "fade" }
    );
    gsap.fromTo(
      "#progress-bar-container",
      {
        display: "block",
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "fade",
      },
      { display: "none", opacity: 0, ease: "fade" }
    );
  });

  StartAProject.addEventListener("click", () => {
    window.scrollTo(0, 0);
    gsap.fromTo(
      "#landing-div",
      { display: "grid", opacity: 1, duration: 0.5, ease: "fade" },
      { display: "none", opacity: 0, ease: "fade" }
    );
    gsap.fromTo(
      ".mat-form-container",
      {
        display: "none",
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "fade",
      },
      { display: "block", opacity: 1, ease: "fade" }
    );
    gsap.fromTo(
      "#progress-bar-container",
      {
        display: "none",
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "fade",
      },
      { display: "block", opacity: 1, ease: "fade" }
    );
    backToHome.style.display = "block";
  });

  back.addEventListener("click", (e) => {
    backForm("#formTwo", "#formOne");
    progressBar.style.width = "0%";
  });

  backTwo.addEventListener("click", (e) => {
    backForm("#formThree", "#formTwo");
    progressBar.style.width = "33.33%";
  });

  document.addEventListener("click", (e) => {
    if (e.target.className != "info") {
      infoDivs.forEach((infoDiv) => {
        infoDiv.classList.remove("hide-info");
      });
    }
  });

  infos.forEach((info) => {
    info.addEventListener("click", (e) => {
      info.previousElementSibling.classList.toggle("hide-info");
    });
  });

  // form one events
  serviceType.addEventListener("change", (e) => {
    serviceTypeValue = serviceType.value;
    if (serviceType.value !== "select") {
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

  myProduct.addEventListener("change", (e) => {
    productTypeValue = myProduct.value;
    disabledSubmit(productTypeValue, subProject);
  });

  subProject.addEventListener("click", (e) => {
    fadeForm("#formOne", "#formTwo");
    formTwoHeading.textContent = serviceTypeValue;
    back.style.display = "block";
    progressBar.style.width = "33.33%";
    window.scrollTo(0, 0);
  });

  // form two events

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
        backgroundColor: "rgba(22, 51, 255, 1)",
        cursor: "default",
        pointerEvents: "all",
      });
      projectDetailSubmit.addEventListener("click", (e) => {
        projectNameValue = projectName.value;
        projectDescripValue = projectDescrip.value;
        webUrlValue = webUrl.value;

        fadeForm("#formTwo", "#formThree");
        progressBar.style.width = "66.66%";
        formThreeHeading.textContent = serviceTypeValue;
        backTwo.style.display = "block";
        window.scrollTo(0, 0);
      });
    } else {
      projectDetailSubmit.setAttribute("disabled", true);
      gsap.to("#btnTwo", {
        backgroundColor: "rgba(48, 71, 250, 0.9)",
        cursor: "not-allowed",
        pointerEvents: "none",
      });
    }
  });

  // form three events

  ClientName.addEventListener("change", (e) => {
    clientNameValue = ClientName.value;
    if (ClientName.value.length > 3) {
      ClientNumber.removeAttribute("disabled");
    } else {
      ClientNumber.setAttribute("disabled", true);
    }
  });

  ClientNumber.addEventListener("change", (e) => {
    clientNumberValue = ClientNumber.value;
    if (ClientNumber.value.length > 3) {
      ClientCountry.removeAttribute("disabled");
    } else {
      ClientCountry.setAttribute("disabled", true);
    }
  });

  ClientCountry.addEventListener("change", (e) => {
    clientCountryValue = ClientCountry.value;
    if (ClientCountry.value.length > 3) {
      complexityType.removeAttribute("disabled");
    } else {
      complexityType.setAttribute("disabled", true);
    }
  });

  complexityType.addEventListener("change", (e) => {
    complexityTypeValue = complexityType.value;
    if (complexityType.value == "select" || complexityType.value == "") {
      finalSubmit.setAttribute("disabled", true);
      finalSubmit.style.cursor = "not-allowed";
      finalSubmit.style.backgroundColor = "rgba(48, 71, 250, 0.9)";
    } else {
      finalSubmit.removeAttribute("disabled");
      finalSubmit.style.cursor = "default";
      finalSubmit.style.backgroundColor = "rgba(22, 51, 255, 1)";
    }
  });

  finalSubmit.addEventListener("click", (e) => {
    progressBar.style.width = "100%";
    console.log(
      serviceTypeValue,
      "--",
      productTypeValue,
      "--",
      projectNameValue,
      "--",
      projectDescripValue,
      "--",
      webUrlValue,
      "--",
      clientNameValue,
      "--",
      clientNumberValue,
      "--",
      clientCountryValue,
      "--",
      complexityTypeValue,
      "--"
    );

    $.ajax({
      url: "submit_project.php",
      type: "POST",
      data: {
        serviceTypeValue: serviceTypeValue,
        productTypeValue: productTypeValue,
        projectNameValue: projectNameValue,
        projectDescripValue: projectDescripValue,
        webUrlValue: webUrlValue,
        clientNameValue: clientNameValue,
        clientNumberValue: clientNumberValue,
        clientCountryValue: clientCountryValue,
        complexityTypeValue: complexityTypeValue,
      },
      success: function (data) {
        console.log(data);
        if (data == 1) {
          gsap.to("#formThree", {
            duration: 0.5,
            x: 200,
            opacity: 0,
            zIndex: -1,
          });
        } else if (data == 10) {
          gsap.to("#formThree", {
            duration: 0.5,
            x: 200,
            opacity: 1,
            zIndex: -1,
          });
        }
      },
    });

    serviceType.value = "";
    myProduct.value = "";
    projectName.value = "";
    projectDescrip.value = "";
    webUrl.value = "";
    ClientName.value = "";
    ClientNumber.value = "";
    ClientCountry.value = "select";
    complexityType.value = "select";
    serviceTypeValue = "";
    productTypeValue = "";
    projectNameValue = "";
    projectDescripValue = "";
    webUrlValue = "";
    clientNameValue = "";
    clientNumberValue = "";
    clientCountryValue = "";
    complexityTypeValue = "";
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
      formButton.style.pointerEvents = "none";
      formButton.style.backgroundColor = "rgba(48, 71, 250, 0.9)";
    } else {
      formButton.removeAttribute("disabled");
      formButton.style.cursor = "default";
      formButton.style.pointerEvents = "all";
      formButton.style.backgroundColor = "rgba(22, 51, 255, 1)";
    }
  };

  //animations

  const fadeForm = (element, elementTwo) => {
    gsap.to(element, {
      duration: 0.5,
      x: -200,
      opacity: 0,
      zIndex: -1,
      onComplete: showForm(elementTwo),
    });
  };

  const backForm = (element, elementTwo) => {
    gsap.to(element, {
      duration: 0.5,
      x: 200,
      opacity: 0,
      zIndex: -1,
      onComplete: showBackForm(elementTwo),
    });
  };

  const showForm = (element) => {
    gsap.fromTo(
      element,
      { duration: 0.5, x: 100, display: "none", opacity: 0, zIndex: -1 },
      { x: 0, delay: 0.3, display: "flex", opacity: 1, zIndex: 1 }
    );
  };

  const showBackForm = (element) => {
    gsap.fromTo(
      element,
      { duration: 0.5, x: -100, display: "none", opacity: 0, zIndex: -1 },
      { x: 0, delay: 0.3, display: "flex", opacity: 1, zIndex: 1 }
    );
  };
});
