import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import NewDashboard from "./NewDashboard";
import { FeatureFlags, getFeatureFlags } from "../model/FeatureFlags";

const FeatureList: React.FC = () => {
  const [flags, setFlags] = useState<FeatureFlags | null>(null);

  useEffect(() => {
    getFeatureFlags()
      .then(setFlags)
      .catch((err) => console.error(err));
  }, []);

  if (!flags) return <p>Loading features...</p>;

  // Toggle feature enable/disable
  const toggleFeature = (featureName: string) => {
    if (!flags) return;
    setFlags({
      ...flags,
      [featureName]: { ...flags[featureName], enabled: !flags[featureName].enabled },
    });
  };

  // Toggle theme globally (entire page) for New Dashboard
  const toggleTheme = (featureName: string) => {
    if (!flags) return;
    const current = flags[featureName].theme;
    setFlags({
      ...flags,
      [featureName]: { ...flags[featureName], theme: current === "light" ? "dark" : "light" },
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: flags.newDashboard.theme === "dark" ? "#222" : "#fff",
        color: flags.newDashboard.theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h1>React FF4J-like Feature Flags Demo</h1>

      {/* New Dashboard card */}
      <FeatureCard
        name="New Dashboard"
        feature={flags.newDashboard}
        onToggle={() => toggleFeature("newDashboard")}
        onClick={() => toggleFeature("newDashboard")}
      />
      {flags.newDashboard.enabled && (
        <button onClick={() => toggleTheme("newDashboard")} style={{ marginBottom: "20px" }}>
          Toggle Dashboard Theme
        </button>
      )}

      {/* Show full dashboard only if enabled */}
      <NewDashboard feature={flags.newDashboard} />

      <h3>Other Features:</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.entries(flags)
          .filter(([name]) => name !== "newDashboard")
          .map(([name, feature]) => (
            <FeatureCard
              key={name}
              name={name}
              feature={feature}
              onToggle={() => toggleFeature(name)}
            />
          ))}
      </div>
    </div>
  );
};

export default FeatureList;
