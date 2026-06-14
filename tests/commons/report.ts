const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "149",
    },
    device: "My Local System",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "FREE CRM Demo",
    data: [
      { label: "Project", value: "Free CRM" },
      { label: "Release", value: "1.0" },
      { label: "Cycle", value: "B11221.34321" },     
    ],
  },
});
