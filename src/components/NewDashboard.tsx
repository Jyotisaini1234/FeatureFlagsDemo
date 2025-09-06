import React from "react";
import { FeatureFlag } from "../model/FeatureFlags";

type NewDashboardProps = {
  feature: FeatureFlag;
};

const NewDashboard: React.FC<NewDashboardProps> = ({ feature }) => {
  if (!feature.enabled) return null; // Only show if enabled

  return (
    <div
      style={{
        padding: "30px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: feature.theme === "dark" ? "#333" : "#f0f0f0",
        color: feature.theme === "dark" ? "#fff" : "#000",
        minHeight: "300px",
      }}
    >
      <h2>🚀 New Dashboard</h2>
      <p>This is the full dashboard visible when the feature is enabled.</p>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#e3f2fd" }}>Widget 1</div>
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#ffe0b2" }}>Widget 2</div>
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#c8e6c9" }}>Widget 3</div>
      </div>
    </div>
  );
};

export default NewDashboard;
