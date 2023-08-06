import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const clearFilters = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const html = document.getElementsByTagName("html")[0]
      html.classList.remove(
        "font0",
        "font1",
        "font2",
        "font3",
        "protanopia",
        "deuteranopia",
        "tritanopia",
        "achromatopsia"
      )

      const filter = document.getElementById("filter-layer")
      filter.classList.remove(
        "blurred0",
        "blurred1",
        "blurred2",
        "blurred3",
        "blindness",
        "diabetic",
        "glaucoma"
      )
    },
    args: []
  })
}
