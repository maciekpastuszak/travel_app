interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroudImage, title, subtitle, peopleJoined}: CampPromps) => {
  return (
    <div>
      Campsite 1
    </div>
  )
}

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col p-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className='hode-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasarum"
          peopleJoined="50+ Joined"
        />
        <CampSite />
      </div>
    </section>
  )
}

export default Camp