import Billboard from "@/components/billboard";
import Container from "@/components/ui/Container";
import getBillboard from "../actions/get-billboard";

export const revalidate = 0;

export default async function Home() {
  const billboard=await getBillboard('2cc53611-4ece-4312-9323-a34194c982a7')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  )
}
