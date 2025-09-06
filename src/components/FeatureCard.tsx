import React from "react";
import { FeatureFlag } from "../model/FeatureFlags";

type FeatureCardProps = {
  name: string;
  feature: FeatureFlag;
  onToggle?: () => void;
  onClick?: () => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ name, feature, onToggle, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        backgroundColor: feature.enabled ? "#d4edda" : "#f8d7da",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <h3>{name}</h3>
      <p>Status: {feature.enabled ? "✅ Enabled" : "❌ Disabled"}</p>
      <p>{feature.beta ? "🧪 Beta Feature" : "Released"}</p>
      {onToggle && <button onClick={onToggle}>{feature.enabled ? "Disable" : "Enable"}</button>}
    </div>
  );
};

export default FeatureCard;
