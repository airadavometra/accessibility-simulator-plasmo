import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const applyBlindness = async (blindMode: string) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const glaucomaImg = chrome.runtime.getURL("assets/glaucoma.png")
  const diabetImg = chrome.runtime.getURL("assets/diabet.png")

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (blindMode, glaucomaImg, diabetImg) => {
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

      filter.style.setProperty("--glaucoma-url", `url(${glaucomaImg})`)
      filter.style.setProperty("--diabet-url", `url(${diabetImg})`)

      filter.classList.remove(
        "blurred0",
        "blurred1",
        "blurred2",
        "blurred3",
        "blindness",
        "diabetic",
        "glaucoma"
      )
      filter.classList.add(blindMode)
    },
    args: [blindMode, glaucomaImg, diabetImg]
  })
}
