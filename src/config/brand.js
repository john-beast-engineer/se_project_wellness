import logoImage from "../assets/butterfly.png"; // TODO: drop in the real butterfly art

/**
 * Same shape as the BeTheBeast config, so the two repos stay diffable:
 *   diff se_project_beast/src/config/brand.js se_project_wellness/src/config/brand.js
 * should show only brand values, never structure.
 */

// PLACEHOLDER TIER ART — inline SVG so the build is green before real art exists.
// Replace each with a real import when you have the four images.
const placeholder = (glyph) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
       <circle cx="60" cy="60" r="58" fill="#1a1a1a" stroke="#4169E1" stroke-width="2"/>
       <text x="60" y="76" font-size="44" text-anchor="middle" fill="#7B9BF5">${glyph}</text>
     </svg>`,
  );

export const BRAND = {
  id: "wellness",
  name: "TBD", // TODO: her app name
  documentTitle: "TBD",

  // Butterfly art with the name typed underneath, rather than baked into the image.
  logo: { image: logoImage, alt: "Butterfly logo", wordmark: "TBD" },

  pointsLabel: "Points",
  tiers: [
    { id: "steady", name: "Steady", threshold: 0, image: placeholder("1") },
    { id: "resilient", name: "Resilient", threshold: 560, image: placeholder("2") },
    { id: "strong", name: "Strong", threshold: 1320, image: placeholder("3") },
    { id: "clear", name: "Clear", threshold: 2360, image: placeholder("4") },
  ],

  copy: {
    completedWorkoutsHeading: "Completed workouts",
    completedWellnessHeading: "Completed practice",
    loginToTrackWorkouts: "Log in to track your workouts.",
    noWorkoutsYet: "No workouts completed yet.",
    loginToTrackWellness: "Log in to track your practice.",
    noWellnessYet: "No practice logged yet.",
  },
};

export function applyBrand() {
  document.title = BRAND.documentTitle;
}
