import HomeCarousel from '../assets/info/HomeCarousel'
import ImageCarousel from '../components/ImageCarousel'

function Home() {
  return (
    <div className='bg-slate-50 grid justify-items-center'>
        <div className='container grid grid-cols-3 md:grid-cols-9 py-5 px-4 md:h-96'>
            <div className='col-span-3'>
                <ImageCarousel carouselInfo={HomeCarousel}/>
            </div>
            <div className='mx-2 mt-6 md:mt-0 border border-slate-300 col-span-1 md:col-span-2'>
                <div className='bg-purple-600 text-slate-50 p-2'>Parenting: New Mamas Virtual Support Group</div>
                <div className=''>Jan 5, 12:30pm - 1:30pm
                </div>
                <div className='border-b border-purple-600'>Location: Virtual</div>
                <div className=''>Welcome new mamas! Having a baby, whether it's your first or your fifth, brings new joys and new challenges. QPL is here for you and your new little one. Please join us on Fridays at 12:30pm for our New Mamas Virtual Support Group, designed to share resources and information among mothers with infants 0-12 months. The group is run by a certified lactation consultant & pre/postpartum doula. To register, send an email to catherine.olivo@qpl.org
                </div>
            </div>
            <div className='mx-2 mt-6 md:mt-0 border border-slate-300 col-span-1 md:col-span-2'>
                <div className='bg-purple-600 text-slate-50 p-2'>Queens Future: Robotics/Coding With SpringBoard Incubators</div>
                <div className=''>Jan 10, 3:00pm - 5:30pm</div>
                <div className='border-b border-purple-600'>Location: Baisley Park<br/>117-11 Sutphin Boulevard, Jamaica, NY 11436</div>
                <div className=''>Created as a program where "teens design their world," Queens Future is a series of teen programs that highlight the ever-growing field of designer culture.<br/><br/>
                In these robotics/coding workshops, students will learn new terminology surrounding robotics Arduino basics
                </div>
            </div>
            <div className='mx-2 mt-6 md:mt-0 border border-slate-300 col-span-1 md:col-span-2'>
                <div className='bg-purple-600 text-slate-50 p-2'>Intermediate HTML: Elevate Your Web Skills!</div>
                <div className=''>Jan 10, 3:30pm - 5:00pm
                </div>
                <div className='border-b border-purple-600'>Location: Virtual</div>
                <div className=''>Build your website skills with us! Discover how websites work by diving into DOM, multimedia, forms, and advanced CSS! Make your website awesome for everyone: boost how people use it, get found easily, and create super-cool pages that fit any screen! <br/><br/>
                Day 1 (January 3, 2024): Exploring Websites Inside Out
                Day 2 (January 10, 2024): Making Websites Better for Everyone
                </div>
            </div>

        </div>
    </div>
  
  )
}

export default Home