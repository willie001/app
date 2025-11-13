export function btn(primary = false) {
  return [
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium",
    primary
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "bg-white ring-1 ring-gray-300 text-gray-900 hover:bg-gray-50",
  ].join(" ");
}
