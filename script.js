
const testimonials = {
  t1: {
    name: "Amina K.",
    role: "Classmate",
    quote: "Always willing to explain things clearly and help others debug."
  },
  t2: {
    name: "Brian O.",
    role: "Mentor",
    quote: "Learns fast, asks good questions and finishes what they start."
  },
  t3: {
    name: "Grace W.",
    role: "Project teammate",
    quote: "Reliable, organised and great to build a project with."
  }
};

// Projects are stored in an ARRAY of objects.
// "tech" is a list, so each technology can be shown as its own coloured tag.
const projects = [
  {
    icon: "🌐",
    title: "Personal Portfolio",
    description: "This site: a single page showing my work and contact details.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    icon: "✅",
    title: "To-Do List",
    description: "A simple app to add and remove daily tasks.",
    tech: ["HTML", "JavaScript"]
  },
  {
    icon: "🌦️",
    title: "Weather Page",
    description: "A page that shows the weather for a city I choose.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

// ---------- SHOW TESTIMONIALS ----------
const testimonialList = document.getElementById("testimonial-list");

// A "for...in" loop goes through every key in the object (t1, t2, t3).
for (const key in testimonials) {
  const t = testimonials[key];

  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML =
    '<div class="avatar">' + t.name.charAt(0) + "</div>" +
    '<p class="quote">' + t.quote + "</p>" +
    '<p class="author"><strong>' + t.name + "</strong><br>" + t.role + "</p>";

  testimonialList.appendChild(card);
}

// ---------- SHOW PROJECTS ----------
const projectList = document.getElementById("project-list");

// A "for...of" loop goes through every item in the array.
for (const project of projects) {

  // A second loop turns the tech list into little coloured tags.
  let pills = "";
  for (const item of project.tech) {
    pills += '<span class="pill">' + item + "</span>";
  }

  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML =
    '<div class="icon">' + project.icon + "</div>" +
    "<h3>" + project.title + "</h3>" +
    "<p>" + project.description + "</p>" +
    '<div class="pills">' + pills + "</div>";

  projectList.appendChild(card);
}
