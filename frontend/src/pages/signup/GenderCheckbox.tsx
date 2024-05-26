interface GenderCheckbox {
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
}

function GenderCheckbox({ selectedGender, setSelectedGender }: GenderCheckbox) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text font-bold">Male</span>
          <input
            id="male"
            name="male"
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => setSelectedGender("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text font-bold">Female</span>
          <input
            id="female"
            name="female"
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => setSelectedGender("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
