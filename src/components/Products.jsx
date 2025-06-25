import Card from "./Card";

export default function Products() {
  return (
    <div className="border rounded overflow-hidden grid grid-cols-5">
      { [...Array(5)].map(() => <Card />)}
    </div>
  )
}
