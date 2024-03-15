import { CardInfo } from "@/lib/types"

const Card = ({ faceUp }: CardInfo) => {
  !faceUp && (
    <div className="h-32 w-24 rounded-md border border-windows-black"></div>
  )

  return <div className="bg-windows-blue">Card</div>
}
export default Card
