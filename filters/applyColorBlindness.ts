export const applyColorBlindness = async (colorBlindMode: string) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (colorBlindMode) => {
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
      html.classList.add(colorBlindMode)

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
    args: [colorBlindMode]
  })
}
