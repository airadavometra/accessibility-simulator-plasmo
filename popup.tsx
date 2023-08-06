import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import "./style.css"

import { BlindnessSettings } from "~components/BlindnessSettings"
import { ColorBlindnessSettings } from "~components/ColorBlindnessSettings"
import { MyopiaSettings } from "~components/MyopiaSettings"
import { applyBlindness } from "~contents/applyBlindness"
import { applyColorBlindness } from "~contents/applyColorBlindness"
import { applyMyopia } from "~contents/applyMyopia"
import { clearFilters } from "~contents/clearFilters"

type Filters = "myopia" | "blindness" | "colorBlindness" | "off"

function IndexPopup() {
  const [selectedFilter, setSelectedFilter] = useStorage<string>(
    "filter",
    "off"
  )
  const [selectedDiopter, setSelectedDiopter] = useState<string>("0")
  const [selectedFontSize, setSelectedFontSize] = useState<string>("0")
  const [selectedBlindMode, setSelectedBlindMode] =
    useState<string>("blindness")
  const [selectedColorBlindMode, setSelectedColorBlindMode] =
    useState<string>("achromatopsia")

  useEffect(() => {
    switch (selectedFilter) {
      case "myopia": {
        applyMyopia(selectedDiopter, selectedFontSize)
        break
      }
      case "blindness": {
        applyBlindness(selectedBlindMode)
        break
      }
      case "colorBlindness": {
        applyColorBlindness(selectedColorBlindMode)
        break
      }
      case "off": {
        clearFilters()
        break
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
          <option value="off">Off</option>
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
