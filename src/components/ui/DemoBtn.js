"use client";
import CustomeButton from "./CustomeButton"; // مسیرت رو اصلاح کن

const models = [
  "fill",
  "stroke",
  "textBtn",
  "fillWhite",
  "strokeWhite",
  "textBtnWhite",
  "fillBlack",
  "strokeBlack",
  "textBtnBlack",
];

const heights = [32, 40, 48, 56];
const widths = [false, true]; // false = 114px , true = 174px

const states = [
  { label: "عادی", selected: false, disabled: false },
  { label: "Selected", selected: true, disabled: false },
  { label: "Disabled", selected: false, disabled: true },
  { label: "Selected + Disabled", selected: true, disabled: true },
];

export default function ButtonDemo() {
  return (
    <div className="p-8 space-y-12 bg-gray-100">
      {models.map((model) => (
        <div key={model}>
          <h2 className="text-xl font-bold mb-4">{model}</h2>

          {states.map((state) => (
            <div key={state.label} className="mb-6">
              <h4 className="text-sm font-semibold mb-2">{state.label}</h4>
              <div className="flex flex-wrap gap-4">
                {heights.map((height) =>
                  widths.map((width) => (
                    <div key={`${height}-${width}`} className="flex flex-col items-center text-xs">
                      <CustomeButton
                        model={model}
                        selected={state.selected}
                        disabled={state.disabled}
                        height={height}
                        width={width}
                      />
                      <span>{height}px / {width ? "Wide" : "Narrow"}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
