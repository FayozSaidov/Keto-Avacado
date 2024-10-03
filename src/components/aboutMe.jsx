import wide from '../img/Без названия.svg'
import diet from '../img/diet-plan-650528de.png'

function WorkingFor() {
    return(
        <div className='w-full bg-slate-50 mt-16'>
            <img src={wide} className='w-full '/>
            <div className='w-4/6  mx-auto h-[550px]'>
            <div className='flex justify-between items-center'>
                <div className='w-4/6'>
                    <h1 className='text-3xl font-semibold'>Я работаю с вами над созданием индивидуального плана питания</h1>
                    <p className='mt-5 text-gray-600'>Это ежедневное составление времени питания для каждого индивидуально, а также подробная информация о полезных и вредных продуктов, влияющих на вес. Более того, привлекательное и разнообразное питание станет ключом к вашему похудению и отказу от вредных привычек.</p>
                </div>
                <div className='w-80 bg-white h-[450px] flex items-center justify-center ml-[30px] shadow-2xl'>
                <img src={diet} className='w-72'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WorkingFor