// Import required modules
import express from "express"; // Replace require with import
import bodyParser from "body-parser";
import cors from "cors";
// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// In-memory database for profiles
let profiles = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// API Endpoints

// 1. Get all profiles
app.get("/api/profiles", (req, res) => {
  res.status(200).json(profiles);
});

// 2. Get a single profile by ID
app.get("/api/profiles/:id", (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const profile = profiles.find((p) => p.id === profileId);
  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404).json({ error: "Profile not found" });
  }
});

// 3. Create a new profile
app.post("/api/profiles", (req, res) => {
  const { name, email } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Create new profile
  const newProfile = {
    id: profiles.length + 1, // Generate new ID
    name,
    email,
  };
  profiles.push(newProfile);
  res.status(201).json(newProfile);
});

// 4. Update a profile by ID
app.put("/api/profiles/:id", (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const { name, email } = req.body;

  const profileIndex = profiles.findIndex((p) => p.id === profileId);

  if (profileIndex === -1) {
    return res.status(404).json({ error: "Profile not found" });
  }

  // Update profile
  const updatedProfile = { ...profiles[profileIndex], name, email };
  profiles[profileIndex] = updatedProfile;

  res.status(200).json(updatedProfile);
});

// 5. Delete a profile by ID
app.delete("/api/profiles/:id", (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const profileIndex = profiles.findIndex((p) => p.id === profileId);

  if (profileIndex === -1) {
    return res.status(404).json({ error: "Profile not found" });
  }

  // Remove profile
  profiles.splice(profileIndex, 1);

  res.status(200).json({ message: "Profile deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
