import Features from '@/components/card-details/features';
import CardItem from '@/components/card-details/card-items';
import CardFooter from '@/components/card-details/card-footer';
import useCardData from '@/hook/useCardData';


export default function CardList() {
  const {cards,loading} = useCardData();
    console.log(cards)
  if (loading) return <p>Loading cards...</p>;

  return (
<>
{cards.map((card)=>(
    <div key={card.id} className='flex flex-col w-full border-2 rounded-sm border-[#e4eaf8] h-fit'>
      <CardItem card={card}/>
      <Features features={card.features}/>
      <CardFooter card={card} />
    </div>
))}
</>
  );
}
