const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse flex flex-col ds:flex-row ds:gap-20 tb:mt-6 lp:flex-row">
      <div className='pl-8 pr-8'>
        <div className="h-9 ds:h-12 bg-skeleton rounded-full w-56 ds:w-80 mb-4"></div>
        <div className="h-7 bg-skeleton rounded-full w-28 ds:w-36 mb-4"></div>
        <div className='flex items-center gap-2'>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-6 ds:w-8 mb-4"></div>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-36 ds:w-60 mb-4"></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-6 ds:w-8 mb-4"></div>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-36 ds:w-60 mb-4"></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-6 ds:w-8 mb-4"></div>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-36 ds:w-60 mb-4"></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-6 ds:w-8 mb-4"></div>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-36 ds:w-60 mb-4"></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-6 ds:w-8 mb-4"></div>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-36 ds:w-60 mb-4"></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-6 ds:w-8 mb-4"></div>
          <div className="h-6 ds:h-8 bg-skeleton rounded-full w-36 ds:w-60 mb-4"></div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 ds:gap-6'>
        <div className="flex items-center justify-center w-44 ds:w-full h-28 ds:h-48 bg-skeleton rounded-[2.5rem]">
          <svg className="w-10 h-10 text-skeleton" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#f5f5fa" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
        </div>
        <div className="h-9 ds:h-12 bg-skeleton rounded-full w-48 mb-4"></div>
      </div>
    </div>
  );
};

export default Skeleton;