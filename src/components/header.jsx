import logo from '../img/logo-270b8c99 (1).svg'
import '../App.css'

 const headerLinks = [
        {id: '#firstSection', text: 'Главная'},
        {id: '#aboutMe', text: 'Обо мне'},
        {id: '#aboutCourse', text: 'О курсе'},
        {id: '#results', text: 'Результаты'},
        {id: 5, text: 'Калькулятор'},
    ]

function Header(){

    return(
        <div className='fixed left-0 z-30 top-0 border-y-2 w-full bg-white/85 backdrop-blur-[1px] max-h-14 flex justify-between items-center p-5'>
            <img src={logo} className='w-16' alt="" />
            <ul className='flex w-1/3 justify-between text-l font-medium'>
                {headerLinks.map(item =>(
                    <li>
                        <a href={item.id} className='text-black hover:text-green-500 ease-linear duration-100 cursor-pointer'>
                        {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header


