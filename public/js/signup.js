const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document
    .querySelector("#username-input-signup")
    .value.trim();
  const passwordEl = document
    .querySelector("#password-input-signup")
    .value.trim();

  const projectsLinkEl = document
    .querySelector("#projects-link-input-signup") // Temp
    .value.trim();


  if (passwordEl.length >= 8 && usernameEl && projectsLinkEl) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
        projects_link: projectsLinkEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  } else {
    alert(
      "Please include both a username and password, and make sure your password is at least 8 characters long"
    );
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
