const newFormHandler = async function (event) {
  event.preventDefault();

  const postTitle = document.querySelector('textarea[name="data-title"]').value;
  const postDescription = document.querySelector('textarea[name="data-description"]').value;
  const postLink = document.querySelector('textarea[name="data-link"]').value;

  // Reminder- We were able to look at out project-2-setup-guide/controllers/api/exampleDataRoutes.js file to determine what our route is for this request
  await fetch(`/api/posts`, {
    // Reminder- Method will change depending on what we are doing to our API
    method: "POST",
    // Reminder- We need to make sure we are sending the correct data to our API by stringifying the data we captured from the form on line 4
    body: JSON.stringify({
      title: postTitle,
      description: postDescription,
      project_link: postLink
    }),
    headers: { "Content-Type": "application/json" },
  });
  // Reminder- This might change depending on your app. Where do you want your user to go after they submit the form?
  document.location.replace("/");
};

document
  .querySelector("#new-data-form")
  .addEventListener("submit", newFormHandler);
