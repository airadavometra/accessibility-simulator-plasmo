import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN"
}

window.addEventListener("load", () => {
  const divElement = document.createElement("div")

  divElement.id = "filter-layer"

  document.body.appendChild(divElement)

  const svgMarkup = `<svg id="svg-filters" style="width: 0; height: 0; position: absolute">
              <defs>
                <filter id="protanopia">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0.567, 0.433, 0,     0, 0
                0.558, 0.442, 0,     0, 0
                0,     0.242, 0.758, 0, 0
                0,     0,     0,     1, 0"
                  />
                </filter>
                <filter id="deuteranopia">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0.625, 0.375, 0,   0, 0
                0.7,   0.3,   0,   0, 0
                0,     0.3,   0.7, 0, 0
                0,     0,     0,   1, 0"
                  />
                </filter>
                <filter id="tritanopia">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0.95, 0.05,  0,     0, 0
                0,    0.433, 0.567, 0, 0
                0,    0.475, 0.525, 0, 0
                0,    0,     0,     1, 0"
                  />
                </filter>
                <filter id="achromatopsia">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0.299, 0.587, 0.114, 0, 0
                0.299, 0.587, 0.114, 0, 0
                0.299, 0.587, 0.114, 0, 0
                0,     0,     0,     1, 0"
                  />
                </filter>
              </defs>
            </svg>
      `
  document.body.insertAdjacentHTML("beforeend", svgMarkup)
})
