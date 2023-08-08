export const applyMyopia = async (diopter: string, fontSize: string) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (diopter, fontSize) => {
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
      html.classList.add(`font${fontSize}`)

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
      filter.classList.add(`blurred${diopter}`)
    },
    args: [diopter, fontSize]
  })
}
