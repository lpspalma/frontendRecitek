import { colors } from "@mui/material";

const colorConfigs = {
  sidebar: {
    bg: "#233044",
    color: "#eeeeee",
    hoverBg: "#1e293a",
    activeBg: "#1e253a"
  },
  topbar: {
    bg: "#fff",
    color: "#000"
  },
  mainBg: colors.grey["100"],
  status: {
    color: "#eeeeee",
    backgroundColor: {
      scheduled: { bg: colors.green },
      attempts: { bg: colors.yellow },
      canceled: { bg: colors.red }
    }
  }
};

export default colorConfigs;