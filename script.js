document
  .getElementById("contact-form-alt")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById("contact-name-alt").value;
    const email = document.getElementById("contact-email-alt").value;
    const message = document.getElementById("contact-message-alt").value;

    // Create an object to send
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Send the data using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "alt-contact.php", true); // Change 'alt-contact.php' to your server-side script
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert("Your message has been sent successfully!");
          document.getElementById("contact-form-alt").reset(); // Reset the form
        } else {
          console.error(xhr.responseText);
          alert("There was an error sending your message.");
        }
      }
    };
    xhr.send(JSON.stringify(formData));
  });

function navigateToSearch() {
  const searchSection = document.querySelector(".search-section-alt");
  searchSection.scrollIntoView({ behavior: "smooth" });
}

function findDoctors() {
  const specialty = document.getElementById("doctor-specialty-alt").value;
  const location = document.getElementById("doctor-location-alt").value;
  const resultsList = document.getElementById("results-list-alt");
  resultsList.innerHTML = ""; // Clear previous results

  const doctors = [
    {
      name: "Dr. Sparsh Bansal",
      specialty: "Cardiology",
      location: "New York",
      image: "s.jpg",
      phone: "+122 3435455 3443",
    },
    {
      name: "Dr. Marry Coln",
      specialty: "Cardiology",
      location: "New York",
      image: "m.jpg",
    },
    {
      name: "Dr. Abhram Din",
      specialty: "Cardiology",
      location: "New York",
      image: "a.jpg",
    },

    {
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      location: "Los Angeles",
      image: "j.jpg",
    },
    {
      name: "Dr. Sarah Brown",
      specialty: "Neurology",
      location: "Chicago",
      image: "doctor3.jpg",
    },
    {
      name: "Dr. Mike Wilson",
      specialty: "Pediatrics",
      location: "Miami",
      image: "doctor4.jpg",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.specialty.toLowerCase().includes(specialty.toLowerCase()) &&
      doctor.location.toLowerCase().includes(location.toLowerCase())
  );

  if (filteredDoctors.length > 0) {
    filteredDoctors.forEach((doctor) => {
      const doctorCard = document.createElement("div");
      doctorCard.classList.add("doctor-card-alt");
      doctorCard.innerHTML = `
        <img src="${doctor.image}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p><strong>Specialty:</strong> ${doctor.specialty}</p>
        <p><strong>Location:</strong> ${doctor.location}</p>
      `;
      resultsList.appendChild(doctorCard);
    });
  } else {
    resultsList.innerHTML = "<p>No doctors found.</p>";
  }

  const searchSection = document.querySelector(".search-section-alt");
  window.scrollTo({
    top: searchSection.offsetTop - 300,
    behavior: "smooth",
  });
}
