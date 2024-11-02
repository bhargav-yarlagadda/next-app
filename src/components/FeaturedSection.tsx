import courseData from '../data/music_courses.json'
import { Card } from './Card'
import { InfiniteMovingCard } from './MovingCards'
import { StickyScrollSection } from './StickyScroll'

const FeaturedSection = () => {
    
  return (
    <div  className='py-13 bg-gray-900'>
        <div className='text-center text-2xl py-12 text-gray-500'>
                <span>Featured Courses</span>
                <p className='text-4xl text-white ' >Learn from the Best</p>
        </div>
        <div className='flex flex-wrap justify-center gap-5'>
            {
                courseData.courses.map((courser,index)=>{
                return(
                    <Card title={courser.title} key={index} description={courser.description} instructor={courser.instructor} image={courser.image} price={courser.price} />
                )
                })
            }
        </div>
        <StickyScrollSection/>
        <InfiniteMovingCard/>
    </div>
  )
}

export default FeaturedSection
