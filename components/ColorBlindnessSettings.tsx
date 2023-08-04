type ColorBlindnessSettingsProps = {
  selectedColorBlindnessOption: string
  setSelectedColorBlindnessOption: (value: string) => void
}

export const ColorBlindnessSettings = ({
  selectedColorBlindnessOption,
  setSelectedColorBlindnessOption
}: ColorBlindnessSettingsProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option0"
          value="protanopia"
          name="blind"
          checked={selectedColorBlindnessOption === "protanopia"}
          onChange={(e) => {
            setSelectedColorBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option0"
          className="text-base font-normal whitespace-nowrap">
          Protanopia
        </label>
      </div>
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option1"
          value="deuteranopia"
          name="blind"
          checked={selectedColorBlindnessOption === "deuteranopia"}
          onChange={(e) => {
            setSelectedColorBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option1"
          className="text-base font-normal whitespace-nowrap">
          Deuteranopia
        </label>
      </div>
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option2"
          value="tritanopia"
          name="blind"
          checked={selectedColorBlindnessOption === "tritanopia"}
          onChange={(e) => {
            setSelectedColorBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option2"
          className="text-base font-normal whitespace-nowrap">
          Tritanopia
        </label>
      </div>
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option3"
          value="achromatopsia"
          name="blind"
          checked={selectedColorBlindnessOption === "achromatopsia"}
          onChange={(e) => {
            setSelectedColorBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option3"
          className="text-base font-normal whitespace-nowrap">
          Achromatopsia
        </label>
      </div>
    </div>
  )
}
