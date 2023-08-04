import { useEffect, useState } from "react"

import "./style.css"

import { BlindnessSettings } from "~components/BlindnessSettings"
import { ColorBlindnessSettings } from "~components/ColorBlindnessSettings"
import { MyopiaSettings } from "~components/MyopiaSettings"

type Filters = "myopia" | "blindness" | "colorBlindness"

function IndexPopup() {
  const [selectedFilter, setSelectedFilter] = useState<Filters>()
  const [selectedDiopter, setSelectedDiopter] = useState<string>("0")
  const [selectedFontSize, setSelectedFontSize] = useState<string>("0")
  const [selectedBlindMode, setSelectedBlindMode] =
    useState<string>("blindness")
  const [selectedColorBlindMode, setSelectedColorBlindMode] =
    useState<string>("protanopia")

  useEffect(() => {
    switch (selectedFilter) {
      case "myopia": {
        //apply filter
      }
      case "blindness": {
        //apply filter
      }
      case "colorBlindness": {
        //apply filter
      }
      default: {
        //clear filters
      }
    }
  }, [
    selectedFilter,
    selectedDiopter,
    selectedFontSize,
    selectedBlindMode,
    selectedColorBlindMode
  ])

  return (
    <div className="w-fit p-8 flex flex-col gap-8 bg-zinc-100">
      <div className="w-full flex flex-col gap-4">
        <label
          htmlFor="filter-selector"
          className="block text-xl font-normal whitespace-nowrap">
          Select a visual imparement:
        </label>
        <select
          name="filter-selector"
          className="px-4 py-2 text-base font-meduim bg-zinc-100 rounded border border-zinc-300"
          value={selectedFilter}
          onChange={(e) => {
            setSelectedFilter(e.target.value as Filters)
          }}>
          <option value="">Off</option>
          <option value="myopia">Myopia</option>
          <option value="blindness">Blindness</option>
          <option value="colorBlindness">Color blindness</option>
        </select>
      </div>
      {selectedFilter === "myopia" && (
        <MyopiaSettings
          selectedDiopter={selectedDiopter}
          setSelectedDiopter={setSelectedDiopter}
          selectedFontSize={selectedFontSize}
          setSelectedFontSize={setSelectedFontSize}
        />
      )}
      {selectedFilter === "blindness" && (
        <BlindnessSettings
          selectedBlindnessOption={selectedBlindMode}
          setSelectedBlindnessOption={setSelectedBlindMode}
        />
      )}
      {selectedFilter === "colorBlindness" && (
        <ColorBlindnessSettings
          selectedColorBlindnessOption={selectedColorBlindMode}
          setSelectedColorBlindnessOption={setSelectedColorBlindMode}
        />
      )}
    </div>
  )
}

export default IndexPopup
