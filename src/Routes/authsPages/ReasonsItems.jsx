
function ReasonsItems({ title, paragraph, svg }) {
    return (
        <div className='w-[25%] max-xl:w-[49%] max-lg:w-[100%] h-[47vh] max-xl:h-[30vh] max-md:h-[30vh]  relative p-[15px] rounded-xl flex flex-col gap-3 bg-[linear-gradient(150deg,rgba(255,217,61,1)_0%,rgba(255,107,107,1)_50%,rgba(255,217,61,0.57)_100%)]'>
            <h2 className='text-2xl max-lg:text-1xl font-medium'>{title}</h2>
            <p className='font-medium max-lg:font-light'>
                {paragraph}
            </p>

            <article className='absolute bottom-0 right-0'>
                {svg}
            </article>
        </div>
    );
}

export default ReasonsItems;

