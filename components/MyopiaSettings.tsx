import { useState } from "react"

const DIOPTERS = { "0": "0", "1": "-1", "2": "-3", "3": "-6" }
const FONT_SIZES = { "0": "16px", "1": "24px", "2": "32px", "3": "48px" }

type MyopiaSettingsProps = {
  selectedDiopter: string
  setSelectedDiopter: (value: string) => void
  selectedFontSize: string
  setSelectedFontSize: (value: string) => void
}

export const MyopiaSettings = ({
  selectedDiopter,
  setSelectedDiopter,
  selectedFontSize,
  setSelectedFontSize
}: MyopiaSettingsProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex gap-2">
          <label
            htmlFor="diopters-selector"
            className="block text-base font-normal whitespace-nowrap">
            Diopters:
          </label>
          <output className="block text-base font-normal whitespace-nowrap">
            {DIOPTERS[selectedDiopter]}
          </output>
        </div>
        <input
          type="range"
          min="0"
          max="3"
          step="1"
          name="diopters"
          list="diopters"
          value={selectedDiopter}
          onChange={(e) => {
            setSelectedDiopter(e.target.value)
          }}
        />
        <datalist id="diopters">
          <option value="0" label="0"></option>
          <option value="1" label="-1"></option>
          <option value="2" label="-3"></option>
          <option value="3" label="-6"></option>
        </datalist>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex gap-2">
          <label
            htmlFor="font-size-selector"
            className="block text-base font-normal whitespace-nowrap">
            Font size:
          </label>
          <output className="block text-base font-normal whitespace-nowrap">
            {FONT_SIZES[selectedFontSize]}
          </output>
        </div>
        <input
          type="range"
          min="0"
          max="3"
          step="1"
          name="font-size"
          list="font-size"
          value={selectedFontSize}
          onChange={(e) => {
            setSelectedFontSize(e.target.value)
          }}
        />
        <datalist id="font-size">
          <option value="0" label="normal"></option>
          <option value="1" label="large"></option>
          <option value="2" label="very large"></option>
          <option value="3" label="extra large"></option>
        </datalist>
      </div>
    </div>
  )
}
