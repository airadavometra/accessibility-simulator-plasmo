type BlindnessSettingsProps = {
  selectedBlindnessOption: string
  setSelectedBlindnessOption: (value: string) => void
}

export const BlindnessSettings = ({
  selectedBlindnessOption,
  setSelectedBlindnessOption
}: BlindnessSettingsProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option3"
          value="blindness"
          name="blind"
          checked={selectedBlindnessOption === "blindness"}
          onChange={(e) => {
            setSelectedBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option3"
          className="text-base font-normal whitespace-nowrap">
          Blindness
        </label>
      </div>
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option1"
          value="diabetic"
          name="blind"
          checked={selectedBlindnessOption === "diabetic"}
          onChange={(e) => {
            setSelectedBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option1"
          className="text-base font-normal whitespace-nowrap">
          Diabetic retinopathy
        </label>
      </div>
      <div className="w-full flex items-baseline gap-2">
        <input
          type="radio"
          id="option2"
          value="glaucoma"
          name="blind"
          checked={selectedBlindnessOption === "glaucoma"}
          onChange={(e) => {
            setSelectedBlindnessOption(e.target.value)
          }}
        />
        <label
          htmlFor="option2"
          className="text-base font-normal whitespace-nowrap">
          Glaucoma
        </label>
      </div>
    </div>
  )
}
