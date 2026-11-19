function openLinkedProject() {
  const projectId = window.location.hash.slice(1);
  const project = document.getElementById(projectId);
  const details = project?.querySelector(".research-details");
  if (details) details.open = true;
}

openLinkedProject();
window.addEventListener("hashchange", openLinkedProject);
