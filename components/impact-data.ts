export const impactHighlights = [
  {
    value: "4,560",
    label: "Books distributed",
    detail:
      "Putting books and essential learning resources into the hands of students, helping them learn, explore, and dream bigger.",
  },
  {
    value: "564",
    label: "Laptops supported",
    detail:
      "Helping students access laptops and digital tools to explore new opportunities, continue learning, and build essential digital skills.",
  },
  {
    value: "1,500",
    label: "Learners supported",
    detail:
      "Supporting students and individuals with educational resources and practical assistance to make learning more accessible.",
  },
] as const;

export const learningProgress = {
  completed: 180,
  total: 265,
} as const;

export const learningProgressPercent = Math.round(
  (learningProgress.completed / learningProgress.total) * 100,
);

export const allocationData = [
  { bucket: "programs", label: "Programs & learning resources", share: 78 },
  { bucket: "operations", label: "Operations", share: 12 },
  { bucket: "outreach", label: "Community outreach", share: 7 },
  { bucket: "reserve", label: "Reserve", share: 3 },
] as const;
