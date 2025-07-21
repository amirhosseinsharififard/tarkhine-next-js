/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // مسیرهای Next.js
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],

  theme: {
    extend: {
      fontFamily: {
        estedad: ["Estedad", "sans-serif"], // اضافه کردن فونت
      },
      colors: {
        main: {
          tint1: "#E5F2E9",
          tint2: "#CAE4D3",
          tint3: "#B0D7BD",
          tint4: "#96C9A7",
          tint5: "#7CBC91",
          tint6: "#61AE7B",
          tint7: "#4E9968",
          primary: "#417F56",
          shade1: "#396F56",
          shade2: "#315F41",
          shade3: "#294F36",
          shade4: "#21402B",
          shade5: "#183020",
          shade6: "#102016",
          shade7: "#08100B",
        },
        neutral: {
          white: "#FFFFFF",
          gray1: "#F9F9F9",
          gray2: "#E1E1E1",
          gray3: "#EDEDED",
          gray4: "#CBCBCB",
          gray5: "#ADADAD",
          gray6: "#757575",
          gray7: "#717171",
          gray8: "#353535",
          black: "#0C0C0C",
        },
        status: {
          error: "#C30000",
          errorL: "#ED2E2E",
          errorEL: "#FFF2F2",
          success: "#00966D",
          successL: "#00BA88",
          successEL: "#F3FDA",
          warning: "#A9791C",
          warningL: "#F4B740",
          warningEL: "#FFF8E1",
        },
      },
      padding: {
        8: "8px",
        16: "16px",
        24: "24px",
        35: "35px",
      },
      boxShadow: {
        2: "0 2px 2px rgba(0, 0, 0, 0.05)",
        4: "0 4px 4px rgba(0, 0, 0, 0.05)",
        6: "0 6px 6px rgba(0, 0, 0, 0.05)",
        8: "0 8px 8px rgba(0, 0, 0, 0.05)",
        12: "0 12px 12px rgba(0, 0, 0, 0.05)",
        16: "0 16px 16px rgba(0, 0, 0, 0.05)",
        cards:
          "0 25px 7px rgba(0, 0, 0, 0),0 16px 6px rgba(0, 0, 0, 0.01),0 9px 5px rgba(0, 0, 0, 0.05),0 4px 4px rgba(0, 0, 0, 0.09),0 1px 2px rgba(0, 0, 0, 0.1),0 0px 0px rgba(0, 0, 0, 0.1)",
        contactCard:
          "0 66px 18px rgba(0, 0, 0, 0),0 42px 17px rgba(0, 0, 0, 0.01),0 24px 14px rgba(0, 0, 0, 0.05),0 11px 11px rgba(0, 0, 0, 0.09),0 3px 6px rgba(0, 0, 0, 0.1),0 0px 0px rgba(0, 0, 0, 0.1)",
        dropShadow: "0 0 10px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        64: "64px",
      },
      spacing: {
        8: "8px ",
        16: "16px ",
        24: "24px ",
        32: "32px ",
        40: "40px ",
        48: "48px ",
        56: "56px ",
        64: "64px ",
        80: "80px ",
        120: "120px ",
        160: "160px ",
      },
    },
  },
  plugins: [],
};
