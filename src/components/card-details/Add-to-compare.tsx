import React from 'react'
import { Circle, CircleCheck } from 'lucide-react'
import { Button } from '../ui/button'
import useMoreDetails from '@/hook/useMoreDetails'



type Props = {}

const AddToCompare = (props: Props) => {
    const [showAll , toggleShowAll] = useMoreDetails(false);
  return (
    <div className='flex items-center'>
        <Button variant='ghost' className='bg-transparent hover:bg-transparent' onClick={toggleShowAll}>
            {showAll? (<CircleCheck className='shadow-[0_0_0_0_#00a870] bg-[#00a870] rounded-full' color='white'/>):(
                <Circle />
            )}
        </Button>
      Add to compare
    </div>
  )
}

export default AddToCompare