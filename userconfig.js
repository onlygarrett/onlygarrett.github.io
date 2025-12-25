// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = frappe;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Chicago",
    scale: "F",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      gm: ["https://www.google.com/maps?q=", "Google Maps"],
      yt: ["https://www.youtube.com/results?search_query=", "YouTube"],
      x: ["https://x.com/search?q=", "X"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://github.com/onlygarrett/onlygarrett.github.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "tab",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: palette.green,
            },
            {
              name: "livestreamfail",
              url: "https://reddit.com/r/livestreamfail",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "hltv",
              url: "https://www.hltv.org",
              icon: "crosshair",
              icon_color: palette.peach,
            },
            {
              name: "howlongtobeat",
              url: "https://www.github.com",
              icon: "clock-hour-10",
              icon_color: palette.peach,
            },
            {
              name: "isthereanydeal",
              url: "https://www.isthereanydeal.com",
              icon: "device-gamepad-2",
              icon_color: palette.peach,
            },
            {
              name: "nexus",
              url: "http://nexusmods.com/",
              icon: "mouse-2",
              icon_color: palette.peach,
            },
            {
              name: "daily.dev",
              url: "https://app.daily.dev/?",
              icon: "clock-hour-10",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "work",
          links: [
            {
              name: "gmail",
              url: "http://gmail.com/",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "rummy",
              url: "https://mail.google.com/mail/u/1/#inbox",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "github",
              url: "https://www.github.com",
              icon: "brand-github",
              icon_color: palette.peach,
            },
            {
              name: "chatgpt",
              url: "https://www.chatgpt.com",
              icon: "message-chatbot",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/directory",
              icon: "brand-twitch",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
