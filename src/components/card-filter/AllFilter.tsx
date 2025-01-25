import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react'
import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { CardDetails, PlanTypeEnum } from '@/utils/cardUtils'
import { Separator } from '../ui/separator'
import { useDisplayCards } from '@/hook/useDisplay'
import useCardData from '@/hook/useCardData'
import { useScreenSize } from '@/hook/header'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



type Props = {
  selectedFeature: string[]; 
   toggleFeature: (feature: string) => void;
   toggleBank: (bank: string) => void; 
   selectedBank: string[]; 
   togglePlanType: (plan: PlanTypeEnum) => void; 
   selectedPlanType: PlanTypeEnum[]; 
   toggleReward: (reward: string) => void;
  selectedReward: string[];
  handleResetAll: () => void;
}

const AllFilter = ({selectedFeature,
  toggleFeature,
  toggleBank,
  selectedBank,
  togglePlanType,
  selectedPlanType,
  selectedReward,
  toggleReward,handleResetAll
}: Props) => {

  const {cards,openDialog,
      isDialogOpen,
      handleSaveChanges,
      setIsDialogOpen,
      } = useCardData();
  const {handleFilterClick,
    activeFilter}= useDisplayCards();
    const screenSize = useScreenSize();

    const allFeatures = [...new Set(cards.flatMap((card)=>card.features))]
    const allBanks = [...new Set(cards.flatMap((card)=>card.bankName.split(",")))]
    const allPlanType = [...new Set(cards.flatMap((card)=>card.planType))]
    const allRewards = [...new Set(cards.flatMap((card)=>card.rewards))]
    const uniqueRewards = [...new Set(allFeatures)].slice(0, 5);

    const FilterSection =({
      title,items,selectedItems,
      toggleItem,
      type,
    }:{
      title: string;
    items: (string  | PlanTypeEnum )[];
    selectedItems:  (string | PlanTypeEnum)[] | undefined;
    toggleItem: (item: string | PlanTypeEnum) => void;
    type: string;
    }) => (
      <>
      {screenSize === 'mobile' ? (
        <>
        {activeFilter === type && (
          <div className="flex flex-col space-y-4 justify-between w-full px-1">
            {items.map((item) => (
              <div
                key={item}
                className="flex w-full h-[25px] px-1 items-center text-[#253858] justify-between cursor-pointer"
                onClick={() => toggleItem(item)}
              >
                {item}
                <Checkbox checked={selectedItems?.includes(item)} />
              </div>
            ))}
          </div>
        )}
      </>
      ):(

     
      activeFilter === type && (
        <>
        <p className='text-[#253858]'>{title}</p>
                <div className='grid grid-cols-2 gap-3 w-full overflow-y-auto scroll-smooth h-[355px] px-4'>
               {items.length ? (
               items.map((item) => (
               <div
                 key={item}
                 className="flex w-full border-2 h-fit px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
                 onClick={()=>toggleItem(item)}
                 >
                 <Checkbox checked={selectedItems?.includes(item)}/>
                 {item}
               </div>
               ))
               ) :(
                 <div className='text-center px-4'>No items available</div>
               )}
               </div>
        </>
      )

    )}
      </>
    )
  return (

    <>
    {screenSize === 'mobile' ? 
    (
        <div>
          <Sheet>
  <SheetTrigger> <SlidersHorizontal /></SheetTrigger>
  <SheetContent className='w-full top-0'>
    <div className='top-0 w-full bg-white flex gap-2 items-center'>
      <SheetClose>
      <ArrowLeft />
      </SheetClose>
      Sort/Filter
    </div>
    <Separator orientation='horizontal'  className='w-full mt-4 mb-2'/>
    <SheetHeader>
      <SheetDescription className='left-0 p-0'>
      <div className="flex flex-row left-0 p-0">
                  <div className="flex flex-col space-y-4 min-w-20 bg-green-200 h-full">
                    <div
                      className="flex w-full h-[55px] px-4 items-center text-[#253858] gap-5"
                      onClick={() => handleFilterClick("features")}
                    >
                      Features
                    </div>
                    <div
                      className="flex w-full h-[55px] px-4 items-center text-[#253858] gap-5"
                      onClick={() => handleFilterClick("banks")}
                    >
                      Banks
                    </div>
                    <div
                      className="flex w-full h-[55px] px-4 items-center  text-[#253858] gap-5"
                      onClick={() => handleFilterClick("planTypes")}
                    >
                      Plan Types
                    </div>
                    <div
                      className="flex w-full h-[55px] px-4 items-center text-[#253858] gap-5"
                      onClick={() => handleFilterClick("rewardTypes")}
                    >
                      Reward Types
                    </div>
                  </div>
                  <Separator orientation="vertical" className="mx-5 h-full" />
                  <div className="flex flex-row overflow-y-auto w-full scroll-smooth h-[500px]">
                    <FilterSection
                      title="Features"
                      items={allFeatures}
                      selectedItems={selectedFeature}
                      toggleItem={toggleFeature}
                      type="features"
                    />
                    <FilterSection
                      title="Banks"
                      items={allBanks}
                      selectedItems={selectedBank}
                      toggleItem={toggleBank}
                      type="banks"
                    />
                    <FilterSection
                      title="Plan Types"
                      items={allPlanType as PlanTypeEnum[]}
                      selectedItems={selectedPlanType}
                      toggleItem={togglePlanType}
                      type="planTypes"
                    />
                    <FilterSection
                      title="Reward Types"
                      items={uniqueRewards}
                      selectedItems={selectedReward}
                      toggleItem={toggleReward}
                      type="rewardTypes"
                    />
                  </div>
                </div>
      </SheetDescription>
    </SheetHeader>
    <SheetFooter className='p-2 mx-auto bg-white flex flex-row bottom-0 fixed w-full items-center ' >
    <Separator orientation='horizontal'  className='w-full flex-1'/>

    <Button type="submit" variant="ghost" className='w-full text-[#ff5530] hover:text-[#ff5530] bg-white hover:bg-white' onClick={handleResetAll}>Reset All</Button>
              <Button type="submit" className='w-full bg-[#ff5530] hover:bg-[#ff5530] text-white'
              onClick={handleSaveChanges}>Apply</Button>
        </SheetFooter>
  </SheetContent>
</Sheet>

        </div>
    ):(
            <div className='flex w-full'>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger className='flex' onClick={openDialog}>
                    <div className='hidden lg:flex items-center gap-2'>
          <Filter />
          All Filters
                    </div>
                    {/* <div className='flex w-full sm:flex md:flex lg:hidden items-center gap-2'>
                      <SlidersHorizontal />
                    </div> */}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] md:w-[425px] lg:w-[980px] xl:max-w-[1200px] h-[600px] overflow-y-auto" >
            <DialogHeader className='justify-between flex'>
              <DialogTitle>Filter plans by</DialogTitle>
            </DialogHeader>
            <Separator orientation='horizontal'/>
        <div className='flex flex-row mt-0'>
          <div className='flex flex-col space-y-4 min-w-[250px]'>
            <div className="flex w-full border-2 h-[55px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5" onClick={()=>handleFilterClick('features')}>
            <Checkbox />
            Features
            </div>
            <div className="flex w-full border-2 h-[55px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5" onClick={()=>handleFilterClick('banks')}>
            <Checkbox />
            Banks
            </div>
            <div className="flex w-full border-2 h-[55px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
            onClick={()=>handleFilterClick('planTypes')}>
            <Checkbox />
            Plan Types
            </div>
            <div className="flex w-full border-2 h-[55px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
            onClick={()=>handleFilterClick('rewardTypes')}
            >
            <Checkbox />
            Reward Types
            </div>
          </div>
          <Separator orientation='vertical'  className='mx-5 h-full'/>


            <div className='flex flex-col overflow-y-auto w-full'> 
            <FilterSection
                title="Features"
                items={allFeatures}
                selectedItems={selectedFeature}
                toggleItem={toggleFeature}
                type="features"
              />
              <FilterSection
                title="Banks"
                items={allBanks}
                selectedItems={selectedBank}
                toggleItem={toggleBank}
                type="banks"
              />
              <FilterSection 
              title='Plan Types'
              items={allPlanType as PlanTypeEnum[]}
              selectedItems={selectedPlanType}
              toggleItem={togglePlanType}
              type='planTypes'
              />
               <FilterSection
                title="Reward Types"
                items={allRewards}
                selectedItems={selectedReward}
                toggleItem={toggleReward}
                type="rewardTypes"
              />
          </div>
        </div>
        
            <DialogFooter className='flex justify-end right-0 items-center'>
            <Button type="submit" variant="ghost" className='w-full text-[#ff5530] hover:text-[#ff5530] bg-white hover:bg-white' onClick={handleResetAll}>Reset All</Button>
              <Button type="submit" className='w-full bg-[#ff5530] hover:bg-[#ff5530] text-white'
              onClick={handleSaveChanges}>Apply</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </div>
        )}
</>
  )
}

export default AllFilter