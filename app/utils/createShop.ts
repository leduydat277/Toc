
import { createShop as createShopInDB } from "../services/shopService";
import { createTableOfContents } from "../services/tableOfContentsService"
const initData = {
  "title": "Table of Contents Example",
  "textAlignment": {
    "alignment": "center"
  },
  "headingSettings": {
    "tag": [
      "h1",
      "h2",
      "h3"
    ],
    "numbering": "numbers",
    "isSectionLine": true,
    "isIndentation": false,
    "fontSize": 16,
    "color": "rgb(51, 51, 51)",
    "padding": {
      "top": 10,
      "bottom": 10,
      "left": 5,
      "right": 5
    }
  },
  "appearanceSettings": {
    "isScrollAnimation": true,
    "scrollOffset": 20,
    "maxWidth": 800,
    "displayAlignment": "left"
  },
  "buttonSettings": {
    "isHideButton": true,
    "hideButtonName": "Collapse",
    "hideButtonColor": "rgb(0, 0, 0)",
    "showButtonName": "Expand",
    "showButtonColor": "rgb(255, 255, 255)",
    "initialDisplayLines": 2,
    "showAllButtonName": "Expand All",
    "showAllButtonColor": "rgb(255, 0, 0)"
  },
  "linkSettings": {
    "isCustomLinkHover": true,
    "linkColor": "rgb(0, 0, 255)",
    "hoverColor": "rgb(255, 0, 0)"
  },
}

export const createShop = async ({ sest }: any) => {
  console.log("session:8", sest);
  const data = {
    shopId: sest.id,
    name: sest.shop,
    accessToken: sest.accessToken,
  };
  console.log("data:9", data);
  const rs = await createShopInDB(data);
  if (rs.accessToken === sest.accessToken) {
    console.log("createTableOfContents:11");
    const tableOfContents = await createTableOfContents({
      shopId: sest.id,
      ...initData,
    });
    console.log("tableOfContents", tableOfContents);
    return rs;

  }
};
