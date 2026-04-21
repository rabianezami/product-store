import {
  ToggleGroup,
  ToggleGroupItem,
} from "../ui/toggle-group";

export default function CategoryFilter({ categories = [], value, onChange }) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(val) => val && onChange(val)}
      className="flex flex-wrap gap-2"
    >
      <ToggleGroupItem value="all" className="rounded-full px-3 py-1.5 text-xs">
        All
      </ToggleGroupItem>

      {categories.map((c) => (
        <ToggleGroupItem
          key={c}
          value={c}
          className="rounded-full px-3 py-1.5 text-xs"
        >
          {c}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}