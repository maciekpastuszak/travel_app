const CampSite = () => {
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
        <CampSite />
        <CampSite />
      </div>
    </section>
  )
}

export default Camp