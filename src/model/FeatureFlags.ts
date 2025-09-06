export type FeatureFlag = {
    enabled: boolean;
    beta: boolean;
    theme: "light" | "dark";
  };
  
  export type FeatureFlags = {
    [key: string]: FeatureFlag;
  };
  
  export const getFeatureFlags = async (): Promise<FeatureFlags> => {
    const response = await fetch("/Data/flags.json");
    if (!response.ok) throw new Error("Failed to load feature flags");
    return await response.json();
  };
  